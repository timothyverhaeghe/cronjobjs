/*
const cronjob = require('./index');

cronjob({
  exact: '2017-10-26T21:54:00Z',
}, () => {
  console.log("it's time");
});
*/

/*
const cronjob = require('./index');

cronjob({
  every: 1, // every x minutes
  logs: true,
}, () => {
  console.log("it's time");
});
*/

const cronjob = require('./index');

cronjob({
  moment: '00:05:00',
  logs: false,
}, (done) => {
  console.log("it's time");
  // Set for example a delay of 6 seconds.
  setTimeout(() => {
    done(); // this will schedule the next loop.
  }, 6000);
});
