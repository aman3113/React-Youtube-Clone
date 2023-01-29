import { useEffect, useState } from "react";
import { API_KEY, fetchApi } from "../Utils/config";
import RelatedVideoCard from "./RelatedVideoCard";

const RelatedVideos = ({ videoDetail }) => {
  const [videoList, setVideoList] = useState({});
  const { id } = videoDetail[0];
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&relatedToVideoId=${id}&type=video&key=${API_KEY}`;

  useEffect(() => {
    getRelatedVideos();
  }, [id]);

  async function getRelatedVideos() {
    const data = await fetchApi(url);
    setVideoList(data);
  }
  return (
    <div className="flex flex-col w-full">
      {videoList?.items?.map((video) => (
        <RelatedVideoCard video={video} key={video.id.videoId} />
      ))}
    </div>
  );
};

export default RelatedVideos;
