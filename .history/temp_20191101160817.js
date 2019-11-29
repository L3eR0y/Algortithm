let arr = [1,2,3,4,5,6,7]
let obj = {
  first: 1,
  second: 2
}


function foo({first, second}){
  console.log(first, second)
}

foo(...arr)
foo(obj)