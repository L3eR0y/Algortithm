let _pyramid = [[75],
              [95, 64],
            [17, 47, 82],
          [18, 35, 87, 10],
        [20, 4, 82, 47, 65]]


function longestSlideDown (pyramid: number[][]):number {
  for(let i = pyramid.length-2; i >= 0; i--){
    for(let [index, el] of pyramid[i].entries()){
      pyramid[i][index] = pyramid[i+1][index] > pyramid[i+1][index+1] ? el + pyramid[i+1][index] : el + pyramid[i+1][index+1];
    }
  }
  pyramid.reduceRight((last, current) => {
    return current.map((el, index) => {
      return el + Math.max(last[index], last[index+1])
    })
  })
  return pyramid
}

console.log(longestSlideDown(_pyramid))