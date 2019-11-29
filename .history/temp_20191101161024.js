let arr = [1,2,3,4,5,6,7]
let obj = {
}


function foo({first:f = def(), second:s = 11}){
  console.log(...arguments)
}

function def(){
  return 10
}

foo(...arr)
foo(obj)