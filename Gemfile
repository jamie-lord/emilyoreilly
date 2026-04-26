source "https://rubygems.org"

# Pin to the github-pages gem so the local build matches what GitHub
# Pages itself runs. See https://pages.github.com/versions/.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-redirect-from"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
end

# Windows / JRuby tzinfo support — harmless on macOS.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick"
