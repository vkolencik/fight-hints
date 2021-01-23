const ics = require('ics')

export default function getShiftIcal() {

  const shiftData = [
    '1d',
    '4n',
    '5n',
    '6n',
    '9d',
    '10d',
    '14n',
    '15n',
    '18d',
    '19d',
    '20d',
    '23d',
    '25n',
    '27d',
    '28d',
    '29d',
    '31n',
  ]

  const month = 12
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
    .map(shift => shift.match(/(\d{1,2})([dn])/).slice(1, 3))
    .map(shift => createShiftEvent(shift))

  const { error, value } = ics.createEvents(shiftEvents)

  return value
}
