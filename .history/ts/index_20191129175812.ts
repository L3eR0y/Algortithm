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
    if(val[1]['str1']['count'] > val[1]['str2']['count'] && val[1]['str1']['count'] > 1){
      if(acc[val[1]['str1']['count']]){
        acc[val[1]['str1']['count']].push('1:' + val[1]['str1']['chars'])
      }else{
        acc[val[1]['str1']['count']] = []
        acc[val[1]['str1']['count']].push('1:' + val[1]['str1']['chars'])
      }      
    }else if(val[1]['str1']['count'] < val[1]['str2']['count'] && val[1]['str2']['count'] > 1){
      if(acc[val[1]['str2']['count']]){
        acc[val[1]['str2']['count']].push('2:' + val[1]['str2']['chars'])
      }else{
        acc[val[1]['str2']['count']] = []
        acc[val[1]['str2']['count']].push('2:' + val[1]['str2']['chars'])
      }
    }else if(val[1]['str1']['count'] == val[1]['str2']['count'] && val[1]['str1']['count'] > 1){
      if(acc[val[1]['str2']['count']]){
        acc[val[1]['str2']['count']].push('=:' + val[1]['str2']['chars'])
      }else{
        acc[val[1]['str2']['count']] = []
        acc[val[1]['str2']['count']].push('=:' + val[1]['str2']['chars'])
      }
    }
    return acc
  },{})
  
  let sortable:any = Object.entries(result)

  sortable = sortable.sort((a,b)=>{
    return b[0] - a[0]
  }).map(item => {
    item[1] = item[1].sort()
    return item[1]
  }).reduce((acc, v)=>{
    // console.l
   v.forEach(item => {
     acc.push(item)
   })
   return acc
  },[]).join('/')
  console.log('SORT: ', sortable)

  return sortable
}


console.log(stringCompareByChar(simpleString1, simpleString2))
