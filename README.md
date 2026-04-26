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

`main` is deployed automatically by `.github/workflows/jekyll.yml`. The
`CNAME` file pins the custom domain to `emilyoreilly.co.uk`.

After enabling GitHub Pages on this repo, point DNS at GitHub:

```
A    emilyoreilly.co.uk     185.199.108.153
A    emilyoreilly.co.uk     185.199.109.153
A    emilyoreilly.co.uk     185.199.110.153
A    emilyoreilly.co.uk     185.199.111.153
AAAA emilyoreilly.co.uk     2606:50c0:8000::153
AAAA emilyoreilly.co.uk     2606:50c0:8001::153
AAAA emilyoreilly.co.uk     2606:50c0:8002::153
AAAA emilyoreilly.co.uk     2606:50c0:8003::153
CNAME www.emilyoreilly.co.uk emilyoreilly.co.uk.   ; or the user/org page
```

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
