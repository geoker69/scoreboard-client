/* eslint-disable no-undef */
const socket = io('http://192.168.0.199:3000');

socket.on('timerUpdated', (timer) => {
  console.log(`The timer has been updated to ${timer}`);
  document.getElementById('clock').innerHTML = timer;
});

socket.on('scoreUpdated', (score) => {
  console.log('The score was updated', score);
  document.getElementById('homeName').innerHTML = score.home.teamName;
  document.getElementById('homeGoals').innerHTML = score.home.goals;
  document.getElementById('homeBehinds').innerHTML = score.home.behinds;
  document.getElementById('homeTotal').innerHTML = score.home.total;
  document.getElementById('awayName').innerHTML = score.away.teamName;
  document.getElementById('awayGoals').innerHTML = score.away.goals;
  document.getElementById('awayBehinds').innerHTML = score.away.behinds;
  document.getElementById('awayTotal').innerHTML = score.away.total;
});

document.querySelector('#homeGoalPlusOne').addEventListener('click', () => {
  socket.emit('homeGoalAdd');
});
document.querySelector('#homeGoalTakeOne').addEventListener('click', () => {
  socket.emit('homeGoalSubtract');
});
document.querySelector('#homeBehindPlusOne').addEventListener('click', () => {
  socket.emit('homeBehindAdd');
});
document.querySelector('#homeBehindTakeOne').addEventListener('click', () => {
  socket.emit('homeBehindSubtract');
});
document.querySelector('#awayGoalPlusOne').addEventListener('click', () => {
  socket.emit('awayGoalAdd');
});
document.querySelector('#awayGoalTakeOne').addEventListener('click', () => {
  socket.emit('awayGoalSubtract');
});
document.querySelector('#awayBehindPlusOne').addEventListener('click', () => {
  socket.emit('awayBehindAdd');
});
document.querySelector('#awayBehindTakeOne').addEventListener('click', () => {
  socket.emit('awayBehindSubtract');
});
document.querySelector('#startTimer').addEventListener('click', () => {
  socket.emit('startTimer');
});
document.querySelector('#pauseTimer').addEventListener('click', () => {
  socket.emit('pauseTimer');
});
document.querySelector('#resetTimer').addEventListener('click', () => {
  if (confirm('Are you sure you want to reset the timer?')) {
    socket.emit('resetTimer');
  }
});
document.querySelector('#resetScore').addEventListener('click', () => {
  if (confirm('Are you sure you want to reset the score?')) {
    socket.emit('resetScore');
  }
});