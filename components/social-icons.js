import React from 'react'
export default function Index() {
  var linkList = [
    'https://www.linkedin.com/in/shreyas-gupta/',
    'https://dribbble.com/shreyasgupta',
    'https://github.com/GLaDO8',
    'https://www.instagram.com/wutamelonshrey/',
    'https://twitter.com/wutamelonshrey',
  ]
  var iconList = ['linkedin', 'dribbble', 'github', 'instagram', 'twitter']

  function iconLinkGenerator(name, link) {
    return (
      <a href={link} target="_blank" rel="noreferrer noopener">
        <img
          src={`https://s2.svgbox.net/social.svg?ic=${name}&color=fff`}
          className="social-icons"
          alt={name}
          key={name}
        />
      </a>
    )
  }
  return (
    <div className="flex my-8">
      {linkList.map((link, index) => iconLinkGenerator(iconList[index], link))}
      <a
        href={'https://letterboxd.com/GLaDO8/'}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src={`/letterboxd.svg`}
          className="social-icons"
          alt={'letterboxd'}
          key={'letterboxd'}
        />
      </a>
    </div>
  )
}
