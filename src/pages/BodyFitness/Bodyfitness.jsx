import React from 'react';

const Bodyfitness = ({bodyfitness}) => {
    const {image,long_description,name} =bodyfitness ||{}
    return (
     <div>
      <img className='w-full h-96 my-5' src={image} alt="" />
      <h2 className='mb-3 text-3xl font-bold '>{name}</h2>
      <h3 className='text-black'>{long_description}</h3>
     </div>
    );
};

export default Bodyfitness;