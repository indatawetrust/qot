# qot
Array based waterfall

[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/qot.svg)](https://travis-ci.org/indatawetrust/qot)

### usage
```js
import qot from 'qot';

qot.add((tick, name) => {
  tick(name.toUpperCase());
});

qot.add((tick, name) => {
  tick({
    name,
  });
});

qot.run('ahmet', name => {
  console.log(name)
  {
    name: 'AHMET',
  }
});
```
