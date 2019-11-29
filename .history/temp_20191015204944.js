let mdb = require('mdb');
const fs = require('fs')

let jurMdb = mdb('Jurist.mdb')

console.log(jurMdb)
jurMdb.tables((err, tables)=>{
  tables.forEach(table=>{
    jurMdb.toCSV(table, (err, csv)=>{
      if(table == 'Адреса Исков и Претензий'){
        console.log(csv.split('\n')[0])
      }
      // fs.writeFile(`/temp_files/${table}.csv`, csv, (err)=>{
      //   if(err){
      //     return console.log('ERROR: ',err)
      //   }
      //   console.log(`Saved as /temp_files/${table}.csv`)
      // })
    })
  })
})
// let _temp = '11/15/11 00:00:00'
// let _temp2 = '11:30:00'

// function parseDate(str) {
//   let [date, time] = str.split(' ')
//   console.log(date, time)
//   // date = date.split('.')
//   time || (time = '00:00:00')

//   date = date.replace(
//     /([0-9]+)\/([0-9]+)\/([0-9]+)/,
//     (str, month, day, year) => {
//       return `20${year}-${month}-${day}`
//     }
//   )
//   return `${date}T${time}Z`
// }

// if(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}/.test(_temp)){
//   let [date, time] = _temp.split(' ')
//   date = date.replace(/([0-9]+)\/([0-9]+)\/([0-9]+)/, (str, month, day , year)=>{
//     return `20${year}-${month}-${day}`
//   })
//   console.log('D&T: ', date, time)
//   let res = parseDate(`${date} ${time}`)
//   console.log(res)
// }

// console.log(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}/.exec(_temp))
