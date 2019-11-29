let _pyramid = [[75],
              [95, 64],
            [17, 47, 82],
          [18, 35, 87, 10],
        [20, 4, 82, 47, 65]]


function longestSlideDown (pyramid: number[][]):number {
    for(let i = pyramid.length-2; i >= 0; i--){
      for(let [index, el] of pyramid[i].entries()){
        console.log(el, pyramid[i+1][index], pyramid[i+1][index+1])
        pyramid[i][index] = pyramid[i+1][index] > pyramid[i+1][index+1] ? el + pyramid[i+1][index] : el + pyramid[i+1][index+1] 
        console.log(el)
      }
      console.log('ROW: ', pyramid[i])
  //     pyramid[i].forEach((el, index) => {
  //       console.log(el, pyramid[i+1][index], pyramid[i+1][index+1])
  //       el = pyramid[i+1][index] > pyramid[i+1][index+1] ? el + pyramid[i+1][index] : el + pyramid[i+1][index+1] 
  //       console.log(el)
  //     })
    }
    return pyramid[0][0]
  }

console.log(longestSlideDown(_pyramid))