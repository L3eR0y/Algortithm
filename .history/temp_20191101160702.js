let arr = [1,2,3,4,5,6,7]
console.log(...arr)

function foo({first, second}){
  console.log(first, second)
}

foo(...arr)