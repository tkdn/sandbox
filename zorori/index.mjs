import { writeFileSync } from 'fs'

const response = await fetch('https://web-search.poplar.co.jp/pb-search.json?label_brand[]=W0001&van_stock=1,1,1,1&pb_library=1&limit=200')
const json = await response.json()
const arr = Object.values(json.books).slice(0, -3).reverse()
let buff = ''

// 3 1 3 5 1
// https://www.poplar.co.jp/img/cms/book/original/978-4-591-04898-6.jpg

for (let idx = 0; idx < arr.length; idx++) {
  const { official_name, isbn13 } = arr[idx]
  const capture = /(\d{3})(\d{1})(\d{3})(\d{5})(\d{1})/
  const imgSrc = String(isbn13).replace(capture, '$1-$2-$3-$4-$5.jpg')
  // かいけつゾロリいじわる人生ゲームが廃版っぽい
  if (official_name === 'かいけつゾロリいじわる人生ゲーム') {
    buff += `none\t${idx + 1}\t${official_name}\t------------\n`
  } else {
    buff += `${imgSrc}\t${idx + 1}\t${official_name}\t${isbn13}\n`
  }
}

writeFileSync('./foo.txt', buff)
