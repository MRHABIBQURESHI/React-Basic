import React from 'react'
// import { useState } from 'react'
import './App.css'
import Mobiles from './Components/Mobiles'
import Header from './Components/Header'


function App() {
  return (
    <div>
      <div>
        <Header  name = {'Mobile-Hub'}/>
        <Mobiles name = {'Mobile-Hub'}/>
      </div>
    </div>
  )
}

export default App