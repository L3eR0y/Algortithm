let _pyramid = [[75], [95, 64], [17, 47, 82], [18, 35, 87, 10], [20, 4, 82, 47, 65]]
let simpleString1 = 'Are the kids at home?'
let simpleString2 = 'Yes they are here!'

// Longest path in pyramid
function longestSlideDown (pyramid: number[][]):any {
  // for(let i = pyramid.length-2; i >= 0; i--){
  //   for(let [index, el] of pyramid[i].entries()){
  //     pyramid[i][index] = pyramid[i+1][index] > pyramid[i+1][index+1] ? el + pyramid[i+1][index] : el + pyramid[i+1][index+1];
  //   }
  // }
  return  pyramid.reduceRight((last, current) => {
    return current.map((el, index) => {
      return el + Math.max(last[index], last[index+1])
    })
  })
}
// longestSlideDown(_pyramid)

function stringCompareByChar(s1:string, s2:string){
  let _s1 = s1.replace(/\W/g, '').toLocaleLowerCase();
  let _s2 = s2.replace(/\W/g, '').toLocaleLowerCase();
  console.log(_s1, _s2)
  console.log(_s1.split('').reduce((last, curr) => {
    // console.log(last[curr])
    // last[curr] 
    //   ? last[curr] += 1 
    //   : last[curr] = 0
    if(last[curr] && +(last[curr]) >= 0){
      console.log('last[curr] : ', last[curr])
      last[curr] = last[curr] + 1;
    }else{
      console.log('last[curr] ep: ', last[curr])
      last[curr] = 0;
    }
    return last
  },{}))
}

stringCompareByChar(simpleString1, simpleString2)
