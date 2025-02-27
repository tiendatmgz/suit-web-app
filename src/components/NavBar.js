import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavData from '../data/NavData';

const NavBar = () => {
  const [language, setLanguage] = useState('VN');
  return (
    <nav className='flex h-16 uppercase justify-around items-center border-b-2 border-gray-200 fixed w-full bg-white z-10'>
      <Link to='/' className=''>
        <div className='font-bold text-center text-2xl'>DAT</div>
        <div className='font-bold text-center'>TAILOR</div>
      </Link>
      <ul className='flex h-full items-center'>
        {NavData.map((navLink, index) => {
          return (
            <li key={index} className=' h-full flex items-center justify-center px-4 group/item relative'>
              <Link to={navLink.path} className='flex items-center h-full group/item'>
                <span className='relative before:h-[1px] before:w-0 before:absolute before:bg-black before:bottom-0 before:transition-all before:duration-300 group-hover/item:before:w-full'>{navLink.name}</span>
                {navLink.children ? <i className="fa-solid fa-chevron-down pl-1 text-xs"></i> : ''}
              </Link>
              {navLink.children && (
                <ul className='w-60 absolute translate-y-10 opacity-0  top-full left-0 shadow-md hidden group-hover/item:block group-hover/item:opacity-100 group-hover/item:translate-y-0 bg-white transition-all duration-300'>
                  {navLink.children.map((child, index) => {
                    return (
                      <li key={index} className='m-2 group/item2 relative'>
                        <Link to={child.path} >
                          <span className='relative before:h-[1px] before:w-0 before:absolute before:bg-black before:bottom-0 before:transition-all before:duration-300 group-hover/item2:before:w-full'>{child.name}</span>
                        </Link>
                        {child.children && (
                          <ul className=''>
                            {child.children.map((subChild, index) => {
                              <li key={index} className=''>
                                <Link to={subChild.path} >
                                  <span className=''>{subChild.name}</span>

                                </Link>

                              </li>

                            })}
                          </ul>


                        )}

                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}

        {/* Add more links here */}
      </ul>
      <ul className='nav-tools flex gap-6 h-full items-center' >
        <li className='nav-search cursor-pointer h-full flex items-center justify-center px-4 group/item'>
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </li>

        <li className='nav-language cursor-pointer relative h-full flex items-center justify-center px-4 group/item'>
          <span className='flex items-center'>
            <i className="fa-solid fa-earth-americas"></i>
            <span className='px-2'>{language}</span>
            <i className="fa-solid fa-caret-down text-xs"></i>
          </span>

          <ul className='absolute translate-y-10 hidden opacity-0 top-full w-full shadow-md group-hover/item:block group-hover/item:opacity-100 group-hover/item:translate-y-0 bg-white transition-all duration-300'>
            <li onClick = {() => setLanguage(language == 'VN'? 'US':'VN' )} className='opacity-50 m-2'>{language == 'VN'? 'US':'VN' }</li>
          </ul>
        </li>

        <li className='nav-cart cursor-pointer h-full flex items-center justify-center px-4 group/item'>
          <Link>
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
