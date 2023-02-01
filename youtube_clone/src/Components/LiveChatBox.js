import { nameList, randomSentence } from "../Utils/config";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addChat } from "../Store/ChatSlice";

const LiveChatBox = () => {
  const chat = useSelector((store) => store.chat);
  const dispatch = useDispatch();

  function randomName() {
    const finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addChat(randomName() + " : " + randomSentence()));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {chat.map((message) => (
        <div className="bg-gray-600 text-white  p-3 m-2  pl-6 rounded-xl ">
          {message}
        </div>
      ))}
    </div>
  );
};

export default LiveChatBox;
