import test from 'ava';
let qot = require('./index');

test('add', async t => {
  qot.add((tick, name) => {
    tick(name.toUpperCase());
  });

  qot.add((tick, name) => {
    tick({
      name,
    });
  });

  qot.run('ahmet', name => {
    t.deepEqual(
      {
        name: 'AHMET',
      },
      name,
    );
  });
});
