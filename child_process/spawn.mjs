import { Readable, Writable } from 'node:stream'
import { spawn } from 'node:child_process'
import { createWriteStream } from 'node:fs'

/** spawn は基本的に非同期実行 spawn は .kill メソッドを持つ子プロセスオブジェクトを返す */
const process = spawn(
  'echo', ['Hello Spawn'],
  {
    stdio: ['ignore', 'pipe', 'inherit'],
    shell: true,
  }
)
const { exitCode, signalCode, pid, stdin, stdio, stderr } = process
console.log({ exitCode, signalCode, pid, stdin, stdio, stderr })

const stdout = Readable.toWeb(process.stdout.setEncoding('utf-8'))
const nodeWritable = createWriteStream('./foo.txt');
const webWritableStream = Writable.toWeb(nodeWritable);
await stdout.pipeTo(webWritableStream)

process.on('exit', () => {
  console.log('spawned process is exit 0.')
})

process.on('error', (e) => {
  console.log('spawned process is exit 1.')
  console.error(e)
})

console.log('After spawn()');
