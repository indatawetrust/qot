# qot
Array based waterfall

[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/qot.svg)](https://travis-ci.org/indatawetrust/qot)

#### usage

##### manual
```js
let qot = require('qot')();

qot.add((tick, name) => {
  tick(name.toUpperCase());
});

qot.add((tick, name) => {
  tick({
    name,
  });
});

qot.run('ahmet', name => {
  // log
  {
    name: 'AHMET',
  }
});
```

##### automatic
```js
let qot = require('qot')({ ready: true });

qot.add((tick) => {
  tick("ahmet".toUpperCase());
});

qot.add((tick, name) => {
  tick({
    name,
  });
});

qot.add((tick, name) => {
  // log
  {
    name: 'AHMET',
  }
});
```
