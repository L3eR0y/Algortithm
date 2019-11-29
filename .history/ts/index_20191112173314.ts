function* idGen(){
  let index = 0;
  yield new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{ resolve(index++) }, 2000)
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
  const {value,done} = await gen.next();
  console.log(value)
}

pull(ids)

