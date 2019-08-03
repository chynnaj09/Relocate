import React, { Component } from "react";
import "./Jumbotron.css";

// Class for the entire background
class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL:
        "https://player.vimeo.com/external/336505987.hd.mp4?s=9157fafbe27ffebaa2cdbb2536cba5729c506f12&profile_id=174"
    };
  }

  // Background Video on Loop
  render() {
    return (
      <video id="background-video" loop autoPlay muted>
        <source src={this.state.videoURL} type="video/mp4" />
        <source src={this.state.videoURL} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    );
  }
}
export default Jumbotron;
