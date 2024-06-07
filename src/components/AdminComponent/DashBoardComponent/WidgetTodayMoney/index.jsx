import React, { useEffect, useState } from 'react'
import Money from '../../../../assets/imgs/money.png'
import manage from '../../../../service/manage'
import { formatCurrencyVND } from '../../../../api/function'


function WidgetTodayMoney({ change, setChange }) {

  const [total, setTotal] = useState()

  const fetchTotal = async() => {
    try {
      const response = await manage.getTodayIncome()
      console.log(response.data)
      setChange(false)
      setTotal(response.data)
    } catch (error) { /* empty */ }

  }
  useEffect(()=> {
    fetchTotal()
  },[change])


  return (
    <div className='  p-4 rounded-lg flex items-start justify-between bg-white'>
      <div className=' flex flex-col  text-start gap-y-2'>
        <h2 className=' text-[#72798e]  uppercase font-SFUFuturaBold'>Doanh thu hôm nay</h2>
        <span className=' text-black font-semibold mb-2 '>
          {formatCurrencyVND(total)}
        </span>
      </div>
      <div className=' ml-4 p-2 border rounded-full bg-green-200'>
        <img className=' w-10 h-10 object-cover' src={Money} alt='icon money'/>
      </div>

    </div>
  )
}

export default WidgetTodayMoney