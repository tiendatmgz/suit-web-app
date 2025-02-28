import React, { useEffect, useState } from "react";
import hero_img1 from '../assets/image/hero_img1.jpg';
import hero_img2 from '../assets/image/hero_img2.jpg';
import hero_img3 from '../assets/image/hero_img3.jpg';

import servicesData from '../data/servicesData.js';
const Hero3 = () => {

    return (
        <section className="w-full bg-black text-white flex-col p-16">
            <h1 className="uppercase text-5xl font-bold text-center py-16">dịch vụ</h1>
            <div className="flex h-full w-full pb-16 px-16 justify-center items-center gap-8">
                {servicesData.map((service, index) => (
                    <div key={index} className="w-full h-full">
                        <img src={service.image} className='w-full' alt={`Service ${index + 1}`} />
                        <div className="w-full aspect-video bg-white text-black">
                            <h3 className="text-2xl font-medium p-4">{service.title}</h3>
                            <a className="p-4"><span>Xem chi tiết</span></a>
                        </div>
                    </div>
                ))}
                {/* <div className="w-full h-full">
                    <img src={hero_img5} className='w-full'></img>
                    <div className="w-full aspect-video bg-white">
                    </div>
                </div>
                <div className="w-full h-full">
                    <img src={hero_img6} className='w-full'></img>
                    <div className="w-full aspect-video bg-white"></div>
                </div>
                <div className="w-full h-full">
                    <img src={hero_img7} className='w-full'></img>
                    <div className="w-full aspect-video bg-white"></div>
                </div> */}
            </div>
        </section>
    );
};
export default Hero3;