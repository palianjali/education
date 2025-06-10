import React from "react"
import "./price.css"
import Faq from "./Faq"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing