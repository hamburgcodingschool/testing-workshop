import { fail, wait } from '../TestMe'

jest.useFakeTimers();

test('fail function should fail', () => {
  expect(() => fail(true)).toThrow('Failure!');
})

test('fail function should not fail', () => {
  expect(() => fail()).not.toThrow();
})

test('wait function should wait a custom time', async () => {
  const promise = wait(100);
  jest.runAllTimers();
  await expect(promise).resolves.toBe('done');
})

test('wait function should return promise that resolves', async () => {
  const promise = wait(1000);
  const spy = jest.fn();
  const spyPromise = promise.then(spy);

  expect(spy).not.toBeCalled();
  jest.advanceTimersByTime(1000);
  await expect(spyPromise).resolves;
  expect(spy).toBeCalled();

  await expect(promise).resolves.toBe('done');
})