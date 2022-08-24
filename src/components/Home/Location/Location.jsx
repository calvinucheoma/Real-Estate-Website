import React, { useEffect, useState } from 'react';
import Heading from '../../common/Heading/Heading';
import { location } from '../../data/Data';
import './Location.css';


const Location = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
        setIsMobile(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return (

    <>

        <section className="location padding">

            <div className="container">

                <Heading title='Explore By Location' subtitle='Lorem ipsum
                 dolor sit amet consectetur, adipisicing elit. Animi eos 
                 dolor quis eligendi praesentium, quae enim voluptatem, 
                 vel, perferendis reprehenderit provident facilis eaque 
                 deserunt obcaecati corporis ab cumque omnis pariatur!'/>

                <div className={isMobile <= 762 ? "content mtop" : "content grid3 mtop"}>
                    {location.map((items, index) => {
                        return (
                            <div className="box" key={index}>
                                <img src={items.cover} alt="cover pic" />
                                <div className="overlay">
                                    <h5>{items.name}</h5>
                                    <p>
                                        <label htmlFor="pic name">{items.Villas}</label>
                                        <label htmlFor="pic name">{items.Offices}</label>
                                        <label htmlFor="pic name">{items.Apartments}</label>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </section>

    </>

  )

};

export default Location;