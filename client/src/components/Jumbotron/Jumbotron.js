import React, { Component } from "react";
import "./Jumbotron.css";
class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL:
        "https://player.vimeo.com/external/301906284.sd.mp4?s=4706f989eb2074f2b0ef71be696fb49877f1c538&profile_id=164&oauth2_token_id=57447761"
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
