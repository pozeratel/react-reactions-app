import { Component } from "react";
import { StatisticsList } from "./Statistics.styled";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatisticsList>
        {total === 0 ? (
          <li>No feedback given</li>
        ) : (
          <>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>
              Positive Percentage:{" "}
              {positivePercentage > 0 ? positivePercentage : 0}%
            </li>
          </>
        )}
      </StatisticsList>
    );
  }
}

export default Statistics;
