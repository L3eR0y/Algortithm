let mdb = require('mdb');

let jurMdb = mdb('Jurist.mdb')

console.log(jurMdb)
jurMdb.tables((err, tables)=>{
  // tables.forEach(table=>{
    jurMdb.toCSV(tables[3], (err, csv)=>{
      let _splitted_csv = csv.split('\n')
      // _splitted_csv.forEach((el, index) => {
      //   console.log(`${}`)
      //   console.log(_splitted_csv[0].split(','))
      //   console.log(_splitted_csv[1].split(','))
      // })
      _splitted_csv[0].split(',').forEach((item,index,arr)=>{
        console.log(`${arr[i]} : ${_splitted_csv[1].split(',')[i]}`)
      })
    })
  // })

  // if(err) console.log('ERROR: ', err)
  // console.log('TABLES: ',tables)
  
  // tables.forEach((table)=>{
  //   jurMdb.toCSV(table, (err, csv)=>{
  //     console.log(err, table, csv.split('\n').length - 1 + ' lines')
  //   })
  // })
})