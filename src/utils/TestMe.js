/**
 * returns a promise that resolves after x milliseconds
 */
const wait = (time = 1000) => {
  // return a new promise
  return new Promise((resolve) => {
    // start timer
    setTimeout(() => {
      // resolve promise when time is up
      resolve('done');
    }, time)
  });
}

const fail = (shouldFail = false) => {
  if (shouldFail) {
    throw new Error("Failure!")
  }
}

export { wait, fail }