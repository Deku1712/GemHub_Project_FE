/* eslint-disable react/prop-types */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { formatCurrencyVND } from '../../api/function'



export default function ProductQuickView({ product, quickView, setQuickView }) {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={quickView} >
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setQuickView(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-100 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen  overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 translate-y-0"
              leave="transform transition ease-in duration-400"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-full"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[768px] lg:max-w-[1024px]">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 sm:flex sm:items-start gap-2">
                  <div className=' sm:basis-1/2  px-2'>
                    <img src={product.imgs[0].imgUrl} alt="" className=' w-full h-full object-cover' />
                  </div>
                  <div className=' sm:basis-1/2  px-2'>
                    <h3 className=' font-PlayFair text-[25px] font-semibold text-nowrap tracking-wide uppercase mb-2'>{product.productName}</h3>
                    <p className=' font-Montserrat  font-semibold text-lg mb-4'>
                      {/* $85.00 <span className=' ml-2 text-sm text-[#727272] font-Montserrat font-semibold '> $25.00 </span> */}
                      {formatCurrencyVND(product.productPrice)}
                    </p>
                    <p className=' text-sm font-DroidSerifRegular text-[#727272] mb-4'>
                      {product.productDescription}
                    </p>

                    <div className="relative h-10 w-full min-w-[200px] mb-7">
                    <div className=' text-start mb-2'>
                        <h2 className=' text-sm font-semibold'>
                          Khu vực khai thác
                        </h2>
                        <span className=' pl-2 text-sm text-[#727272]'>
                          {product.theOrigin}
                        </span>
                      </div>
                      <div className=' text-start mb-2'>
                        <h2 className=' text-sm font-semibold'>
                          Thành Phần
                        </h2>
                        <span className=' pl-2 text-sm text-[#727272]'>
                          {product.component}
                        </span>
                      </div>
                      <div className=' text-start mb-2'>
                        <h2 className=' text-sm font-semibold'>
                          Độ cứng
                        </h2>
                        <span className=' pl-2 text-sm text-[#727272]'>
                          {product.stiffness}
                        </span>
                      </div>
                    </div>


                  </div>
                </div>


                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setQuickView(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
