/** @flow */

function delayedHello(name: string, delay: number = 2000): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`Hello, ${name}`), delay));
}

// Below is an example of using both, the eslint and flow errors suppression

// $FlowFixMe: add type annotations to parameters
export default async function greeter(name) { // eslint-disable-line flowtype/require-return-type
  return delayedHello(name);
}
