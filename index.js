let funcs = [];

const qot = conf => {
  if (conf && conf.ready) {
    let step = 0;

    return {
      add: (...func) => {
        funcs = funcs.concat(func);

        const tick = (...params) => {
          step++;
          funcs.shift();

          let interval = setInterval(() => {
            if (funcs[0]) {
              funcs[0](tick, ...params);
              clearInterval(interval);
            }
          });
        };

        if (step === 0) funcs[step](tick);
      },
    };
  } else {
    return {
      add: (...func) => {
        funcs = funcs.concat(func);
      },
      run: (...params) => {
        const finall = params.pop();

        let func = funcs.shift();

        let runner = f => {
          const tick = (...params) => {
            func = funcs.shift();
            if (func) runner(func.bind(null, tick, ...params));
            else !finall || finall(...params);
          };

          f.bind(null, tick, ...params)();
        };

        runner(func);
      },
    };
  }
};

module.exports = qot;
