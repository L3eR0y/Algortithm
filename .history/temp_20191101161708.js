let arr = [1,2,3,4,5,6,7]
let obj = {
  
}


function foo({first:f = def(f).name, second:s = 11}){
  console.log(f,s)
}

function def(first){
  this.name = 'A'
  console.log("FRIST: ", first)
  return this
}

foo(obj)