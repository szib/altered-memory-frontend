// CSS
import './css/styles.css';

// JAVASCRIPT
import GameService from './js/stateMachine';
import * as UI from './js/UI';


document.addEventListener('DOMContentLoaded', () => {
  console.log('%cDOM loaded. Yaaayy...' + '%c¯\\_(ツ)_/¯', 'color: #0f0', 'color: yellow');
  const gameService = GameService.start();
  UI.startWith(gameService);
});
