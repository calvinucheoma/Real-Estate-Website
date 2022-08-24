import React from 'react';
import Header from '../common/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../common/Footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';


const Pages = () => {

  return (

    <>

        <Router>

            <Header/>
            

            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='about' element={<About/>} />
                <Route path='services' element={<Services/>} />
                <Route path='blog' element={<Blog/>} />
                <Route path='pricing' element={<Pricing/>} />
                <Route path='contact' element={<Contact/>} />

            </Routes>

            <Footer/>

        </Router>

        

    </>

  )

};

export default Pages;