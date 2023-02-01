import React from "react";
import TagButton from "./TagButton";

const VideoTags = ({ tagsDetail }) => {
  const { snippet } = tagsDetail[0];
  const tagsArr = snippet?.tags?.slice(0, 8) || [];
  return (
    <div className="overflow-x-scroll w-full TagList">
      <div className="w-[150vw] flex">
        <div className=" bg-gray-200 border-none rounded-2xl  m-4 p-3 min-w-[70px] cursor-pointer">
          <p className=" align-middle text-center">All</p>
        </div>
        {tagsArr?.map((tag) => {
          return <TagButton tags={tag} key={tag} />;
        })}
      </div>
    </div>
  );
};

export default VideoTags;
