import { Readable } from "node:stream";
import { setTimeout as sleep } from "timers/promises";

async function* generate() {
  yield "hello";
  await sleep(1000); // Simulates a delay
  yield " ";
  await sleep(500); // Simulates another delay
  yield "world";
}

Readable.from(generate()).on("data", (chunk) => console.log(chunk));
