import React from 'react';
import Heading from '../../common/Heading/Heading';
import './Price.css';
import PriceCard from './PriceCard';


const Price = () => {

  return (

    <>

        <section className="price padding">

            <div className="container">

                <Heading title='Select Your Package' subtitle='Lorem ipsum
                 dolor sit amet consectetur adipisicing elit. Veniam rem 
                 voluptatum aliquid inventore, cupiditate quia iste 
                 similique dolore eum omnis. Culpa quod aliquid dicta 
                 aspernatur alias ad quisquam molestias veniam!' />

                 <PriceCard />

            </div>

            

        </section>

    </>
  )

};

export default Price;