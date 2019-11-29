let arr = [1,2,3,4,5,6,7]
let obj = {
  
}


function foo({first = def(this), second:s = 11}){
  console.log(first,s)
}

function def(first){
  console.log("FRIST: ", first)
  return 10
}

foo(obj)