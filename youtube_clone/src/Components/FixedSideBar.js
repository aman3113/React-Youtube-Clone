import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiDownloadLine } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";
const FixedSideBar = () => {
  return (
    <div>
      <div className=" w-20 h-full flex flex-col gap-8 p-2 items-center  overflow-hidden fixed top-16">
        <div className="flex flex-col  items-center">
          <AiFillHome size={24} />{" "}
          <span
            className="text-xs py-1
    "
          >
            Home
          </span>
        </div>
        <div className="flex flex-col items-center ">
          <MdOutlineSubscriptions size={24} />
          <span
            className="text-xs py-1
    "
          >
            Subscription
          </span>
        </div>
        <div className="flex flex-col items-center ">
          <AiOutlineYoutube size={24} />
          <span
            className="text-xs py-1
    "
          >
            Originals
          </span>
        </div>
        <div className="flex flex-col items-center overflow-hidden ">
          <SiYoutubemusic size={24} />
          <span
            className="text-xs  py-1
    w-20 text-center "
          >
            Youtube Music
          </span>
        </div>
        <div className="flex flex-col items-center ">
          <RiDownloadLine size={24} />
          <span
            className="text-xs py-1
    "
          >
            Downloads
          </span>
        </div>
        <div className="flex flex-col items-center ">
          <MdOutlineVideoLibrary size={24} />
          <span
            className="text-xs py-1
    "
          >
            Library
          </span>
        </div>
      </div>
    </div>
  );
};

export default FixedSideBar;
