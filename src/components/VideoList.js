import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const videos = props.videos.map((video) => (
    <VideoItem
      video={video}
      key={video.etag}
      isCurrentVideo={props.isCurrentVideo}
    />
  ));

  return (
    <div>
      <ul className="list-unstyled">{videos}</ul>
    </div>
  );
};

export default VideoList;
