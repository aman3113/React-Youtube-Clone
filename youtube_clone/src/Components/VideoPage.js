import { useSearchParams } from "react-router-dom";
import { API_KEY, fetchApi } from "../Utils/config";
import { useEffect, useState } from "react";
import VideoAbout from "./VideoAbout";
import CommentSection from "./CommentsSection";
import VideoTags from "./VideoTags";
import RelatedVideos from "./RelatedVideos";

const VideoPage = () => {
  let [searchParams] = useSearchParams();
  const [videoDetail, setVideoDetail] = useState({});
  const videoId = searchParams.get("v");

  const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=${videoId}`;

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  async function fetchVideoData() {
    const response = await fetchApi(videoUrl);
    setVideoDetail(response);
  }

  return (
    <div className=" px-16 py-8 flex ">
      <div className="w-3/5">
        <iframe
          className="w-full h-96 "
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {videoDetail.items && <VideoAbout videoDetail={videoDetail.items} />}
        <CommentSection id={videoId} />
      </div>
      <div className="w-2/5 pl-4">
        {videoDetail.items && <VideoTags tagsDetail={videoDetail?.items} />}
        {videoDetail.items && (
          <RelatedVideos videoDetail={videoDetail?.items} />
        )}
      </div>
    </div>
  );
};

export default VideoPage;
