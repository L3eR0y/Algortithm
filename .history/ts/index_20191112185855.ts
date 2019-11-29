// function* idGen(){
//   while(true){
//     const _func = (num) => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve(num *= 2) }, 2000);
//       });
//     }
//     yield _func
//   }
// }

function* Gen(){
  let i = 0
  while(true){
    if(yield i++){
      break;
    }   
  }
  return 'DONE!'
}

let gen = Gen();
let curr = gen.next()
while(!curr.done){
  curr.value.then(res => console.log(res))
  curr = gen.next(curr.value === 10)
}

// ids.next().value(5).then(res => console.log(res))

