// 1. 조건 연산자 - if, else if, else
console.log('조건 연산자 if')

const age = 20
if(age>=20) {
  // 조건이 참일 때
  console.log('성인입니다')
} else {
  // 조건이 거짓일 때
  console.log('청소년입니다')
}

const month = 2
if(month >= 3 && month <= 5) {
  console.log('spring')
} else if (month >= 6 && month <= 8) {
  console.log('summer')
} else if (month >= 9 && month <= 11) {
  console.log('fall')
} else {
  console.log('winter')
}

// 2. 삼항 조건 연산자 
// 조건 ? 값1 : 값2
// myAge >= 20 ? '성인' : '청소년'

const myAge = 30
console.log(myAge >= 20 ? '성인' : '청소년')

// 3. 조건 연산자 - switch문
console.log('조건 연산자 - switch문')

const color = 'red'

switch (color) {
  case 'red':
    console.log('i like red')
    break
  case 'blue':
    console.log('i like blue')
    break
  case 'green':
    console.log('i like green')
    break
  default:
    console.log('i dont know')
    break
}