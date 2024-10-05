import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const Category = [
  "Front-end Developer",
  "Full stack Developer",
  "Mern Stack Developer",
  "Data Science",
  "Ai Engineer"
]
const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="max-w-xl mx-auto my-20">
        <CarouselContent>
          {
            Category.map((cat,index)=>(
              <CarouselItem className="md:basis-1/2 lg:basic-1/3" ><Button variant="outline" className="rounded-full">{cat}</Button></CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default CategoryCarousel