let funcs = [];

const qot = () => {
  return {
    add: (...func) => {
      func = Array.isArray(func) ? func : [func];
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
};

module.exports = qot();
