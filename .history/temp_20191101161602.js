let arr = [1,2,3,4,5,6,7]
let obj = {
}


function foo({first:f = def().name, second:s = 11}){
  console.log(f,s)
}

function def(){
  this.name = 'A'
  return this
}

foo(obj)