# Emily O'Reilly ACR — emilyoreilly.co.uk

Static Jekyll site that replaces the previous WordPress installation.
Built and served by GitHub Pages from this repository.

## Local development

```sh
bundle install
bundle exec jekyll serve
# → http://127.0.0.1:4000
```

## Deployment

`main` is deployed automatically by `.github/workflows/jekyll.yml`.

### Phase 1 — preview at github.io (current)

Push `main`, then in the repo's **Settings → Pages**, set the build
source to **GitHub Actions**. The site will publish to:

```
https://jamie-lord.github.io/emilyoreilly/
```

The workflow auto-detects the URL and base path from
`actions/configure-pages` and overrides `site.url` / `site.baseurl` for
the build, so all internal links and the SEO meta-tags resolve against
the github.io URL.

The custom-domain `CNAME` file is intentionally parked at `dns/CNAME`
during this phase. While it sits there it's a record of the desired
domain, but GitHub Pages doesn't see it — so the github.io URL serves
the site directly instead of 302-ing to a not-yet-resolving DNS name.

### Phase 2 — cut over to emilyoreilly.co.uk

When you're happy with the preview:

1. Point DNS at GitHub:
   ```
   A    emilyoreilly.co.uk     185.199.108.153
   A    emilyoreilly.co.uk     185.199.109.153
   A    emilyoreilly.co.uk     185.199.110.153
   A    emilyoreilly.co.uk     185.199.111.153
   AAAA emilyoreilly.co.uk     2606:50c0:8000::153
   AAAA emilyoreilly.co.uk     2606:50c0:8001::153
   AAAA emilyoreilly.co.uk     2606:50c0:8002::153
   AAAA emilyoreilly.co.uk     2606:50c0:8003::153
   CNAME www.emilyoreilly.co.uk jamie-lord.github.io.
   ```

2. Move the CNAME file back to the repo root and commit:
   ```sh
   git mv dns/CNAME CNAME
   git commit -m "Cut over to emilyoreilly.co.uk"
   git push
   ```

3. In **Settings → Pages**, GitHub will pick up the CNAME and offer to
   enforce HTTPS — wait until the cert provisions, then enable it.

After that, the github.io URL will 302 to the custom domain.

## URL parity with the WordPress site

The Jekyll permalink scheme matches the WordPress permalink scheme
exactly so existing inbound links keep working without manual redirects:

- Home: `/`
- Pages: `/<slug>/`
- Posts: `/YYYY/MM/DD/<slug>/`
- Uploaded images: `/wp-content/uploads/YYYY/MM/<filename>`

A small number of pages also accept legacy aliases via
`jekyll-redirect-from` (see the `redirect_from` keys on the relevant
pages).

## Layout

```
_config.yml          — site config + nav definitions
_data/faqs.yml       — FAQ content (rendered as accordions)
_includes/           — shared HTML partials (head, nav, footer, …)
_layouts/            — page templates (home, page, post, contact, faqs, blog)
_posts/              — 16 migrated blog posts
assets/css/          — design tokens + main stylesheet
wp-content/uploads/  — image library, paths preserved from WordPress
ui_kits/             — original design kit (kept for reference, excluded from build)
```

## Migration notes

Source: `emilyo039reillyacr.WordPress.2026-04-26.xml` (kept in the repo
root for traceability; excluded from the Jekyll build via `_config.yml`).

The migration scripts live in `/tmp/wp_*.py`; see commit history for
provenance.
