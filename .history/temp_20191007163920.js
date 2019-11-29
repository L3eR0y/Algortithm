let mdb = require('mdb');

let jurMdb = mdb('Jurist.mdb')

console.log(jurMdb)
jurMdb.tables((err, tables)=>{
  jurMdb.toCSV(tables[1], (err, csv)=>{
    csv.split('\n').forEach(ln => {
      console.log(ln.split(','))
    })
  })
  // if(err) console.log('ERROR: ', err)
  // console.log('TABLES: ',tables)
  
  // tables.forEach((table)=>{
  //   jurMdb.toCSV(table, (err, csv)=>{
  //     console.log(err, table, csv.split('\n').length - 1 + ' lines')
  //   })
  // })
})