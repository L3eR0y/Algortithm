let a:number = 1;

function* idGen(){
  let index = 0;
  try{
    yield new Promise<number>((resolve, reject)=>{
      setTimeout(()=>{
        index++;
        console.log('NEEEEEXT! ' + index);
        resolve(index)
      }, 2000)
    })
  }catch(err){
    console.log('ERROR: ', err.message)
  }
}

let ids = idGen();

let fist = ids.next()
fist.then()

// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());

