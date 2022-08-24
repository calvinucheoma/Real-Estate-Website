import React from 'react';
import { footer } from '../../data/Data';
import './Footer.css';


const Footer = () => {

  return (

    <>

        <section className="footerContact">

            <div className="container">
                
                <div className="send flex">

                    <div className="text">
                        <h1> Do You Have Questions? </h1>
                        <p> We'll help you to grow your career and growth. </p>
                    </div>

                    <button className="btn5"> Contact Us Today </button>

                </div>

            </div>

        </section>

        <footer>

            <div className="container">

                <div className="box">

                    <div className="logo">

                        <img src="../images/logo-light.png" alt="logo" />
                        <h2>Do You Need Help With Anything? </h2>
                        <p>Receive updates, hot deals, discounts sent straight to your inbox every month</p>

                        <div className="input flex">
                            <input type="email" placeholder='Email Address' name='' id='' />
                            <button>Subscribe</button>
                        </div>

                    </div>

                </div>

                {footer.map((val, index) => {
                    return (
                        <div className="box" key={index}>
                            <h3>{val.title}</h3>
                            <ul>
                                {val.text.map((items, index) => {
                                    return (
                                        <li key={index}>{items.list}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}

            </div>

        </footer>

        <div className="legal">
            <span> &copy; 2022 RentUp. All Rights Reserved </span> 
        </div>

    </>

  )

};

export default Footer;