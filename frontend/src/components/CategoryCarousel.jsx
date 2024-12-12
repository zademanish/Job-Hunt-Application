import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'

const Category = [
  "Front-end Developer",
  "Full stack Developer",
  "Mern Stack Developer",
  "Data Science",
  "Ai Engineer"
]
const CategoryCarousel = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchJobHandler = (query)=>{
    dispatch(setSearchedQuery(query));
    navigate("/browse")
  }
  return (
    <div className='hidden md:block'>
      <Carousel className="md:max-w-lg mx-auto my-20">
        <CarouselContent>
          {
            Category.map((cat,index)=>(
              <CarouselItem className="md:basis-1/2 lg:basic-1/3" key={index}><Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full bg-purple-200">{cat}</Button></CarouselItem>
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