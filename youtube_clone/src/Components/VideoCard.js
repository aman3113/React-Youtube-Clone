import moment from "moment";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { channelListUrl } from "../Utils/config";

const VideoCard = ({ video }) => {
  const { snippet, statistics, id } = video;
  const [channelImg, setChannelImg] = useState("");
  const { channelId, channelTitle, publishedAt, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  return (
    <Link to={"/watch?v=" + id}>
      <div className=" p-2 w-72 rounded-md overflow-hidden">
        <img className=" rounded-lg" src={thumbnails?.medium?.url} alt="" />
        <div className="flex w-full py-2">
          <div className="w-1/5">
            <img src={channelImg} alt="" className="w-10 h-10 rounded-full" />
          </div>

          <div className=" w-4/5 ">
            <div className="w-full h-8 overflow-hidden">
              <h2 className="font-bold mb-3 text-sm leading-4">{title}</h2>
            </div>

            <p className="text-xs mt-2">{channelTitle}</p>
            <p className="text-xs">
              {Math.round(viewCount / 10000) < 1000
                ? Math.round(viewCount / 10000) + "k"
                : Math.round(viewCount / 1000000) + "M"}{" "}
              views . <span>{moment(publishedAt).fromNow()}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
