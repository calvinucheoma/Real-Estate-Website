import React, {useState, useEffect} from 'react';
import Heading from '../../common/Heading/Heading';
import { team } from '../../data/Data';
import './Team.css';



const Team = () => {

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

        <section className="team background">
            <div className="container">

                 <Heading title='Our Featured Agents' subtitle='Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Veritatis
                  itaque minima tenetur modi, blanditiis aut rerum quam,
                  vel cumque iusto doloribus optio aspernatur labore voluptatum
                  mollitia esse et alias animi.' />

                <div className={isMobile <= 762 ? "content mtop" : "content grid3 mtop"}>
                    {team.map((val, index) => {
                        return (
                            <div className="box" key={index}>

                                <button className='btn3'>
                                    {val.list} Listings
                                </button>

                                <div className="details">

                                    <div className="img">
                                        <img src={val.cover} alt="team cover pic" />
                                        <i className="fa fa-circle-check"></i>
                                    </div>

                                    <i className="fa fa-location-dot"></i>
                                    <label htmlFor="Team Address">{val.address}</label>
                                    <h4>{val.name}</h4>

                                    <ul>
                                        {val.icon.map((icon, index) => (
                                                <li key={index}> {icon} </li>        
                                        ))}
                                    </ul>

                                    <div className="button flex">
                                        <button>
                                            <i className="fa fa-envelope"></i>
                                            Message
                                        </button>
                                        <button className='btn4'>
                                            <i className="fa fa-phone-alt"></i>
                                        </button>                                       
                                    </div>
                                    
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

export default Team;