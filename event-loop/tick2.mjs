function enqueueTasks() {
  Promise.resolve().then(() => console.log('Promise reaction 1'));
  queueMicrotask(() => console.log('queueMicrotask 1'));
  process.nextTick(() => console.log('nextTick 1'));
  setImmediate(() => console.log('setImmediate 1')); // (A)
  setTimeout(() => console.log('setTimeout 1'), 0);
  
  Promise.resolve().then(() => console.log('Promise reaction 2'));
  queueMicrotask(() => console.log('queueMicrotask 2'));
  process.nextTick(() => console.log('nextTick 2'));
  setImmediate(() => console.log('setImmediate 2')); // (B)
  setTimeout(() => console.log('setTimeout 2'), 0);
}

setImmediate(enqueueTasks);

// nextTick 1
// nextTick 2
// Promise reaction 1
// queueMicrotask 1
// Promise reaction 2
// queueMicrotask 2
// setTimeout 1
// setTimeout 2
// setImmediate 1
// setImmediate 2
