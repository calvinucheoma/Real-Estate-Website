import React from 'react';
import Back from '../common/Back/Back';
import FeaturedCard from '../Home/Featured/FeaturedCard';
import img from '../images/services.jpg';
import './Services.css';


const Services = () => {

  return (

    <>

        <section className="services mb">

            <Back name='Services' title='Services - All Services' cover={img} />

            <div className="featured container">
                <FeaturedCard />
            </div>

        </section>

    </>

  )

};

export default Services;