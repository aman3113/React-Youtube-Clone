import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { useDispatch } from "react-redux";
import Youtube from "../Assets/YoutubeLogo.png";
import { toggleSideBar } from "../Store/AppSlice";

const FixedSideBar = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="fixed top-0 h-screen w-screen bg-blue-100/70 z-20"
      onClick={() => dispatch(toggleSideBar())}
    >
      <div
        className="flex flex-col gap-4 border-2 w-56 px-3 py-2 h-screen fixed top-0 left-0 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex   gap-6 items-center">
          <RxHamburgerMenu
            className="cursor-pointer"
            size={30}
            onClick={() => dispatch(toggleSideBar())}
          />
          <img className="w-24 " src={Youtube} alt="" />
        </div>
        <ul className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <AiFillHome size={22} /> <span>Home</span>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineSubscriptions size={22} /> <span>Subscription</span>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineYoutube size={22} /> <span>Originals</span>
          </div>
          <div className="flex gap-2 items-center">
            <SiYoutubemusic size={22} /> <span>Youtube Music</span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FixedSideBar;
