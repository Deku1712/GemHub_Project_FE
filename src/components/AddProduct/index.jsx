import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Radio } from '@material-tailwind/react'
import axios from 'axios'
function AddProduct(props) {
  const { show, setShow, onAdd } = props
  const cancelButtonRef = useRef(null)

  const preset_key = 'ewxqah9d'
  const cloud_name = 'dycsfoejy'

  const [formData, setFormData] = useState({
    id: '',
    productName: '',
    productType: '',
    productQuantity: '',
    productPrice: '',
    productDescription: '',
    theOrigin: '',
    component: '',
    stiffness: '',
    matchingDestiny: '',
    healthEffects: '',
    preserve: '',
    limited: false,
    imgs: []
  })


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = () => {
    onAdd(formData)
    setShow(false)
  }
  const handleFile = async (e) => {
    const file = e.target.files[0]

    const dataFile = new FormData()
    dataFile.append('file', file)
    dataFile.append('upload_preset', preset_key)
    const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, dataFile)
    if (res && res.status === 200) {
      setFormData((prevData) => ({
        ...prevData,
        imgs: [{ ...prevData.imgs[0], imgUrl: res.data.secure_url }]
      }))
    }
  }

  console.log(formData)


  return (
    <Transition.Root show={show}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={() => setShow(false)}>
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

        <div className="fixed inset-0 z-10">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-500"
              enterFrom="opacity-0 -translate-y-full"
              enterTo="opacity-100 translate-y-0"
              leave="transform transition ease-in duration-400"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-full"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-[768px] lg:max-w-[1024px] max-h-[90vh] overflow-y-auto">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 sm:flex sm:items-start gap-2">
                  <div className='sm:basis-1/2 flex flex-col gap-y-2 px-2'>
                    {formData.imgs.length > 0 && (
                      <img src={formData.imgs[0].imgUrl} alt="" className='w-full h-full object-cover' />
                    )}
                    <input type="file" placeholder='update image' onChange={handleFile} />
                    <div>
                      <h2 className='text-sm font-semibold'>Tên sản phẩm</h2>
                      <h3 className='font-PlayFair text-[25px] font-semibold text-nowrap tracking-wide uppercase mb-2'>
                        <input
                          type="text"
                          name="productName"
                          value={formData.productName}
                          onChange={handleChange}
                          className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </h3>
                    </div>
                    <div>
                      <h2 className='text-sm font-semibold'>Loại sản phẩm</h2>
                      <h3 className='font-PlayFair text-[25px] font-semibold text-nowrap tracking-wide uppercase mb-2'>
                        <input
                          type="text"
                          name="productType"
                          value={formData.productType}
                          onChange={handleChange}
                          className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </h3>
                    </div>
                    <div>
                      <h2 className='text-sm font-semibold'>Số lượng sản phẩm</h2>
                      <p className='font-Montserrat font-semibold text-lg mb-4'>
                        <input
                          type="number"
                          name="productQuantity"
                          value={formData.productQuantity}
                          onChange={handleChange}
                          className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </p>
                    </div>
                    <div>
                      <h2 className='text-sm font-semibold'>Giá sản phẩm</h2>
                      <p className='font-Montserrat font-semibold text-lg mb-4'>
                        <input
                          type="number"
                          name="productPrice"
                          value={formData.productPrice}
                          onChange={handleChange}
                          className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </p>
                    </div>

                  </div>
                  <div className='sm:basis-1/2 px-2'>


                    <div>
                      <h2 className='text-sm font-semibold'>Chi tiết sản phẩm</h2>
                      <p className='text-sm font-DroidSerifRegular text-[#727272] mb-4'>
                        <textarea
                          name="productDescription"
                          value={formData.productDescription}
                          onChange={handleChange}
                          className="border-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </p>
                    </div>


                    <div className="relative h-auto w-full min-w-[200px] mb-7">
                      <div className='text-start mb-2'>
                        <h2 className='text-sm font-semibold'>Khu vực khai thác</h2>
                        <input
                          type="text"
                          name="theOrigin"
                          value={formData.theOrigin}
                          onChange={handleChange}
                          className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </div>
                      <div className='text-start mb-2'>
                        <h2 className='text-sm font-semibold'>Thành Phần</h2>
                        <input
                          type="text"
                          name="component"
                          value={formData.component}
                          onChange={handleChange}
                          className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </div>
                      <div className='text-start mb-2'>
                        <h2 className='text-sm font-semibold'>Độ cứng</h2>
                        <input
                          type="text"
                          name="stiffness"
                          value={formData.stiffness}
                          onChange={handleChange}
                          className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </div>
                      <div className='text-start mb-2'>
                        <h2 className='text-sm font-semibold'>Mệnh phù hợp</h2>
                        <input
                          type="text"
                          name="matchingDestiny"
                          value={formData.matchingDestiny}
                          onChange={handleChange}
                          className="border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </div>
                      <div className='text-start mb-2'>
                        <h2 className='text-sm font-semibold'>Bảo quản</h2>
                        <textarea
                          name="preserve"
                          value={formData.preserve}
                          onChange={handleChange}
                          className="border-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </div>
                      <div className='text-start mb-2'>
                        <h2 className='text-sm font-semibold'>Tác dụng sức khỏe</h2>
                        <textarea
                          name="healthEffects"
                          value={formData.healthEffects}
                          onChange={handleChange}
                          className="border-2 border-gray-300 focus:border-blue-500 outline-none w-full"
                        />
                      </div>
                      <div className='text-start mb-2'>
                        <h2 className='text-sm font-semibold'>Sản phẩm giới hạn</h2>
                        <div className="flex gap-10">
                          <Radio
                            name="limited"
                            label="Có"
                            checked={formData.limited}
                            onChange={() => setFormData(prevData => ({ ...prevData, limited: true }))}
                          />
                          <Radio
                            name="limited"
                            label="Không"
                            checked={!formData.limited}
                            onChange={() => setFormData(prevData => ({ ...prevData, limited: false }))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6  gap-x-4">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:mt-0 sm:w-auto"
                    onClick={handleSubmit}
                  >
                                        Add Product
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setShow(false)}
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

export default AddProduct
