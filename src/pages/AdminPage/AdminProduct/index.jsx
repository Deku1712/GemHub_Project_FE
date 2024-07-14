import React, { useEffect, useState } from 'react'
import manage from '../../../service/manage'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Avatar, Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react'
import { formatCurrencyVND } from '../../../api/function'
import ModifyProduct from '../../../components/ModifyProduct'
import { Button } from 'flowbite-react'
import AddProduct from '../../../components/AddProduct'

const TABLE_HEAD = ['Image && Name Product ', 'Product Type', 'Price', 'Quantity', 'Create At', 'Update At', '']

function AdminProduct() {

  const [editProduct, setEditProduct] = useState()
  const [show, setShow] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [products, setProducts] = useState()
  const fetchData = async () => {
    try {
      const response = await manage.getProduct()
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching product:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleEdit = (product) => {
    setEditProduct(product)
    setShow(true)
  }
  const handleDelete = async (product) => {
    const res = await manage.deleteProduct(product)
    if(res.status == 200) {
      fetchData()
    }
  }
  const onUpdate = async (formData) => {
    const res = await manage.updateProduct(formData)
    if (res) {
      fetchData()
    }
  }
  const onAdd = async (formData) => {
    const res = await manage.addProduct(formData)
    if (res) {
      fetchData()
    }
  }
  return (
    <div className=' bg-white mt-4 rounded-md p-2 '>
      <AddProduct show = {showAdd} setShow = {setShowAdd} onAdd ={onAdd} />
      <div className=' flex justify-between items-center'>
        <h1 className=' px-2 text-lg font-SFUFuturaBold text-start mb-6 '>
                Manage Products
        </h1>
        <Button className='font-SFUFuturaBold bg-brown' onClick={() => setShowAdd(true)}>Add Product</Button>
      </div>
      <div className=' w-full'>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products && products.map(
              (
                product,
                index
              ) => {
                const isLast = index === products.length - 1
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50'

                return (
                  <tr key={product.id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={product.imgs[0].imgUrl}
                          alt={product.productName}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {product.productName}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {product.productType}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatCurrencyVND(product.productPrice)}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={product.productQuantity}
                          color='green'
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {product.createTime}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {product.updateTime}
                      </Typography>
                    </td>
                    <td className={classes} >
                      <Tooltip content="Edit Product">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" onClick={() => handleEdit(product)} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete Product">
                        <IconButton variant="text">
                          <TrashIcon className="h-4 w-4" onClick={() => handleDelete(product)} />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
      {editProduct && <ModifyProduct product={editProduct} show ={show} setShow = {setShow} onUpdate = {onUpdate}/>}
    </div>
  )
}

export default AdminProduct