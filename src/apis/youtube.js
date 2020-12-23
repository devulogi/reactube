import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: "AIzaSyBhpcrP3kFPG7e_AV9lIxHzOZ0xBPOzjCk",
    q: "brighton london",
  },
});
