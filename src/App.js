/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import YouTube from "./apis/youtube";

export default class App extends Component {
  state = {
    items: [],
    currentVideo: {},
  };

  componentDidMount() {
    YouTube.get("/search", {
      params: {
        q: "brighton london",
      },
    }).then((response) => {
      const { data } = response;
      const items = data.items.map((item) => item);
      this.setState({ items, currentVideo: items[0] });
    });
  }

  onUserSubmit = (term) => {
    YouTube.get("/search", {
      params: {
        q: term,
      },
    }).then((response) => {
      const { data } = response;
      const items = data.items.map((item) => item);
      this.setState({ items });
    });
  };

  isCurrentVideo = (currentVideo) => {
    this.setState({ currentVideo });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onUserSubmit={this.onUserSubmit} />
        <div className="row">
          <div className="col-8">
            <VideoDetail currentVideo={this.state.currentVideo} />
          </div>
          <div className="col-4">
            <VideoList
              videos={this.state.items}
              isCurrentVideo={this.isCurrentVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}
