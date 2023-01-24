import { useEffect, useState } from "react";
import { FETCH_VIDEO_URL } from "../Utils/config";
import VideoCard from "./VideoCard";

const DisplaySection = () => {
  const [videoList, setVideoList] = useState({});

  useEffect(() => {
    fetch(FETCH_VIDEO_URL)
      .then((res) => res.json())
      .then((data) => setVideoList(data));
  }, []);

  return (
    <div className="p-3 flex flex-wrap overflow-y-scroll ">
      {videoList?.items?.map((video) => {
        return (
          <VideoCard
            snippet={video.snippet}
            statistics={video.statistics}
            key={video.id}
          />
        );
      })}
    </div>
  );
};

export default DisplaySection;
