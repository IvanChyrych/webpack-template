// import cover from './images/download.png'
// import './style.scss'

// const title = '<h1>hello!</h1>'

// document.body.innerHTML = `<img src='${cover}'/>` +title

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

const rootElement = document.querySelector('#root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)