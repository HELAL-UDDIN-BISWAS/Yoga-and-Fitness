import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Yoga = ({ yoga }) => {
    const { image, title, aos, id,short_description } = yoga || {}
    // console.log(yoga)
    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    return (
        <div data-aos={aos} className="card lg:card-side bg-base-100 shadow-xl mx-auto">
            <figure><img className='h-60' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/fitness/${id}`}>
                        <button className="btn btn-primary">Listen</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Yoga;