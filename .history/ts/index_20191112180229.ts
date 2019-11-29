function* idGen(){
  let index = 0;
  while(true){
    const _func = (num) => {
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

ids.next().value(5).then(res => console.log(res))

