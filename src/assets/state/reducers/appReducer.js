import { app_TEST_CASE } from '../types';

export const app_IS = [];

export const appReducer = (state, action) => {
  switch (action.type) {
    case app_TEST_CASE: {
      // ...
    }

    default:
      return state;
  }
};
