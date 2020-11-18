const ics = require('ics')
const { writeFileSync } = require('fs')

const shiftData = `
1d
2n
5d
6d
7d
9n
23d
`

const month = 11
const year = 2020

const createShiftEvent = ([day, type]) => ({
  start: [year, month, parseInt(day), type === 'd' ? 7 : 19, 0],
  duration: { hours: 12, minutes: 0 },
  title: type === 'd' ? 'Denní' : 'Noční',
  description: '',
  location: 'Nemocnice na Bulovce',
  geo: { lat: 50.1156683, lon: 14.4640828 },
  status: 'CONFIRMED',
  busyStatus: 'BUSY'
})

const shiftEvents = shiftData
  .split(/[\n\r]+/)
  .filter(shift => !!shift)
  .map(shift => shift.match(/(\d{1,2})([dn])/).slice(1, 3))
  .map(shift => createShiftEvent(shift))

const {error, value} = ics.createEvents(shiftEvents)

writeFileSync(`${__dirname}/shifts.ics`, value)
