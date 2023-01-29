import moment from "moment";
import { Link } from "react-router-dom";

const RelatedVideoCard = ({ video }) => {
  const { snippet, id } = video;
  const { channelTitle, publishedAt, thumbnails, title } = snippet;

  return (
    <Link to={"/watch?v=" + id.videoId}>
      <div className=" m-2 w-full rounded-md overflow-hidden flex">
        <img
          className=" rounded-lg w-5/12"
          src={thumbnails?.medium?.url}
          alt=""
        />
        <div className=" w-7/12 pl-2 text-left ">
          <div className="w-full h-8 overflow-hidden">
            <h2 className="font-bold mb-3 text-base leading-4">{title}</h2>
          </div>

          <p className="text-sm mt-3">{channelTitle}</p>
          <p className="text-sm">
            <span>{moment(publishedAt).fromNow()}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default RelatedVideoCard;
