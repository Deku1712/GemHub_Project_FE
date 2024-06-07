import React, { useState } from 'react'
import Header from '../../../components/AdminComponent/Header'
import Money from '../../../assets/imgs/money.png'
import WidgetTodayMoney from '../../../components/AdminComponent/DashBoardComponent/WidgetTodayMoney'
import { CarouselDefault } from '../../../components/AdminComponent/DashBoardComponent/Carousel'
import ChartSale from '../../../components/AdminComponent/DashBoardComponent/Chart'
import { Table } from '../../../components/AdminComponent/DashBoardComponent/Table'
function DashBoard() {
  const [change, setChange] = useState(false)
  return (
    <div className=' pt-8'>
      <Header />
      <div className=' px-4 grid lg:grid-cols-4 grid-cols-2 gap-4'>
        <WidgetTodayMoney change = {change} setChange={setChange}/>
        
      </div>
      <div className=' px-4 mt-4 flex justify-between items-center'>
        <div className='w-full p-4 bg-white rounded-lg'>
          <ChartSale change = {change} setChange={setChange}/>
        </div>
        
      </div>
      <div className=' px-4 mt-4 flex justify-between items-center'>
        <Table change = {change} setChange={setChange}/>
      </div>
    </div>
  )
}

export default DashBoard