import React, { useEffect, useState } from 'react'
import ComponentBreadCum from '../../components/Breadcrumb'
import { Select, Option } from '@material-tailwind/react'
import { Button, TextInput, Textarea } from 'flowbite-react'
import manage from '../../service/manage'
import { DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { arrayMove } from '@dnd-kit/sortable'
import AddressItem from '../../components/AddressItem'
function AddressPage() {
  const host = 'https://provinces.open-api.vn/api/'

  const [listAddress, setListAddress] = useState([])
  const [province, setProvince] = useState()
  const [city, setCity] = useState()
  const [ward, setWard] = useState()
  const [btnAdd, setBtnAdd] = useState(false)
  const [addressDto, setAddressDto] = useState({
    name: '',
    phone: '',
    address: '',
    description: '',
    province: '',
    city: '',
    warp: ''
  })
  const resetAddressDto = () => {
    setAddressDto({
      name: '',
      phone: '',
      address: '',
      description: '',
      province: '',
      city: '',
      warp: ''
    })
  }

  const fetchData = async () => {
    try {
      const response = await manage.getAddress()
      setListAddress(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const addAddress = async () => {
    try {
      const response = await manage.addAddress(addressDto)
      if (response) {
        resetAddressDto()
        setBtnAdd(false)
        await fetchData()  // Fetch the updated list of addresses
      }
    } catch (error) {
      console.error('Error adding address:', error)
    }
  }

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
      const oldIndex = listAddress.findIndex((item) => item.id === active.id)
      const newIndex = listAddress.findIndex((item) => item.id === over.id)

      setListAddress((listAddress) => arrayMove(listAddress, oldIndex, newIndex))
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='mb-8'>
      <div className='relative w-full max-h-[500px] pt-4 mb-4 overflow-hidden'>
        <img src="src\assets\imgs\BannerGemHub1.png" alt="" />
      </div>
      <div className='max-w-[1080px] mx-auto'>
        <ComponentBreadCum />
        <div>
          <div className='title font-SFUFuturaBold text-start mb-4'>
            <a className='text-[15px] pr-2' href="">Thông tin tài khoản</a>
            <p className='text-sm my-4'> Sổ Địa Chỉ</p>
          </div>
          {!btnAdd &&
            <div className=' flex flex-col gap-y-5'>
              <DndContext onDragEnd={handleDragEnd}>
                <SortableContext items={listAddress.map((address) => address.id)} strategy={verticalListSortingStrategy}>
                  {listAddress.map((address) => (
                    <AddressItem key={address.id} address={address} setListAddress={setListAddress} />
                  ))}
                </SortableContext>
              </DndContext>
            </div>
          }

          <div className=' my-4'>
            <Button className=' bg-brown  hover:opacity-75' onClick={() => setBtnAdd(!btnAdd)}>{!btnAdd ? 'Thêm địa chỉ' : 'Quay lại danh sách'}</Button>
          </div>


          {btnAdd && <div className=' py-4 px-2 border flex flex-col w-full text-start'>
            <div className='flex flex-col gap-y-4 mt-4'>
              <label>Họ Tên</label>
              <TextInput type='Text' required onChange={(e) => setAddressDto({ ...addressDto, name: e.target.value })} />
            </div>
            <div className='flex flex-col gap-y-4 mt-4'>
              <label>Số điện thoại</label>
              <TextInput type='text' pattern='/(84|0[3|5|7|8|9])+([0-9]{8})\b/g' required onChange={(e) => setAddressDto({ ...addressDto, phone: e.target.value })} />
            </div>
            <div className='flex flex-col gap-y-4 mt-4 '>
              <label>Địa chỉ</label>
              <TextInput type='Text' required onChange={(e) => setAddressDto({ ...addressDto, address: e.target.value })} />
            </div>
            <div className='flex flex-col gap-y-4 mt-4 '>
              <label>Location</label>
              <div className=' flex gap-4'>
                <Select label="Tỉnh">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
                <Select label="Thành Phố">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
                <Select label="Phường">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>
            <div className='flex flex-col gap-y-4 mt-4'>
              <label>Chú Thích</label>
              <Textarea onChange={(e) => setAddressDto({ ...addressDto, description: e.target.value })} />
            </div>
            <div className=' flex justify-end items-center'>
              <Button className=' float-right  w-[10%] mt-4 bg-brown text-center' onClick={addAddress}>Thêm Địa Chỉ</Button>
            </div>
          </div>}


        </div>
      </div>
    </div>
  )
}

export default AddressPage