import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="bg-white z-10 w-[90vw] mx-4 fixed top-16 h-20  overflow-x-auto overflow-y-hidden TagList">
      <div className="Wrapper flex">
        <Link to={"/live"}>
          <div className=" bg-gray-300 border-none rounded-2xl w-[70px]  m-4 p-3 cursor-pointer">
            <p className=" align-middle text-center">Live</p>
          </div>
        </Link>

        {tagList?.items?.map((tag) => (
          <TagButton tags={tag.snippet} key={tag.id} />
        ))}
      </div>
    </div>
  );
};

export default TagsSection;
