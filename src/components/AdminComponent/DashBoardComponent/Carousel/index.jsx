import { Carousel } from '@material-tailwind/react'
import img1 from '../../../../assets/imgs/LogoGemHub.png'

export function CarouselDefault() {
  return (
    <Carousel className="  w-full h-full rounded-xl">
      <img
        src={img1}
        alt="image 1"
        className=" object-cover"
      />
        <img
        src={img1}
        alt="image 1"
        className=" object-cover"
      />
      <img
        src={img1}
        alt="image 1"
        className=" object-cover"
      />
    </Carousel>
  )
}