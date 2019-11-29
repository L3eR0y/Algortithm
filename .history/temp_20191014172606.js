// let mdb = require('mdb');
// const fs = require('fs')

// let jurMdb = mdb('Jurist.mdb')

// console.log(jurMdb)
// jurMdb.tables((err, tables)=>{
//   tables.forEach(table=>{
//     jurMdb.toCSV(table, (err, csv)=>{
//       fs.writeFile(`/temp_files/${table}.csv`, csv, (err)=>{
//         if(err){
//           return console.log('ERROR: ',err)
//         }
//         console.log(`Saved as /temp_files/${table}.csv`)
//       })
//     })
//   })
// })
let _temp = '11/15/11 00:00:00'
let _temp2 = '11:30:00'

function parseDate(str) {
  let [date, time] = str.split(' ')
  // date = date.split('.')
  time || (time = '00:00:00')

  let date = date.replace(
    /([0-9]+)\/([0-9]+)\/([0-9]+)/,
    (str, month, day, year) => {
      return `20${year}-${month}-${day}`
    }
  )
  return `${_date}T${time}Z`
}

if(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}/.test(_temp)){
  let [date, time] = _temp.split(' ')[0]
  date = date.replace(/([0-9]+)\/([0-9]+)\/([0-9]+)/, (str, month, day , year)=>{
    return `20${year}-${month}-${day}`
  })
  let res = parseDate(`${date} ${time}`)
  console.log(res)
}

// console.log(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}/.exec(_temp))
