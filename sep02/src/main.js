import './style.css'


// basic error handling
try {
  throw new Error('hello world!');
} catch (e) {
  console.error(e);
} finally {
  console.log('in the finally block!');
}

console.log('after the error');

// error when the element is not found
const app = document.getElementById('appp');

// option 1
/*
if(!app) {
  throw new Error('cannot find element with id "appp"');
}
*/

//option 2
try {
  app.addEventListener('click', () => console.log('hello from the event listener!'));
} catch (e) {
  console.error('something went wrong, probably couldnt find element with id app');
  console.error(e);
}

//setTimeout
const sleep = async (time) => {
  new Promise(resolve => {
    setTimeout(resolve,time);
  });
}

function addOne(num) {
  return num + 1;
}

function logNumber(num) {
  console.log(num);
}

function addOnetoOneAndLog() {
  const result = addOne(1);
  logNumber(result);
}

setTimeout(addOnetoOneAndLog, 0);

console.log('after setTimeout');

// promises and async/await
async function addOneAsync(num) {
  if (num  > 3) {
    await sleep(5000);
  }
  if (num > 6) {
    throw new Error('num is too big!');
  }
  return num + 1;
}

const resultSync = addOne(1);
console.log(resultSync);

addOneAsync(3).then(result => console.log(result));
addOneAsync(3).then(logNumber);
addOneAsync(4)
  .then(addOneAsync)
  .then(addOneAsync)
  .then(addOneAsync)
  .then(addOneAsync)
  .then(addOneAsync)
  .then(logNumber)
  .catch(e => console.error(e));

const addOneToThreeThenLog = async () => {
  const result = await addOneAsync(3);
  console.log(result);
};
addOneToThreeThenLog();

async function addOneToElevenThenLog () {
  try {
    const result = await addOneAsync(11);
    console.log(result);
  } catch (e) {
    console.error('try-catch in async!');
    console.error(e);
  }
}

addOneToElevenThenLog();

// loops
function loopSetTimeout() {
  console.log('loop from SetTimeout!');
  setTimeout(loop, 1000 / 30);
}
loopSetTimeout();

function loopSetInterval() {
  console.log('loop from SetTimeout!');
}
const intervalId = setInterval(loopSetInterval, 1000 / 30);
document.addEventListener('click', () => clearInterval(intervalId));

function loopAnimationFrame() {
  console.log('loop from requestAnimationFrame!');
  requestAnimationFrame(loopAnimationFrame);
}
requestAnimationFrame(loopAnimationFrame);
// or
// loopAnimationFrame()