const readingTime = require('reading-time')

export default function readTime({ content }) {
  const stats = readingTime(content)
  return stats.text
}
