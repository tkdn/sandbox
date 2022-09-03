import { Readable, Writable } from 'node:stream'
import { spawn } from 'node:child_process'

const childProcess = spawn(
  `sort`,
  {
    stdio: ['pipe', 'pipe', 'inherit'],
  }
)
const stdin = Writable.toWeb(childProcess.stdin)
const writer = stdin.getWriter()
try {
  await writer.write('Cherry\n')
  await writer.write('Apple\n')
  await writer.write('Banana\n')
} finally {
  writer.close()
}

const stdout = Readable.toWeb(childProcess.stdout.setEncoding('utf-8'))
