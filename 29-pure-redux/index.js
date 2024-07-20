import store from './redux/store.js';
import getCurrentTime from './utils/getCurrentTime.js';

const addTimeBtn = document.querySelector('#addTime');

addTimeBtn.addEventListener('click', () => {
  store.dispatch({
    type: 'ADD_CURRENT_TIME',
    payload: getCurrentTime(),
  });
});

const clearTimeBtn = document.querySelector('#clearTimes');

clearTimeBtn.addEventListener('click', () => {
  store.dispatch({
    type: 'CLEAR_ALL_TIMES',
  });
});

const timesList = document.querySelector('#timesList')

store.subscribe(() => {
    timesList.innerHTML = ''
    const times = store.getState()
    times.forEach((time) => {
        let li = document.createElement('li')
        li.innerText = time
        timesList.appendChild(li)
    });
})