import React from 'react'
import Money from '../../../../assets/imgs/money.png'
function WidgetTodayMoney() {
  return (
    <div className='  p-4 rounded-lg flex items-start justify-between bg-white'>
      <div className=' flex flex-col  text-start gap-y-2'>
        <h2 className=' text-[#72798e]  uppercase font-SFUFuturaBold'>Today's Money</h2>
        <span className=' text-black font-semibold mb-2 '>
                            53000 VND
        </span>
        <span>
                            +55% since yesterday
        </span>
      </div>
      <div className=' ml-4 p-2 border rounded-full bg-green-200'>
        <img className=' w-10 h-10 object-cover' src={Money} alt='icon money'/>
      </div>

    </div>
  )
}

export default WidgetTodayMoney