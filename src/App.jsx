import React from 'react';

import { interpret } from 'xstate';

import styled from 'styled-components';
import tw from 'tailwind.macro';
import GameMachine from './stateMachine';

import Board from './components/Board/Board';
import InfoPanel from './components/Sidebar/InfoPanel';
import ControlPanel from './components/Sidebar/ControlPanel';

class App extends React.Component {
  state = {
    current: GameMachine.initialState
  }

  service = interpret(GameMachine)
    .onTransition((current) => {
      console.log('onTransition: state => ', current.value);
      this.setState({ current });
    })

  componentDidMount() {
    this.service.start();
  }

  componentWillUnmount() {
    this.service.stop();
  }

  render() {
    const { current } = this.state;
    const { context } = current;
    const { className } = this.props;
    const { send } = this.service;

    // console.log('current', current);

    return (
      <div id="app" className={className}>
        <Board context={context} send={send} />
        <InfoPanel context={context} />
        <ControlPanel context={context} send={send} />
      </div>
    );
  }
}

const StyledApp = styled(App)`
  ${tw`w-screen h-screen`}
  display: grid;

  grid-template-columns: auto 200px;
  grid-template-rows: 2fr 1fr;

  grid-template-areas: 
    "board info"
    "board navbar";
`;

export default StyledApp;
