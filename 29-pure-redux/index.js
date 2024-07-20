import store from './redux/store.js';
import { addCurrentTime, clearTimes } from './redux/actionCreators.js';

const addTimeBtn = document.querySelector('#addTime');

addTimeBtn.addEventListener('click', () => store.dispatch(addCurrentTime()));

const clearTimeBtn = document.querySelector('#clearTimes');

clearTimeBtn.addEventListener('click', () => store.dispatch(clearTimes()));

const timesList = document.querySelector('#timesList');

store.subscribe(() => {
  timesList.innerHTML = '';
  const times = store.getState();
  times.forEach((time) => {
    let li = document.createElement('li');
    li.innerText = time;
    timesList.appendChild(li);
  });
});
