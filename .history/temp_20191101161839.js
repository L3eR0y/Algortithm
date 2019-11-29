let arr = [1,2,3,4,5,6,7]
let obj = {
  
}


function foo({first:f = def(this).name, second:s = 11}){
  console.log(f,s)
}

function def(first){
  console.log("FRIST: ", first)
  return 10
}

foo(obj)