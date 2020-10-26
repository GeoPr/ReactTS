import { app_TEST_CASE } from './types';

// app
export const app_testCase = (test: any) => ({ type: app_TEST_CASE, payload: { test } });
