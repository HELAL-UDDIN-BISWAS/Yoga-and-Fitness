import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Yoga from '../../components/Yoga/Yoga';

const Home = () => {
    const yoga = useLoaderData()
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='grid lg:grid-cols-2 gap-9'>
                {
                    yoga.map((yoga)=><Yoga key={yoga.id} yoga={yoga}></Yoga>)
                }
            </div>
            <div></div>
        </div>
    );
};

export default Home;