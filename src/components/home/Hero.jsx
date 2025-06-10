import React from 'react'
import './hero.css'
import Title from '../common/title/Title'
const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO ACDEMIA' title='Best Online Education'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus deserunt facere quisquam, repudiandae molestias blanditiis tempora provident a, voluptatibus ducimus nemo totam magnam? Necessitatibus suscipit amet dolores nobis quaerat?</p>
                <div className="button">
                    <button className='primary-btn'>
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>

                    <button>
                       VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
    
    <div className="margin">

    </div>
    </>
  )
}

export default Hero
