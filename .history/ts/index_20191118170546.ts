let count = 9;
let binaryCount = count.toString(2).split('').reverse().map((el, index) => {
  return `${el} * 2^${index}`
}).join(' + ')

console.log(binaryCount)

