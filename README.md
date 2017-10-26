# CronjobJS
This is a NodeJS package to run a scheduled job without cronjob.

## 1. Documenation
### 1.1. At an exact hour
```js
const cronjob = require('./index');

cronjob({
  exact: '2017-10-26T21:32:00Z',
  logs: true
}, () => {
  console.log("it's time");
});
```

### 1.2. Every 5 minutes
```js
const cronjob = require('./index');

cronjob({
  every: 2, // every x minutes
  logs: true,
}, () => {
  console.log("it's time");
});
```

### 1.3. At a specific hour
```js
const cronjob = require('./index');

cronjob({
  moment: '21:32:00',
  logs: true
}, () => {
  console.log("it's time");
});
```

## 2. Contribute
### 2.1. Todo
- [ ] Better logging

## 3. Copyright
MIT License

Copyright (c) 2017 [Timothy Verhaeghe](https://github.com/timothyverhaeghe)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
