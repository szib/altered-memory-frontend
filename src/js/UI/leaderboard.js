import api from '../api';

const URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/results'
  : 'https://memory-flatiron.herokuapp.com/results';

const getLeaderboard = () => api(`${URL}/top/10`);

export const postResult = (result) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(result),
  };

  console.warn(options);
  api(URL, options)
    .then(console.log)
    .catch(console.error);
};

const createRow = (user) => {
  const div = document.createElement('div');
  div.classList.add('leaderboard-item');
  div.innerHTML = `
    <div>${user.name}</div>
    <div>${user.score}</div>
  `;
  return div;
};

export const renderLeaderboard = () => {
  const board = document.querySelector('#board');
  board.classList = ['leaderboard'];
  board.innerHTML = '';
  board.innerHTML = '<div class="text-orange-500 text-5xl">Leaderboard</div>';
  getLeaderboard()
    .then((data) => {
      data.forEach((user) => {
        board.appendChild(createRow(user));
      });
    })
    .catch((err) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="w-full text-center text-4xl text-gray-100">No data from API. 😭</div>
        <small class="text-gray-700">${err}</small>
      `;
      board.appendChild(div);
    });
};
