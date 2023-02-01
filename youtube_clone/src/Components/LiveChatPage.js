import { useState } from "react";
import LiveChatBox from "./LiveChatBox";
import { useDispatch } from "react-redux";
import { addChat } from "../Store/ChatSlice";

const LiveChatPage = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addChat("User : " + inputText));
  }

  return (
    <div className="px-20 py-10 border-2 flex gap-5 h-[88vh]">
      <iframe
        className="w-3/5 h-full"
        src="https://www.youtube.com/embed/21X5lGlDOfg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
      <div className="w-2/5 h-full bg-slate-100 rounded-xl p-3">
        <div className=" w-full h-[90%]  overflow-y-scroll flex  flex-col-reverse TagList">
          <LiveChatBox />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border bg-purple-200 w-[90%] h-[10%] mx-5 my-2 p-2 rounded-xl"
            placeholder="Write here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default LiveChatPage;
