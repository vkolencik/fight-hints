const ics = require('ics')

function getShiftIcal () {
  const shiftData = [
    '1n',
    '2n',
    '5d',
    '6n',
    '9d',
    '10d',
    '22d',
    '23n',
    '26n',
    '28d',
    '29n'
  ]

  const month = 6
  const year = 2022

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

  if (error) {
    throw error
  }

  return value
}

module.exports = getShiftIcal
