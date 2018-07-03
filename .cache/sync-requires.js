// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/apelsinet/h/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/apelsinet/h/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/apelsinet/h/portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/apelsinet/h/portfolio/src/pages/index.js")),
  "component---src-pages-orange-js": preferDefault(require("/Users/apelsinet/h/portfolio/src/pages/Orange.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/apelsinet/h/portfolio/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/apelsinet/h/portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/apelsinet/h/portfolio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/apelsinet/h/portfolio/.cache/json/404.json"),
  "index.json": require("/Users/apelsinet/h/portfolio/.cache/json/index.json"),
  "orange.json": require("/Users/apelsinet/h/portfolio/.cache/json/orange.json"),
  "page-2.json": require("/Users/apelsinet/h/portfolio/.cache/json/page-2.json"),
  "404-html.json": require("/Users/apelsinet/h/portfolio/.cache/json/404-html.json")
}