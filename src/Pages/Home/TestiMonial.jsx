import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

const TestiMonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`reviews.json`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    console.log(reviews)
    return (
        <div className='my-20'>
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className='flex mx-24 flex-col items-center m-24'>
                                    <Rating
                                        readOnly
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        
                                    />
                                    <p className='py-8'>{review?.details}</p>
                                    <h3 className='text-2xl text-[#BB8506]'>{review.name}</h3>
                                </div>

                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>

    );
};

export default TestiMonial;