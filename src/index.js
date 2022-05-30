const fs = require('fs')
const getShiftIcal = require('./shifts')

const shiftsIcal = getShiftIcal()

fs.writeFile('shifts.ics', shiftsIcal, function (err, data) {
  if (err) {
    return console.log(err)
  }
  console.log(data)
})
