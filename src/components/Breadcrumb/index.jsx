import React from 'react'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export default function ComponentBreadCum() {
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-white px-3 py-3 text-brown font-SFUFuturaHeavy text-sm ">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Bài Viết</Breadcrumb.Item>
      <Breadcrumb.Item></Breadcrumb.Item>
    </Breadcrumb>
  )
}
