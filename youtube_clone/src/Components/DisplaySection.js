import { useEffect } from "react";
import { videoListUrl } from "../Utils/config";
import { cacheVideoList } from "../Store/AppSlice";
import { useSelector, useDispatch } from "react-redux";
import VideoCard from "./VideoCard";

const DisplaySection = () => {
  const videoList = useSelector((store) => store.app.videoList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(videoListUrl)
      .then((res) => res.json())
      .then((data) => dispatch(cacheVideoList(data)));
  }, []);

  return (
    <div className="p-3 flex flex-wrap overflow-y-scroll ">
      {videoList?.items?.map((video) => {
        return <VideoCard video={video} key={video.id} />;
      })}
    </div>
  );
};

export default DisplaySection;
