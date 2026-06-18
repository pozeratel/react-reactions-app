import { Component } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FeedBackOptions from "./components/FeedBackOptoins/FeedBackOptoins.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positive = () => {
    const total = this.total();
    const positive = Math.round((this.state.good / total) * 100);
    return positive;
  };

  handleCount = (type) => {
    return this.setState((prev) => ({
      [type]: prev[type] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section>
          <h1>Please leave feedback</h1>
          <FeedBackOptions
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            count={this.handleCount}
          />
          <h2>Statistics</h2>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.total()}
            positivePercentage={this.positive()}
            count={this.handleCount}
          />
        </Section>
      </>
    );
  }
}

export default App;
