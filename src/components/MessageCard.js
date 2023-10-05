import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';

import 'swiper/swiper-bundle.css'; // Import Swiper CSS

const SwiperComponent = () => {
    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container', {
            // Optional Swiper options:
            direction: 'horizontal',
            loop: true,

            // If you need pagination:
            pagination: {
                el: '.swiper-pagination',
            },

            // If you need navigation buttons:
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // Clean up Swiper instance when the component unmounts
        return () => {
            mySwiper.destroy();
        };
    }, []);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide"><img src="/banner/1.avif" alt="" className='w-full h-32' /></div>
                <div className="swiper-slide"><img src="/banner/2.avif" alt=""  className='w-full h-32'/></div>
                <div className="swiper-slide"><img src="/banner/3.avif" alt=""  className='w-full h-32'/></div>
                {/* Add more slides as needed */}
            </div>

            {/* If you need pagination */}
            {/* <div className="swiper-pagination"></div> */}

            {/* If you need navigation buttons
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
        </div>
    );
};

export default SwiperComponent;
