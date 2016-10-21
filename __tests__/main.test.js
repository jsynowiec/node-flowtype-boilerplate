/** @flow */

import greeter from '../src/main';

// https://facebook.github.io/jest/docs/api.html#jestusefaketimers
jest.useFakeTimers();

let hello;

beforeAll(async () => {
  hello = await greeter('John');
});

it('delays the greeting by 2 seconds', () => {
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(2000);
});

it('greets a user with `Hello, {name}` message', () => {
  expect(hello).toBe('Hello, John');
});
