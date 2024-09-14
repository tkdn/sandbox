import { Readable } from "stream";

class MyStream extends Readable {
  #count = 0;
  _read(size) {
    this.push(":-)");
    if (this.#count++ === 5) {
      this.push(null);
    }
  }
}

const stream = new MyStream();

stream.on("data", (chunk) => {
  console.log(chunk.toString());
  stream.pause(); // Pause receiving data to simulate processing delay
  setTimeout(() => {
    stream.resume(); // Resume after 1000ms
  }, 1000);
});

stream.on("pause", () => console.log("paused."));
stream.on("end", () => console.log("ended."));
