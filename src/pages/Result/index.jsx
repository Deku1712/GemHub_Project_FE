import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/joy/CircularProgress'
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'flowbite-react'


function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function Result() {
  const navigate = useNavigate()
  const [progress, setProgress] = React.useState(0)
  const query = useQuery()
  const paymentStatus = query.get('paymentStatus')

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? prevProgress : prevProgress + 10))
    }, 30)

    return () => {
      clearInterval(timer)
    }
  }, [])
  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 10000);
  })

  return (
    <div className=' mb-2 px-6 py-4 h-[100vh] flex justify-center items-center bg-white  shadow-md '>
      {paymentStatus == 1?
        <div className=' flex flex-col gap-y-2 justify-center items-center animate-transheader'>
          <CircularProgress color='success' size='lg' determinate value={progress}>
            <FontAwesomeIcon className=' text-3xl' icon={faCheck} />
          </CircularProgress>
          <div className=''>
            <h1 className=' px-4 text-brown text-3xl font-SFUFuturaBoldOblique  text-center'>Thank You</h1>
            <h1 className=' px-4 text-brown text-3xl font-SFUFuturaBoldOblique text-center '>for your purchase</h1>
          </div>
        </div>
        :
        <div className=' flex flex-col gap-y-2 justify-center items-center animate-transheader'>
          <CircularProgress color='danger' size='lg' determinate value={progress}>
            <FontAwesomeIcon className=' text-3xl' icon={faClose} />
          </CircularProgress>
          <div className=''>
            <h1 className=' px-4 text-brown text-3xl font-SFUFuturaBoldOblique  text-center'>There was a payment error</h1>
            <h1 className=' px-4 text-brown text-3xl font-SFUFuturaBoldOblique text-center '>Sorry about this problem.</h1>
          </div>
        </div>}

    </div >
  )
}

export default Result