import { render } from 'react-dom';
import React, { Component } from 'react';

class Sample extends Component {
  constructor(props) {
    super(props); // Component::constructor();
    this.state = {
      todos: [],
      todo: ''
    }
  }

  onInput(e) {
    this.setState({
      todo: e.target.value //悟大
    })

    // todo ? 悟大
  }

  add() {
    const {todos, todo} = this.state;
    this.setState({
      todos: [...todos, todo]
    })
  }

  remove(idx) {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.slice(0, idx), ...todos.slice(idx + 1)]
    });
  }

  render() {
    const { todos, todo } = this.state;
    //todos ? []
    //todo ? ''
    return (<div>
        <input onInput={this.onInput.bind(this)} />
        <button onClick={this.add.bind(this)}>追加</button>
        <ul>
          {todos.map((todo, idx) => {
            return (<li>
              {todo}
              <button onClick={this.remove.bind(this, idx)}>削除</button>
            </li>);
          })}
        </ul>
    </div>);
  }
}

render(
  <Sample />,
  document.getElementById('app'),
);
