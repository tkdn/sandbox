import * as fs from 'node:fs/promises';

function timers() { // OK
  setTimeout(() => timers(), 0);
}
function immediate() { // OK
  setImmediate(() => immediate());
}

function nextTick() { // starves I/O
  process.nextTick(() => nextTick());
}

function microtasks() { // starves I/O
  queueMicrotask(() => microtasks());
}

microtasks();
console.log('AFTER'); // always logged
console.log(await fs.readFile('../.gitignore', 'utf-8'));
