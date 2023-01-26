import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";

const VideoAbout = ({ videoDetail }) => {
  const { snippet, statistics } = videoDetail ? videoDetail[0] : "";
  return (
    <div className=" py-2">
      <h2 className="font-bold  text-xl">{snippet?.title}</h2>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <div className="flex flex-col p-2">
            <h3 className="font-bold">{snippet?.channelTitle}</h3>
            <p>subscribers</p>
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
