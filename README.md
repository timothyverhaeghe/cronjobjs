# CronjobJS
This is a NodeJS package to run a scheduled job without cronjob.

## Table of contents
- [1. Documenation ](https://github.com/timothyverhaeghe/cronjobjs#1-documentation)  
    - [1.1. At an exact hour](https://github.com/timothyverhaeghe/cronjobjs#11-at-an-exact-hour)  
    - [1.2. Every x minutes](https://github.com/timothyverhaeghe/cronjobjs#12-every-x-minutes)  
    - [1.3. At a specific hour](https://github.com/timothyverhaeghe/cronjobjs#13-at-a-specific-hour)  
- [2. Contribute ](https://github.com/timothyverhaeghe/cronjobjs#2-contribute)  
- [3. Support ](https://github.com/timothyverhaeghe/cronjobjs#3-support)  
- [4. Copyright ](https://github.com/timothyverhaeghe/cronjobjs#4-copyright)

## 1. Documenation
### 1.1. At an exact hour
```js
const cronjob = require('./index');

cronjob({
  exact: '2017-10-26T21:54:00Z',
}, () => {
  console.log("it's time");
});
```

### 1.2. Every x minutes
```js
const cronjob = require('./index');

cronjob({
  every: 1, // every x minutes
  logs: true,
}, () => {
  console.log("it's time");
});
```

### 1.3. At a specific hour
```js
const cronjob = require('./index');

cronjob({
  moment: '00:05:00',
  logs: false,
}, (done) => {
  console.log("it's time");
  done(); // this will schedule the next loop.
});

```

## 2. Contribute
### 2.1. Todo
- [ ] Better logging

## 3. Support
If you have any questions regarding this repo, feel free to contact me at me@timothyverhaeghe.com

## 4. Copyright
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
