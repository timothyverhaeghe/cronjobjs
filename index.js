const createDateAsUTC = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
};

const convertDateToUTC = (date) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  return new Date(year, month, day, hours, minutes, seconds);
};

const createNextTime = (momento, addDay) => {
  const date = new Date();
  const timeElements = momento.split(':');
  const hours = Number(timeElements[0]) * 60 * 60 * 1000;
  const minutes = Number(timeElements[1]) * 60 * 1000;
  const seconds = Number(timeElements[2]) * 1000;
  const combined = hours + minutes + seconds;
  const days = (addDay) ? date.getDate() + 1 : date.getDate();
  const thismorning = new Date(`${date.getFullYear()}-${(date.getMonth() + 1)}-${days}`).getTime() + combined;
  return new Date(thismorning);
};

const createScheduledTime = (moment, task, logs, addDay) => {
  const nextTime = createNextTime(moment, addDay);
  const over = nextTime - createDateAsUTC(new Date());
  if (over < 0) {
    if (logs) console.log('Already passed, calculate next time');
    createScheduledTime(moment, task, logs, true);
  } else {
    if (logs) console.log('scheduled', nextTime);
    setTimeout(() => task(() => {
      createScheduledTime(moment, task, logs, true);
    }), over);
  }
};

const cronjob = (settings, task) => {
  const logs = (settings && settings.logs) ? settings.logs : false;
  if (typeof task === 'function') {
    if (settings.exact) {
      if (logs) console.log('Cronjob set at an exact moment');
      const scheduled = convertDateToUTC(new Date(settings.exact));
      const over = scheduled - new Date();
      if (over < 0) {
        throw new Error('Time was in the past');
      } else {
        if (logs) console.log(`Task scheduled over ${over} ms`);
        setTimeout(task, over);
      }
    } else if (settings.every) {
      if (logs) console.log(`Cronjob set every ${settings.every} minutes`);
      setInterval(task, Number(settings.every) * 60000);
    } else if (settings.moment) {
      if (logs) console.log('Cronjob set at specific moment');
      createScheduledTime(settings.moment, task, logs);
    }
  } else {
    throw new Error('Task need to be a function');
  }
};

module.exports = cronjob;
