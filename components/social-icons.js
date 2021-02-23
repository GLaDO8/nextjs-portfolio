import { useTheme } from 'next-themes'
export default function Index() {
  const { theme } = useTheme()
  const twitterSvgTagLink = `https://s2.svgbox.net/social.svg?ic=twitter&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  const dribbbleSvgTagLink = `https://s2.svgbox.net/social.svg?ic=dribbble&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  const githubSvgTagLink = `https://s2.svgbox.net/social.svg?ic=github&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  const instagramSvgTagLink = `https://s2.svgbox.net/social.svg?ic=instagram&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  const behanceSvgTagLink = `https://s2.svgbox.net/social.svg?ic=behance&color=${
    theme === 'light' ? '000' : 'fff'
  }`
  return (
    <div className="flex max-w-3xl my-8">
      <a href="https://dribbble.com/shreyas_gupta">
        <img
          className="social-icons"
          src={dribbbleSvgTagLink}
          alt="link to Dribbble profile"
        />
      </a>
      <a href="https://github.com/GLaDO8">
        <img
          className="social-icons"
          src={githubSvgTagLink}
          alt="link to Github profile"
        />
      </a>
      <a href="https://www.instagram.com/shreyas.jpg/">
        <img
          className="social-icons"
          src={instagramSvgTagLink}
          alt="link to Instagram profile"
        />
      </a>
      <a href="https://twitter.com/shreyasjpg">
        <img
          className="social-icons"
          src={twitterSvgTagLink}
          alt="link to Twitter profile"
        />
      </a>
      <a href="https://www.behance.net/ShreyasGupta">
        <img
          className="social-icons"
          src={behanceSvgTagLink}
          alt="link to Behance profile"
        />
      </a>
    </div>
  )
}
