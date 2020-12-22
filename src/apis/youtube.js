import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: "AIzaSyBJwS1LahC2aVCiI9PLcx3JfX1BdJZ_bZU",
    q: "brighton london",
  },
});
