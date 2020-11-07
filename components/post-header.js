import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import ReadTime from "./read-time";

export default function PostHeader({ title, coverImage, date, content }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-2xl">
        <Date dateString={date} />
      </div>
      <ReadTime>{content}</ReadTime>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
      <div className="max-w-2xl mx-auto"></div>
    </>
  );
}
