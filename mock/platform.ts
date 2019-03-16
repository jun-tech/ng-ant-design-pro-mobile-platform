import * as Mock from 'mockjs';

export const PLATFORM = {
  'm1/p1': () => {
    return Mock.mock({
      'id|+1': Math.random(),
    });
  },
  'm2/p2': () => {
    return Mock.mock({
      'id|+1': 1 + 'abc',
    });
  },
};
