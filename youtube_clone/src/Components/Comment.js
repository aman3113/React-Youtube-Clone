import moment from "moment";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const Comment = ({ commentDetail }) => {
  const { id, snippet } = commentDetail.topLevelComment;
  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textDisplay,
  } = snippet;
  return (
    <div className="flex my-2 w-full bg-gray-50  rounded-2xl">
      <img
        className="w-10 h-10 rounded-full m-1"
        src={authorProfileImageUrl}
        alt=""
      />
      <div className=" p-2 w-auto">
        <div className="text-sm">
          <span className="font-bold">{authorDisplayName} .</span>{" "}
          {moment(publishedAt).fromNow()}
        </div>
        <p className="text-sm py-2 ">{textDisplay}</p>
        <div className="flex gap-3">
          <BiLike size={20} />
          {likeCount > 0 ? likeCount : ""} <BiDislike size={20} />
        </div>
        {commentDetail.totalReplyCount > 1 ? (
          <h2 className="text-blue-400">
            {commentDetail.totalReplyCount} Replies
          </h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Comment;
