import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
  state = { width: "100vh", height: "100vh" };
  
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
      <Particles
        width="100vh"
        height="100vh"

        params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }}
      />
    );
  }
}

export default Canvas;
