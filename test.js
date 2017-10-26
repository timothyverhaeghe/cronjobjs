const cronjob = require('./index');

cronjob({
  exact: '2017-10-26T21:32:00Z',
}, () => {
  console.log("it's time");
});
