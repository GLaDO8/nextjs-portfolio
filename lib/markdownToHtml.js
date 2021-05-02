export default async function markdownToHtml(markdown) {
  var md = require('markdown-it')({ html: true })
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-anchor'))
  // .use(require('markdown-it-table-of-contents'))

  // Remember old renderer, if overridden, or proxy to default renderer
  var defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }

  //rules for adding 'noopener' and '_blank' attributes to all markdown <a/> tags
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    var aIndex = tokens[idx].attrIndex('target')
    var relIndex = tokens[idx].attrIndex('rel')

    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']) // add new attribute
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank' // replace value of existing attr
    }

    if (relIndex < 0) {
      tokens[idx].attrPush(['rel', 'noopener'])
    } else {
      tokens[idx].attrs[relIndex][1] = 'noopener' // replace value of existing attr
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self)
  }

  //footnote styling
  md.renderer.rules.footnote_block_open = () =>
    '<h4 class="mt-3">Footnotes</h4>\n' +
    '<section class="footnotes">\n' +
    '<ol class="footnotes-list">\n'
  var result = md.render(markdown)
  return result.toString()
}
