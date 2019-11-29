let mdb = require('mdb');

let jurMdb = mdb('Jurist.mdb')

console.log(jurMdb)
jurMdb.tables((err, tables)=>{
  tables.forEach(table=>{
    jurMdb.toCSV(table, (err, csv)=>{
      let _splitted_csv = csv.split('\n')
      _splitted_csv.length
      // for(let i = 0; i < 5; i++){
      //   console.log(_splitted_csv[i].split(','))
      // }
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