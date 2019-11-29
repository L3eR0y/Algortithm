function* idGen(){
  let index = 0;
  while(true){
    const _func = (num) => {
      console.log('Number is : ', num);
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(num *= 2);
        }, 2000);
      });
    }
    yield _func
    // yield new Promise<number>((resolve, reject)=>{
    //   index++
    //   setTimeout(()=>{ resolve(index) }, 2000)
    // })
  }
}

let ids = idGen();

// let first = ids.next()

// first.value.then(res => {
//   console.log('RES: ', res)
// }).catch(err=>{console.log('ERR')})
// ids.next().value.then(res => console.log(res));
// ids.next().value.then(res => console.log(res));
console.log(ids.next())

