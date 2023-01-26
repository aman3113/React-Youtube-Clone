import React from "react";
import TagButton from "./TagButton";

const VideoTags = ({ tagsDetail }) => {
  const { snippet, id } = tagsDetail ? tagsDetail[0] : "";
  const tagsArr = snippet?.tags?.slice(0, 8) || [];
  return (
    <div className="overflow-x-scroll w-full TagList">
      <div className="w-screen flex">
        {tagsArr?.map((tag) => {
          return <TagButton tags={tag} key={id} />;
        })}
      </div>
    </div>
  );
};

export default VideoTags;
