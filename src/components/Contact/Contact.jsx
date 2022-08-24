import React from 'react';
import Back from '../common/Back/Back';
import img from '../images/pricing.jpg';
import './Contact.css';



const Contact = () => {

  return (

    <>

        <section className="contact mb">

            <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />

            <div className="container">

                <form action="" className='shadow'>

                    <h4> Fill Up The Form </h4>

                    <div>
                        <input type="text" placeholder='Name' name='' id='' />
                        <input type="email" placeholder='Email' name='' id='' />
                    </div>

                    <input type="text" placeholder='Subject' name="" id="" />

                    <textarea name="" id="" cols="30" rows="10"></textarea>

                    <button> Submit Request </button>
                </form>

            </div>

        </section>

    </>

  )

};

export default Contact;