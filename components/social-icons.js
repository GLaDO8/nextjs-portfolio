import React from 'react'
export default function Index() {
  var linkList = [
    'https://www.linkedin.com/in/shreyas-gupta/',
    'https://dribbble.com/shreyasgupta',
    'https://github.com/GLaDO8',
    'https://www.instagram.com/wutamelonshrey/',
    'https://twitter.com/wutamelonshrey',
    'https://www.behance.net/ShreyasGupta',
  ]
  var iconList = [
    'linkedin',
    'dribbble',
    'github',
    'instagram',
    'twitter',
    'behance',
  ]

  function iconLinkGenerator(name, link) {
    return (
      <a href={link} target="_blank" rel="noreferrer noopener">
        <img
          src={`https://s2.svgbox.net/social.svg?ic=${name}&color=fff`}
          className="social-icons"
        />
      </a>
    )
  }
  return (
    <div className="flex my-8">
      {linkList.map((link, index) => iconLinkGenerator(iconList[index], link))}
    </div>
  )
}
