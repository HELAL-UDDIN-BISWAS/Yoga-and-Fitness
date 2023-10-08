import React, { useEffect, useState } from 'react';
import image from "../../image/Yoga3.png"
import BannerCard from './BannerCard';

const Banner = () => {
   const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('/card.json')
        .then(res=>res.json())
        .then(result=>setdata(result))
    },[])
    // console.log(data)
    return (
        <div className=' '>
            <div className=' relative'>
                <img className='w-full h-80 z-10' src={image} alt="" />
                <div className=' absolute top-0 left-0 w-full h-full bg-[#0c0a054d]'></div>
            </div>
            <h2 className='text-blue-950 text-center text-4xl m-7 '>Yoga And Fitness Detill
            </h2>
            <hr className='bg-black w-2/5 mx-auto' />
            <div className='lg:flex text-center justify-center gap-3 my-16 mx-auto'>
            {
            data?.map(card=> <BannerCard key={card.id} card={card} ></BannerCard>)
            }
            </div>
          
        </div>

    );
};

export default Banner;