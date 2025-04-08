import React from 'react'
import Home from '../Pages/Home'
import Info from '../Pages/Info'
import About from '../Pages/About'
import TrainersSection from '../Pages/TrainersSection'
import Trainers from '../Pages/Trainers'
import PricingSection from '../Pages/PricingSection'

function Pages() {
  return (
    <div>
      <Home/>
      <Info/>
      <About/>
      <Trainers/>
      <PricingSection/>
      {/* <TrainersSection/> */}
    </div>
  )
}

export default Pages