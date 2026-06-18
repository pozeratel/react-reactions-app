import { Component } from "react";

class Section extends Component {
  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

export default Section;
