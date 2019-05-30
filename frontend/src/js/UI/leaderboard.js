const getLeaderboard = () => fetch('http://localhost:3000/leaderboards')
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    return new Promise(resp.json());
  });

const createRow = (user) => {
  const div = document.createElement('div');
  div.classList.add('leaderboard-item');
  div.innerHTML = `
    <div>${user.name}</div>
    <div>${user.score}</div>
  `;
  return div;
};


const renderLeaderboard = () => {
  const board = document.querySelector('#board');
  board.classList = ['leaderboard'];
  board.innerHTML = '';
  board.innerHTML = '<div class="text-orange-500 text-5xl">Leaderboard</div>';
  getLeaderboard()
    .then((data) => {
      console.log('data :', data);
      data.forEach((user) => {
        board.appendChild(createRow(user));
      });
    });
};

export default renderLeaderboard;
