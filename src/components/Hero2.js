import React from 'react';
import hero_img1 from '../assets/image/hero_img1.jpg';
import hero_img2 from '../assets/image/hero_img2.jpg';
import hero_img3 from '../assets/image/hero_img3.jpg';
import hero_img4 from '../assets/image/hero_img4.jpg';



const Hero2 = () => {
    return (
        <section className='text-white'>
            <div className='overflow-hidden relative '>
                <img src={hero_img1} className=''></img>
                <div className='absolute top-0 left-0 w-full h-full  flex justify-center items-center'>
                    <button className='relative w-1/5 before:absolute  before:w-0 before:h-full before:bg-black before:bg-opacity-70 hover:before:w-full before:left-0 before:transition-all  border-4  flex justify-center items-center px-4 py-4 uppercase mt-4'>
                        <span className='relative z-[1]'>Xem ngay</span>
                    </button>
                </div>
            </div>
            <div className='flex'>
                <div className=''>
                    <img src={hero_img3} className='h-full'></img>
                </div>
                <div className=''>
                    <img src={hero_img2} className='h-full'></img>
                </div>

            </div>
            {/* </div> */}
        </section>
    );
}

export default Hero2;
