import React from 'react'
import Carousel from '../../components/Carousel'
import About from '../../components/About'
import Slogan from '../../components/Slogan'
import About2 from '../../components/About2'
import BestSeller from '../../components/BestSeller'
import Blog from '../../components/Blog'
import AboutGemHub from '../../components/AboutGemHub'
import Feedback from '../../components/FeedBack'


export default function HomePage() {
  return (
    <div>
      <Carousel />
      <div className=' max-w-screen-cus mx-auto'>
        <About/>
        <Slogan/>
        <About2/>
        <BestSeller/>
        <Blog/>
        <AboutGemHub/>
        <Feedback/>
        
      </div>
    </div>
  )
}
