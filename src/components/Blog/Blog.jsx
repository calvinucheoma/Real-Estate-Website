import React from 'react';
import Back from '../common/Back/Back';
import RecentCard from '../Home/Recent/RecentCard';
import img from '../images/about.jpg';
import './Blog.css';



const Blog = () => {

  return (

    <>
        <section className="blog-out mb">

            <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />

            <div className="container recent">
                <RecentCard />
            </div>

        </section>
    </>

  )

};

export default Blog;