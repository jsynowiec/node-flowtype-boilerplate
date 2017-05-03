/** @flow */

import greeter from '../src/main';

jest.useFakeTimers();

it('delays the greeting by 2 seconds', async () => {
  expect.assertions(2);
  const promise = greeter('John');
  jest.runOnlyPendingTimers();
  await promise;
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(2000);
});

it('greets a user with `Hello, {name}` message', async () => {
  const promise = greeter('John');
  jest.runOnlyPendingTimers();
  const hello = await promise;
  expect(hello).toBe('Hello, John');
});
