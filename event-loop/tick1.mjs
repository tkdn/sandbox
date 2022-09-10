import { readFile } from "node:fs";
import { setTimeout as setTimeoutPromise } from 'node:timers/promises';

process.nextTick(async () => {
  setTimeout(() => console.log('setTimeout'), 0)
  queueMicrotask(() => console.log('queueMicrotask'))
  process.nextTick(() => console.log('nested tick'))
  readFile('../.gitignore', () => console.log('I/O readFile'))
  console.log(await setTimeoutPromise(0, 'await setTimeoutPromise'))
  console.log('tick')
})
setImmediate(() => console.log('setImmediate'))
console.log('main')
