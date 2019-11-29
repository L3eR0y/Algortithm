let arr = [1,2,3,4,5,6,7]
let obj = {
}


function foo({first:f = def(), second:s = 11}){
  console.log(f,s)
}

function def(){
  return 15
}

foo(...arr)
foo(obj)