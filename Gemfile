source "https://rubygems.org"

# We build the site ourselves on our own GitHub Actions runner (see
# .github/workflows/jekyll.yml) instead of letting GitHub Pages build
# it server-side. That means we don't need the `github-pages` meta-gem,
# and dropping it lets custom Ruby plugins in _plugins/ actually load
# (the github-pages gem force-enables Jekyll safe-mode, which silently
# disables them).
gem "jekyll", "~> 3.10"
# kramdown's GFM parser, used because _config.yml has `kramdown.input: GFM`.
gem "kramdown-parser-gfm"

group :jekyll_plugins do
  gem "jekyll-redirect-from"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
end

# Windows / JRuby tzinfo support — harmless on macOS and Linux.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick"
