let count = 230;
let binaryCount = count.toString(2).split('').reverse()
console.log('BINARY: ', binaryCount)
let res = [];
binaryCount.forEach((el, index) => {
  +el !== 0 ? res.push(index) : void 0
})

console.log(res)

