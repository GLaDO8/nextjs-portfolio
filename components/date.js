import { parseISO, format } from 'date-fns'

//parse cosmic post metadata into desired format
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <div>
      <time dateTime={dateString}>{format(date, 'd LLL, yyyy')}</time>
    </div>
  )
}
