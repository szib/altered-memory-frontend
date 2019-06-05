import React from 'react';
import { interpret } from 'xstate';
import GameMachine from './stateMachine'

class App extends React.Component {
  state = {
    current: GameMachine.initialState
  }

  service = interpret(GameMachine).onTransition(current => this.setState({current}))

  componentDidMount() {
    this.service.start();
  }

  componentWillUnmount() {
    this.service.stop();
  }

  render() {
    const { current } = this.state;
    const { send } = this.service;

    console.log('current', current)

    return (
      <div>
        <button onClick={() => send('NEW_GAME')}>Start</button>
      </div>
    );
  }
}



export default App;
