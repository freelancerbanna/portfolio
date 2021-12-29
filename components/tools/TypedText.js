import React, { Component } from "react";
import { render } from "react-dom";
import Typed from "react-typed";

class TypedText extends Component {
  render() {
    return (
      <div>
        <Typed
          typedRef={(typed) => {
            this.typed = typed;
          }}
          strings={[
            "A Fullstack Developer ",
            "Based On...",
            "React.js, Next.js ",
            "Node.js, Express.js ",
            "Python, Django ",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    );
  }
}

export { TypedText };
