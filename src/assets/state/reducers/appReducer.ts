import { app_TEST_CASE } from '../types';

export type app_TYPE = { id: string | number };
export const app_IS: Array<app_TYPE> = [];

export const appReducer = (state: Array<app_TYPE>, action: any) => {
  switch (action.type) {
    case app_TEST_CASE: {
      // ...
    }

    default:
      return state;
  }
};
