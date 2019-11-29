function* idGen(){
  let index = 0;
  while(true){
    const _func = (num) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(num *= 2) }, 2000);
      });
    }
    yield _func
  }
}

let ids = idGen();

ids.next().value(5).then(res => console.log(res))

