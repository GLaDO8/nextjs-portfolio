import { parseISO, format } from 'date-fns'

//parse cosmic post metadata into desired format
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  const formatedDate = format(date, 'd LLL, yyyy')
  return (
    <div>
      <time dateTime={dateString}>{`${formatedDate}`}</time>
    </div>
  )
}
