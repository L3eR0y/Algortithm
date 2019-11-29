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

if(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}/.test(_temp)){
  let _t = _temp.split(' ')[0]
  _t = _t.replace(/\//g, '-')
  console.log(_t)
}

// console.log(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}/.exec(_temp))
