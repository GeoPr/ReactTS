import { app_TEST_CASE } from '../types';

export type app_TYPE = [{ id: string | number }];
export const app_IS = [];

export const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case app_TEST_CASE: {
      // ...
    }

    default:
      return state;
  }
};
