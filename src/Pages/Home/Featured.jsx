import React from 'react';
import SectionTitle from '../../components/SectionTitle'
import featuredImg from '../../assets/home/featured.jpg'
import './featuredItem.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-10 my-20 text-white '>
            <SectionTitle heading ={"FROM OUR MENU"} subHeading ={"Check It Out"} ></SectionTitle>
            <div className='bg-slate-400 bg-opacity-40 md:flex pb-20 pt-12 px-36 justify-center items-center'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 space-y-2'>
                    <p>March 20, 2023</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-2'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;