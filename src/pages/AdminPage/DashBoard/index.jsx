import React from 'react'
import Header from '../../../components/AdminComponent/Header'
import Money from '../../../assets/imgs/money.png'
import WidgetTodayMoney from '../../../components/AdminComponent/DashBoardComponent/WidgetTodayMoney'
import { CarouselDefault } from '../../../components/AdminComponent/DashBoardComponent/Carousel'
import ChartSale from '../../../components/AdminComponent/DashBoardComponent/Chart'
import { Table } from '../../../components/AdminComponent/DashBoardComponent/Table'
function DashBoard() {
  return (
    <div className=' pt-8'>
      <Header />
      <div className=' px-4 grid lg:grid-cols-4 grid-cols-2 gap-4'>
        <WidgetTodayMoney/>
        <WidgetTodayMoney/>
        <WidgetTodayMoney/>
        <WidgetTodayMoney/>
      </div>
      <div className=' px-4 mt-4 flex justify-between items-center'>
        <div className='w-7/12 p-4 bg-white rounded-lg'>
          <ChartSale/>
        </div>
        <div className=' w-4/12 p-4 bg-green-50 rounded-lg'>
          <CarouselDefault/>
        </div>
      </div>
      <div className=' px-4 mt-4 flex justify-between items-center'>
        <Table/>
      </div>
    </div>
  )
}

export default DashBoard