import React from 'react';
import Back from '../common/Back/Back';
import Heading from '../common/Heading/Heading';
import img from '../images/about.jpg';
import './About.css';


const About = () => {

  return (

    <>

        <section className="about">

            <Back name='About Us' title='About Us - Who We Are?' cover={img}/>

            <div className="container flex mtop">

                <div className="left row">

                    <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Incidunt blanditiis quidem error
                        modi, maiores amet. Ducimus consequuntur tempora 
                        ut nulla dolores placeat quo excepturi. Ducimus 
                        eaque soluta quae sit quidem?
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Incidunt blanditiis quidem error
                        modi, maiores amet. Ducimus consequuntur tempora 
                        ut nulla dolores placeat quo excepturi. Ducimus 
                        eaque soluta quae sit quidem?
                    </p>

                    <button className="btn2"> More About Us </button>

                </div>

                <div className="right row">
                    <img src="./immio.jpg" alt="" />
                </div>

            </div>

        </section>

    </>
    

  )

};

export default About;