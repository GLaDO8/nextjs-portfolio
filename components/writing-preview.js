import Link from "next/link";
export default function writingPreview({
	title,
	udate,
	excerpt,
	slug,
  }) {
	return (
	  <Link as={`/writings/${slug}`} href="/writings/[slug]">
		<div className="flex cursor-pointer mx-auto p-3 max-w-2xl">
			<div className="flex-1 text-base justify-right font-normal text-gray-700">
			  <p className="text-right">{udate}</p>
			</div>
		  <div className="flex-initial mx-auto max-w-lg" >
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