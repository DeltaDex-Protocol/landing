import React from 'react';
import { Link } from 'react-router-dom';

import TelegramLogo from '../images/telegram-2.png';

import TelegramBlackWhite from '../images/telegram-single-path-240px.svg';


function Footer() {
  return (
    <footer>
      {/* <TelegramLogo /> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className='w-full mx-auto max-w-6xl text-center'>
          <span className='text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600'>Join our Community</span>
        </div>
        <ul className="flex space-x-36 mb-10 mt-10 mx-auto max-w-sm">
            <li>
              <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="">
              <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="">
              <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Telegram">

              {/* <img src={TelegramBlackWhite} className='h-8 bg-white rounded-full'/> */}
              <img src={TelegramLogo} className='bg-white rounded-full p-1 h-8 '/>

              </Link>
            </li>
          </ul>

        {/* <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          <span className='col-span-3 text-white text-center'>Twitter</span>
          <span className='col-span-3 text-white text-center'>Github</span>
        </div> */}

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Made by <a className="text-purple-500 hover:underline" href="#">DeltaDex</a>. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;