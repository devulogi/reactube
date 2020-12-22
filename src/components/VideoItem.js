/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

export default class VideoItem extends Component {
  constructor(props) {
    super(props);
  }

  userSelectedVideo = () => {
    this.props.isCurrentVideo(this.props.video);
  };

  render() {
    const { thumbnails, title, channelTitle } = this.props.video.snippet;

    return (
      <li
        className="media mb-1"
        onClick={this.userSelectedVideo}
        style={{ cursor: "pointer" }}
      >
        <img className="mr-3" src={thumbnails.default.url} alt="image" />
        <div className="media-body">
          <h6 className="mt-0 mb-0">{title}</h6>
          <small className="text-secondary">{channelTitle}</small>
        </div>
      </li>
    );
  }
}
