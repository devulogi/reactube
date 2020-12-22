/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";

export default class VideoDetail extends Component {
  render() {
    const { id, snippet } = this.props.currentVideo;
    if (!id) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h5 className="mt-0 mb-1">{snippet.title}</h5>
          <p>{snippet.description}</p>
        </div>
      );
    }
  }
}
