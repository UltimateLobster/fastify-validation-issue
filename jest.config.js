/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  logHeapUsage: true,
};
