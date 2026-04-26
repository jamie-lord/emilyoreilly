# frozen_string_literal: true
#
# Rewrite root-absolute src="" and href="" attributes in rendered HTML
# to include site.baseurl, so the migrated WordPress body content (which
# hard-codes paths like src="/wp-content/uploads/...") still resolves
# when the site is served under a baseurl — e.g. the github.io preview
# at https://jamie-lord.github.io/emilyoreilly/.
#
# Idempotent: URLs that already start with "<baseurl>/" are skipped.
# Only touches paths beginning with a single slash, so protocol-relative
# (//cdn.example.com), absolute (https://...), mailto:, tel:, and
# fragment links are left alone. No-op when baseurl is empty
# (production custom domain).

module BaseurlInject
  ATTR_RE = /\b(src|href)="(\/(?!\/)[^"]*)"/

  Jekyll::Hooks.register %i[pages documents], :post_render do |item|
    next if item.output.nil?
    baseurl = item.site.config["baseurl"].to_s
    next if baseurl.empty?

    item.output = item.output.gsub(ATTR_RE) do
      attr = Regexp.last_match(1)
      url  = Regexp.last_match(2)
      if url == baseurl || url.start_with?("#{baseurl}/")
        %(#{attr}="#{url}")
      else
        %(#{attr}="#{baseurl}#{url}")
      end
    end
  end
end
