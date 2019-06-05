// CSS
// import './css/styles.css';

// JAVASCRIPT
// import GameService from './js/stateMachine';
// import * as UI from './js/UI';


// document.addEventListener('DOMContentLoaded', () => {
//   console.log('%cDOM loaded. Yaaayy...' + '%c¯\\_(ツ)_/¯', 'color: #0f0', 'color: yellow');
//   const gameService = GameService.start();
//   UI.startWith(gameService);
// });

import React from 'react'
import ReactDOM from 'react-dom'


import styled from 'styled-components'
import tw from 'tailwind.macro'
 
const Button = styled('button')`
  ${tw`font-mono text-sm text-red-400 hover:text-blue-700`};
`

const screen = document.querySelector('#screen');

ReactDOM.render(<Button>REACT</Button>, screen)