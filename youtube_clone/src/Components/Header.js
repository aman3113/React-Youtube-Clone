import { RxHamburgerMenu } from "react-icons/rx";
import { GrNotification } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
import Youtube from "../Assets/YoutubeLogo.png";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../Store/AppSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className=" p-3 h-16 flex items-center justify-between  sticky top-0 z-10 bg-white">
      <div className="flex  px-2 gap-6 items-center">
        <RxHamburgerMenu
          className="cursor-pointer mx-2"
          size={30}
          onClick={() => dispatch(toggleSideBar())}
        />
        <img className="w-24 " src={Youtube} alt="" />
      </div>

      <input
        className="w-1/2 px-4 py-2 mx-6 border rounded-3xl bg-gray-150"
        type="search"
        placeholder="Search..."
      />
      <div className="flex px-4 gap-6 items-center">
        <GrNotification size={25} />
        <BiUserCircle size={35} />
      </div>
    </div>
  );
};

export default Header;
