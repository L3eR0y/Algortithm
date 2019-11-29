let mdb = require('mdb');

let jurMdb = mdb('/temp_files/Jurist.mdb')

jurMdb.tables((err, tables)=>{
  console.log(tables)
  tables.forEach((table)=>{
    jurMdb.toCSV(table, (err, csv)=>{
      console.log(err, table, csv.split('\n').length - 1 + ' lines')
    })
  })
})
console.log(mdb)