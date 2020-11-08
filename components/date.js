import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <div>
      <time dateTime={dateString}>{format(date, "d LLL, yyyy")}</time>
      <span> at </span>
      <time dateTime={dateString}>{format(date, "H:m")}</time>
    </div>
  );
}
