import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { useEffect, useState } from "react";
import { fetchApi, channelListUrl } from "../Utils/config";

const VideoAbout = ({ videoDetail }) => {
  const [channelData, setChannelData] = useState("");
  const { snippet, statistics } = videoDetail[0];
  const { title, channelTitle, channelId } = snippet;

  const url = channelListUrl + channelId;

  useEffect(() => {
    getChannelImage();
  }, [channelId]);

  async function getChannelImage() {
    const channelData = await fetchApi(url);
    setChannelData(() => channelData?.items[0]);
  }

  return (
    <div className=" py-2 w-full">
      <h2 className="font-bold  text-xl">{title}</h2>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={channelData?.snippet?.thumbnails?.default?.url}
            alt=""
          />
          <div className="flex flex-col p-2">
            <h3 className="font-bold">{channelTitle}</h3>
            <p>
              {Math.round(channelData?.statistics?.subscriberCount / 10000)}k
            </p>
          </div>
          <button className="bg-gray-900 text-white rounded-2xl px-3 py-1">
            Subscribe
          </button>
        </div>
        <div className="flex gap-6 items-center ">
          <div className=" bg-slate-100 rounded-xl px-3 py-2 flex items-center gap-2">
            <BiLike size={20} />
            {statistics?.likeCount / 1000}k | <BiDislike size={20} />
          </div>
          <div className=" bg-slate-100 rounded-xl px-3 py-2 flex items-center gap-2">
            <IoIosShareAlt size={20} /> Share
          </div>
          <div className=" bg-slate-100 rounded-full px-3 py-1">More</div>
        </div>
      </div>
    </div>
  );
};

export default VideoAbout;
