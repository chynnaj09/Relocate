import React, { Component } from "react";
import "./Jumbotron.css";
class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL:
        "https://player.vimeo.com/external/304735769.hd.mp4?s=a60812db50c3b8aae17f3f1a6843f79698b2bb08&profile_id=174"
    };
  }
  render() {
    return (
      <video id="background-video" loop autoPlay>
        <source src={this.state.videoURL} type="video/mp4" />
        <source src={this.state.videoURL} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    );
  }
}
export default Jumbotron;
