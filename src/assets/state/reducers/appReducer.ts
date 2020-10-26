import { app_TEST_CASE } from '../types';

type app_IST = {};
export const app_IS: app_IST[] = [];

export const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case app_TEST_CASE: {
      // ...
    }

    default:
      return state;
  }
};
