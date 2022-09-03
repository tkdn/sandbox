import { createWriteStream } from 'node:fs'
import { Writable } from 'node:stream';

const response = await fetch('https://en.gravatar.com/userimage/54409562/52da9c4eb0482498905e2a0c7c502549.jpg');
const nodeWritable = createWriteStream('./file.png');
const webWritableStream = Writable.toWeb(nodeWritable);
await response.body.pipeTo(webWritableStream);
