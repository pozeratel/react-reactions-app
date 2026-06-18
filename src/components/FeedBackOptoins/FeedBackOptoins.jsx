import { Component } from "react";
import { OptionsList, OptionButton } from "./FeedBackOptoins.styled";

class FeedBackOptions extends Component {
  render() {
    const { count } = this.props;
    return (
      <OptionsList>
        <li>
          <OptionButton type="button" onClick={() => count("good")}>
            Good
          </OptionButton>
        </li>
        <li>
          <OptionButton type="button" onClick={() => count("neutral")}>
            Neutral
          </OptionButton>
        </li>
        <li>
          <OptionButton type="button" onClick={() => count("bad")}>
            Bad
          </OptionButton>
        </li>
      </OptionsList>
    );
  }
}

export default FeedBackOptions;
