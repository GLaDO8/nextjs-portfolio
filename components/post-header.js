import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import ReadTime from "./read-time";
import Project from "./../public/project.svg";

export default function PostHeader({ title, coverImage, date, content }) {
  return (
    <>
      <div className="container m-auto">
        <div>
          <img className="inline-block" src={Project} />
          <span className="inline-block mb-0 text-2xl text-gray-600">
            UX Case Study
          </span>
        </div>
        <PostTitle>{title}</PostTitle>
        <div className="mb-6 text-2xl text-gray-600">
          <Date dateString={date} />
        </div>
        <ReadTime>{content}</ReadTime>
      </div>
      <div className="w-auto mb-16">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
    </>
  );
}
