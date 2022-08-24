import React from 'react';
import Heading from '../../common/Heading/Heading';
import './Recent.css';
import RecentCard from './RecentCard';


const Recent = () => {

  return (

    <>

        <section className="recent padding">

            <div className="container">
                <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor 
                ]sit amet consectetur adipisicing elit. Magni error sequi dolorum 
                rem! Nemo, dolorum dicta error officia accusantium at modi maiores 
                perspiciatis non. Laboriosam a beatae dolore pariatur rem!' />
            </div>

            <RecentCard/>

        </section>
        
    </>

  )

};

export default Recent;