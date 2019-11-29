function* idGen(){
  let index = 0;
  while(true){
    yield new Promise<number>((resolve, reject)=>{
      index++
      setTimeout(()=>{ resolve(index) }, 2000)
    })
  }
}

let ids = idGen();

// let first = ids.next()

// first.value.then(res => {
//   console.log('RES: ', res)
// }).catch(err=>{console.log('ERR')})
ids.next().value.then(res => console.log(res))
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());

