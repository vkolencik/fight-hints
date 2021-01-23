import React, { h, render } from 'preact'
import App from './App'

window.onload = () => {
  render(<App/>, document.getElementById('app'))
}
