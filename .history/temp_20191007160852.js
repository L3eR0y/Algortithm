let mdb = require('mdb');

let jurMdb = mdb('Jurist.mdb')

console.log(jurMdb)
jurMdb.tables((err, tables)=>{
  if(err) console.log('ERROR: ', err)
  console.log('TABLES: ',tables)
  jurMdb.toCSV(tables[1], (err, csv)=>{
    console.log(csv.split('\'))
  })
  // tables.forEach((table)=>{
  //   jurMdb.toCSV(table, (err, csv)=>{
  //     console.log(err, table, csv.split('\n').length - 1 + ' lines')
  //   })
  // })
})