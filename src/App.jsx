import React, { h, render } from 'preact'
import getShiftIcal from './shifts'
import { encode } from 'js-base64'

const App = () =>
  <main>
    <strong>Happy 😎</strong>
    <a href={`data:text/calendar;base64,${encode(getShiftIcal())}`}>Shift data</a>
  </main>

export default App
