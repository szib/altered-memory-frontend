// CSS
import './css/styles.css';

// JAVASCRIPT
import gameService from './js/stateMachine';
import * as UI from './js/UI';

const init = () => {
  gameService.start();
  UI.start();
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('%cDOM loaded. Yaaayy...' + '%c¯\\_(ツ)_/¯', 'color: #0f0', 'color: yellow');
  init();
});
