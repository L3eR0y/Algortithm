let a:number = 1;

function* idGen(){
  let index = 0;
  while(index < 10){
    yield new Promise((resolve, reject)=>{
      setTimeout(()=>{
        index++;
        console.log('NEEEEEXT! ' + index);
        resolve(index)
      }, 2000)
    })
  }
}

let ids = idGen();

// console.log(await ids.next());
console.log(await ids.next());
console.log(await ids.next());
console.log(await ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());

