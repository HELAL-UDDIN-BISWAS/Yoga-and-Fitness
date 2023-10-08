import React from 'react';

const Bodyfitness = ({bodyfitness}) => {
    const {image,long_description,name} =bodyfitness ||{}
    return (
     <div>
      <img className='w-full h-96 my-5' src={image} alt="" />
      <h3 className='text-black'>{long_description}</h3>
     </div>
    );
};

export default Bodyfitness;