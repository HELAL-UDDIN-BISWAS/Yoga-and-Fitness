import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerCard = ({card}) => {
    const {image,id,name,description,aos}=card || {}
    console.log(card)
    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    return (
        <div data-aos={aos}  className="card w-96  bg-base-100 shadow-xl">
        <figure><img className='h-28' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className=" text-2xl font-bold text-center">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
           
          </div>
        </div>
      </div>
    );
};

export default BannerCard;