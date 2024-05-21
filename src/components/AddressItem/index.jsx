import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from 'flowbite-react';
import manage from '../../service/manage';

function AddressItem(props) {
  const { address, setListAddress } = props
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging, // Add this to detect dragging state
  } = useSortable({ id: address.id });

  const dndAddressKit = {
    transform: CSS.Translate.toString(transform),
    transition
  };

  const makeDefault = async (id) => {
    try {
      const res = await manage.makeDefault(id);
      setListAddress(res.data)
    } catch (error) {
      console.error(error);
    }
    console.log('id ne: ', id);
  };

  return (
    <div
      // ref={setNodeRef}
      // style={dndAddressKit}
      // {...attributes}
      // {...listeners}
      key={address.id}
      className='py-2 px-2 border rounded-lg flex flex-row justify-between items-center font-mono shadow-md hover:-translate-y-3 hover:translate-x-2 transition-all ease-in-out hover:drop-shadow-lg'
    >
      <div>
        <p>Họ Tên: {address.name}</p>
        <p>Số Điện thoại : {address.phone}</p>
        <p>Địa chỉ: {address.address}</p>
        <p>Chú thích: {address.description}</p>
      </div>
      <div>
        {!JSON.parse(address.status) ? (
          <Button
            className='bg-brown hover:opacity-75'
            onClick={(e) => {
              if (!isDragging) {
                makeDefault(address.id);
              }
            }}
          >
            Làm mặc định
          </Button>
        ) : (
          <p className='text-gray text-center'>Mặc định</p>
        )}
      </div>
    </div>
  );
}

export default AddressItem;
