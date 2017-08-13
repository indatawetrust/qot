import test from 'ava';

test('manual', t => {

  let qot = require('./index')();

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

test('automatic', async t => {

  let qot = require('./index')({ ready: true });

  qot.add((tick) => {
    tick("ahmet".toUpperCase());
  });

  qot.add((tick, name) => {
    tick({
      name,
    })
  });

  let name = await new Promise(resolve => {
    qot.add((tick, name) => {
      resolve(name)
    });
  })

  t.deepEqual(
    {
      name: 'AHMET',
    },
    name,
  );
});
