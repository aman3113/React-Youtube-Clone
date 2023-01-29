import { API_KEY, fetchApi } from "../Utils/config";
import { useEffect, useState } from "react";
import Comment from "./Comment";

const CommentSection = ({ id }) => {
  const [commentList, setCommentList] = useState([]);
  const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${id}&key=${API_KEY}`;

  useEffect(() => {
    getCommentsData();
  }, [id]);

  async function getCommentsData() {
    const data = await fetchApi(url);
    setCommentList(data?.items);
  }

  return (
    <div className="w-full overflow-hidden">
      {commentList?.map((comment) => {
        return <Comment commentDetail={comment?.snippet} key={comment.id} />;
      })}
    </div>
  );
};

export default CommentSection;
