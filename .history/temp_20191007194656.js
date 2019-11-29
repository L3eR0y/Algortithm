let mdb = require('mdb');
const fs = require('fs')

let jurMdb = mdb('Jurist.mdb')

console.log(jurMdb)
jurMdb.tables((err, tables)=>{
  tables.forEach(table=>{
    jurMdb.toCSV(table, (err, csv)=>{
      fs.writeFile(`/temp_files/${table}.csv`, csv, (err)=>{
        if(err){
          return console.log('ERROR: ',err)
        }
        console.log(`Saved as /temp_files/${table}.csv`)
      })
    })
  })
})