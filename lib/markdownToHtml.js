export default async function markdownToHtml(markdown) {
  var md = require('markdown-it')({
    linkify: true,
  }).use(require('markdown-it-footnote'))
  md.renderer.rules.footnote_block_open = () => {
    '<h4 class="mt-3">Footnotes</h4>\n' +
      '<section class="footnotes">\n' +
      '<ol class="footnotes-list">\n'
  }
  var result = md.render(markdown)
  return result.toString()
}
