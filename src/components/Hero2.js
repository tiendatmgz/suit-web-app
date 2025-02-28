import React from 'react';
import hero_img1 from '../assets/image/hero_img1.jpg';
import hero_img2 from '../assets/image/hero_img2.jpg';
import hero_img3 from '../assets/image/hero_img3.jpg';
import hero_img4 from '../assets/image/hero_img4.jpg';



const Hero2 = () => {
    return (
        <section className='text-white uppercase'>
            <div className='h-screen bg-cover bg-fixed bg-bottom relative flex justify-center' style={{ backgroundImage: `url(${hero_img1})` }}>
                {/* <img src={hero_img1} className=''></img> */}
                <div className='sticky top-1/2 h-min w-1/4 bg-black p-8 my-8 bg-opacity-30'>
                    <h1 className='text-5xl font-medium text-center'>Đồ Sự Kiện</h1>
                    <button className='w-full relative before:absolute  before:w-0 before:h-full bg-black bg-opacity-50 before:bg-black before:bg-opacity-70 hover:before:w-full before:left-0 before:transition-all  border-4 border-white  flex justify-center items-center px-4 py-4 uppercase my-8'>
                        <span className='relative z-[1]'>Xem ngay</span>
                    </button>
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/2 h-screen bg-cover bg-bottom relative flex justify-center' style={{ backgroundImage: `url(${hero_img2})` }}>
                    {/* <img src={hero_img3} className='h-full'></img> */}
                    <div className='sticky top-1/2 h-min w-1/4 bg-black p-8 my-8 bg-opacity-30'>
                        <h1 className='text-5xl font-medium text-center'>Quần</h1>

                        <button className='w-full relative before:absolute  before:w-0 before:h-full bg-black bg-opacity-50 before:bg-black before:bg-opacity-70 hover:before:w-full before:left-0 before:transition-all  border-4 border-white  flex justify-center items-center px-4 py-4 uppercase my-8'>
                            <span className='relative z-[1]'>Xem ngay</span>
                        </button>
                    </div>
                </div>
                <div className='w-1/2 h-screen bg-cover bg-bottom relative flex justify-center' style={{ backgroundImage: `url(${hero_img3})` }}>
                    {/* <img src={hero_img2} className='h-full'></img> */}
                    <div className='sticky top-1/2 h-min w-1/4 bg-black p-8 my-8 bg-opacity-30'>
                        <h1 className='text-5xl font-medium text-center'>áo</h1>

                        <button className='w-full relative before:absolute  before:w-0 before:h-full bg-black bg-opacity-50 before:bg-black before:bg-opacity-70 hover:before:w-full before:left-0 before:transition-all  border-4 border-white  flex justify-center items-center px-4 py-4 uppercase my-8'>
                            <span className='relative z-[1] '>Xem ngay</span>
                        </button>
                    </div>
                </div>


            </div>
            <div className='h-screen bg-cover bg-fixed bg-bottom relative flex justify-center' style={{ backgroundImage: `url(${hero_img1})` }}>
                {/* <img src={hero_img1} className=''></img> */}
                <div className='sticky top-1/2 h-min w-1/4 bg-black p-8 my-8 bg-opacity-30'>
                    <h1 className='text-5xl font-medium text-center'>Đồ Sự Kiện</h1>
                    <button className='w-full relative before:absolute  before:w-0 before:h-full bg-black bg-opacity-50 before:bg-black before:bg-opacity-70 hover:before:w-full before:left-0 before:transition-all  border-4 border-white  flex justify-center items-center px-4 py-4 uppercase my-8'>
                        <span className='relative z-[1]'>Xem ngay</span>
                    </button>
                </div>
            </div>
            {/* </div> */}
        </section>
    );
}

export default Hero2;
