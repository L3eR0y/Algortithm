function* idGen(){
  let index = 0;
  yield new Promise<number>((resolve, reject)=>{
    index++
    setTimeout(()=>{ resolve(index) }, 2000)
  })
}

let ids = idGen();

// let first = ids.next()

// first.value.then(res => {
//   console.log('RES: ', res)
// }).catch(err=>{console.log('ERR')})

// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());

async function pull(gen){
  for await (const x of gen){
    console.log(x)
  }
}

pull(ids)
