import { Component } from "react"

// countTotalFeedback = () => {
//   total = this.setState.good;
// };
export class FormFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGoodBtn = (e) => {
    
    this.setState((prevState) => {
      return { good: prevState.good + 1 }
    }
    )
  };
    handleClickNeutralBtn = () =>
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    handleClickBadBtn = () =>
      this.setState(prevState => ({ bad: prevState.bad + 1 }));

  

  render() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    let PositiveFeedbackPercentage = Math.round( Number (good / total * 100))
      
      return (
        <section>
          <div>
            <h1>Please leave feedback</h1>
            <button
              onClick={this.handleClickGoodBtn}
              style={{ height: '40px', width: '100px' }}
            >
              Good
            </button>
            <button
              onClick={this.handleClickNeutralBtn}
              style={{ height: '40px', width: '100px' }}
            >
              Neutral
            </button>
            <button
              onClick={this.handleClickBadBtn}
              style={{ height: '40px', width: '100px' }}
            >
              Bad
            </button>

            <h2>Statistic</h2>
            <p>
              Good: <span>{good}</span>
            </p>
            <p>
              Neutral: <span>{neutral}</span>
            </p>
            <p>
              Bad: <span>{bad}</span>
            </p>
            <p>
              Total: <span> {total} </span>
            </p>
            <p>
              Positive Feedback:{' '}
              <span>{(PositiveFeedbackPercentage)}%</span>
            </p>
          </div>
        </section>
      );
    }
  }
