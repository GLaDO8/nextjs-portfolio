export default async function markdownToHtml(markdown) {
  var md = require('markdown-it')({ html: true })
    .use(require('markdown-it-footnote'))
    // .use(require('markdown-it-anchor'), {
    //   level: [1, 2],
    //   permalink: true,
    //   permalinkBefore: true,
    //   permalinkSymbol: '🔗',
    // })
    .use(require('markdown-it-toc-done-right'))
  md.renderer.rules.footnote_block_open = () =>
    '<h4 class="mt-3">Footnotes</h4>\n' +
    '<section class="footnotes">\n' +
    '<ol class="footnotes-list">\n'
  var result = md.render(markdown)
  return result.toString()
}
