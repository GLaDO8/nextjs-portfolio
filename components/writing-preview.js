import Link from "next/link";
export default function writingPreview({
	title,
	date,
	excerpt,
	slug,
  }) {
	return (
	  <Link as={`/writings/${slug}`} href="/writings/[slug]">
		<div className="flex cursor-pointer mx-auto max-w-2xl">
			<div className="flex-initial text-base font-normal mb-4 text-gray-700">
			  <Date dateString={date} />
			</div>
		  <div className="flex-initial p-5 mx-auto max-w-lg" >
			<h3 className="text-xl mb-1 font-semibold leading-snug text-gray-800">
			  {title}
			</h3>
			<p className="text-base text-gray-700 leading-relaxed mb-2">
			  {excerpt}
			</p>
		  </div>
		</div>
	  </Link>
	);
  }