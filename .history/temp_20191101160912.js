let arr = [1,2,3,4,5,6,7]
let obj = {
}


function foo({first:f = 10, second:s = 11}){
  console.log(...arguments)
}

foo(...arr)
foo(obj)