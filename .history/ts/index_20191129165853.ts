let _pyramid = [[75], [95, 64], [17, 47, 82], [18, 35, 87, 10], [20, 4, 82, 47, 65]]
let simpleString1 = 'Are they here'
let simpleString2 = 'yes, they are here'

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
  let _s1 = s1.replace(/\W|[A-Z]/g, '').toLocaleLowerCase().split('').reduce((last, curr) => {
    if(last[curr]){
      last[curr].str1.count++
      last[curr].str1.chars += curr 
    }else{
      last[curr] = {
        str1: {
          count: 0,
          chars: ''
        },
        str2: {
          count: 0,
          chars: ''
        }
      }
      last[curr].str1.count = 1
      last[curr].str1.chars = curr 
    }
    return last
  },{});

  let _s2 = s2.replace(/\W/g, '').toLocaleLowerCase().split('').reduce((last, curr) => {
    if(last[curr]){
      last[curr].str2.count++
      last[curr].str2.chars += curr 
    }else{
      last[curr] = {
        str1: {
          count: 0,
          chars: ''
        },
        str2: {
          count: 0,
          chars: ''
        }
      }
      last[curr].str2.count = 1
      last[curr].str2.chars = curr 
    }
    return last
  },_s1);

  let result = Object.entries(_s2).reduce((acc, val) => {
    console.log(val[1]['str1']['count'], val[1]['str2']['count'])
    if(val[1]['str1']['count'] > val[1]['str2']['count']){
      if(acc[val[1]['str1']['count']]){
        acc[val[1]['str1']['count']].push(val[1]['str1']['chars'])
      }else{
        acc[val[1]['str1']['count']] = []
        acc[val[1]['str1']['count']].push(val[1]['str1']['chars'])
      }      
    }else{
      if(acc[val[1]['str2']['count']]){
        acc[val[1]['str2']['count']].push(val[1]['str2']['chars'])
      }else{
        acc[val[1]['str2']['count']] = []
        acc[val[1]['str2']['count']].push(val[1]['str2']['chars'])
      }
    }
    return acc
  },{})

  
/*   .map(([key,val], index)=>{
    if(val['str1'].count > val['str2'].count){
      return `1:${val['str1'].chars}`
    }else if(val['str1'].count < val['str2'].count){
      return `2:${val['str2'].chars}`
    }else{
      return `=:${val['str1'].chars}`
    }
  }).join('/') */
}


console.log(stringCompareByChar(simpleString1, simpleString2))
