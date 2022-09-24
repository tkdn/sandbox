import { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';

const worker = createWorker({
  logger: m => console.log(m)
})

export function useOcr(imgPath: string) {
  const [text, setText] = useState('loading')

  useEffect(() => {
    (async() => {
      await worker.load()
      await worker.loadLanguage('jpn')
      await worker.initialize('jpn')
      const { data: { text } } = await worker.recognize(imgPath)
      setText(text)
      console.log(text)
      await worker.terminate()
    })()
  }, [])

  return text
}
