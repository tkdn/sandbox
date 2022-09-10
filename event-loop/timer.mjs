function timeout(ms) {
  return new Promise(
    (resolve, _reject) => {
      setTimeout(resolve, ms); // (A)
    }
  );
}
await timeout(3_000);

// 13 Unfinished Top-Level Await: await was used outside of a function in the top-level code, but the passed Promise never resolved.
// https://nodejs.org/api/process.html#exit-codes:~:text=invalid%20or%20unavailable.-,13,-Unfinished%20Top%2DLevel
// function foreverPending() {
//   return new Promise(
//     (_resolve, _reject) => {}
//   );
// }
// await foreverPending();
