import Behance from './../public/social/behance.svg'
import Dribbble from './../public/social/dribbble.svg'
import Github from './../public/social/github.svg'
import Instagram from './../public/social/instagram.svg'
import Twitter from './../public/social/twitter.svg'

export default function Index() {
  return (
    <div className="flex justify-center mb-32 mx-10">
      <a href="https://dribbble.com/shreyas_gupta">
        <Dribbble className="social-icons" />
      </a>
      <a href="https://github.com/GLaDO8">
        <Github className="social-icons" />
      </a>
      <a href="https://www.behance.net/ShreyasGupta">
        <Behance className="social-icons" />
      </a>
      <a href="https://www.instagram.com/shreyas.jpg/">
        <Instagram className="social-icons" />
      </a>
      <a href="https://twitter.com/shreyasjpg">
        <Twitter className="social-icons" />
      </a>
    </div>
  )
}
