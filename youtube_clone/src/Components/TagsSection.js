import { useState, useEffect } from "react";
import { tag_Url } from "../Utils/config";
import TagButton from "./TagButton";

const TagsSection = () => {
  const [tagList, setTagList] = useState({});

  useEffect(() => {
    fetch(tag_Url)
      .then((res) => res.json())
      .then((data) => setTagList(data));
  }, []);

  return (
    <div className="bg-white z-10 w-full px-4 fixed top-16 h-20  overflow-x-auto overflow-y-hidden TagList">
      <div className="Wrapper flex">
        {tagList?.items?.map((tag) => (
          <TagButton tags={tag.snippet} key={tag.id} />
        ))}
      </div>
    </div>
  );
};

export default TagsSection;
