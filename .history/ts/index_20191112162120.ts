let a:number = 1;

function* idGen(){
  let index = 0;
  while(index < 10){
    yield index++;
  }
}

let ids = idGen();

console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());

