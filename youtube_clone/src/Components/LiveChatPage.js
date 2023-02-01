import LiveChatBox from "./LiveChatBox";

const LiveChatPage = () => {
  return (
    <div className="px-20 py-10 border-2 flex gap-5 h-[88vh]">
      <iframe
        className="w-3/5 h-full"
        src="https://www.youtube.com/embed/21X5lGlDOfg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
      <div className="bg-slate-100 w-2/5 rounded-xl overflow-y-scroll scroll- p-3  flex  flex-col-reverse TagList">
        <LiveChatBox />
      </div>
    </div>
  );
};

export default LiveChatPage;
