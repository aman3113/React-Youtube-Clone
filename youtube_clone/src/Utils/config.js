export const API_KEY = "AIzaSyC8TRj2A6tQP-g9ttGdYhLNFtpSJJPu3L8";
export const videoListUrl =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const channelListUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;

export const tag_Url =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  API_KEY;

export const fetchApi = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};
