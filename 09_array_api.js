const books = ['html', 'css', 'javascript']

// 배열을 문자열로 만들기
console.log(books)
{
 const result = books.join(' ')
 console.log(result)
}

// 2. 문자열을 배열로 만들기
{
const book2 = 'react, vue, angular'
const result = book2.split(',')
console.log(result)
}

// 배열을 반대로 만들기
{
  const nubers = [1, 2, 5, 9, 20]
  console.log(nubers)
  const result = nubers.reverse()
  console.log(result)
}

// 4. 특정요소를 제거한 새로운 배열 만들기
{
  const nubers = [1, 2, 5, 7, 9]
  // console.log(nubers)
  // const result = nubers.splice(0, 2)
  // console.log(result)

  const result = nubers.slice(2)
  console.log(result)
  console.log(nubers)
}

// 소주
// const sojus = [
//   {name: '대선', price:1200, sale: true, score:86},
//   {name: '좋은데이', price:1100, sale: false, score:92},
//   {name: '진로', price:1150, sale: true, score:80},
//   {name: '금복주', price:960, sale: false, score:60},
//   {name: '참이슬', price:1250, sale: true, score:46}
// ]

class Soju {
  constructor(name, price, sale, score) {
    this.name = name
    this.price =price
    this.sale = sale
    this.score =score
  }
}

const sojus = [
  new Soju('대선', 1200, true, 96),
  new Soju('좋은데이', 1100, false, 92),
  new Soju('진로', 1150, true, 80),
  new Soju('금복주', 960, false, 60),
  new Soju('참이슬', 1250, true, 46)
]

// 5. score가 80인 소주를 찾기
{

}

// 6. 판매중인 소주를 찾아서 새로운 배열로 만들기
{

}

// 7. 점수(score)만 있는 새로운 배열 만들기

// 8. 점수가 50보다 작은 소주가 있는지 확인하기

// 9. 소주들의 평균 가격을 계산하기

// 10. 점수를 문자로 만들기

// 11. 점수가 낮은순으로 문자열로 정렬하기