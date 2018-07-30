import { render } from 'react-dom';
import React, { Component } from 'react';

class Sample extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increment() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }

  decrement() {
    const { count } = this.state;
    this.setState({
      count: count - 1
    });
  }

  render() {
    const { count } = this.state;
    return (<div>
      <p>カウント数: {count}</p>
      <div>
        <button onClick={this.increment.bind(this)}>増加</button>
        <button onClick={this.decrement.bind(this)}>減少</button>
      </div>
    </div>);
  }
}

render(
  <Sample />,
  document.getElementById('app'),
);
