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
  let result_string:string = ''
  let _s1 = s1.replace(/\W/g, '').toLocaleLowerCase().split('').reduce((last, curr) => {
    if(last[curr]){
      last[curr].count++
      last[curr].chars += curr 
    }else{
      last[curr].count = 1
      last[curr].chars = curr 
    }
    return last
  },{});
  let _s2 = s2.replace(/\W/g, '').toLocaleLowerCase().split('').reduce((last, curr) => {
    if(last[curr]){
      last[curr].count++
      last[curr].chars += curr 
    }else{
      last[curr].count = 1
      last[curr].chars = curr 
    }
    return last
  },{});

  if(Object.keys(_s1).length > Object.keys(_s2).length){
    console.log(Object.entries(_s1)))
  }
}

stringCompareByChar(simpleString1, simpleString2)
