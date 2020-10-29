import React from 'react';
import { app_TEST_CASE } from './types';

interface IDispatch {
  type: string;
  payload?: object;
}

// app
export const app_testCase = (test: any) => ({ type: app_TEST_CASE, payload: { test } });

export const asyncActionCreator = (
  dispatch: React.Dispatch<React.SetStateAction<IDispatch>>,
  fn: () => IDispatch,
): any => {
  return () => {
    return dispatch(fn());
  };
};
