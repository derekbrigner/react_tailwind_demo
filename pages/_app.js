import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [hide, setHide] = useState('hidden');

  const handleHide = () => setHide(hide !== 'hidden'?'hidden':'block');

  return (
    <div className="mx-auto">
      <header className="flex flex-col lg:flex-row w-full bg-white">
        <div className="flex flex-row w-full lg:w-3/12">
          <div className="w-5/6 lg:w-4/12 p-3 text-gray-600 text-xl">Brand</div>
          <h1 className="hidden lg:block lg:w-8/12 p-3 text-gray-600 text-xl text-center">Organization Name</h1>
          <div className="flex justify-center w-1/6 p-3 lg:hidden">
            <FontAwesomeIcon icon={faBars} className="h-8 text-gray-400" onClick={handleHide} />
          </div>
        </div>
        <nav className={`w-full lg:w-9/12 ${hide} lg:block`}>
          <ul className="flex flex-col lg:flex-row">
            <li className="w-full p-4 uppercase hover:bg-gray-100"><a href="" className="hover:underline">News</a></li>
            <li className="w-full p-4 uppercase hover:bg-gray-100"><a href="" className="hover:underline">About</a></li>
            <li className="w-full p-4 uppercase hover:bg-gray-100"><a href="" className="hover:underline">Contact</a></li>
            <li className="flex flex-row w-full">
              <input type="text" name="searchTxt" className="w-3/4 p-2 focus:border-0" placeholder="Search"></input>
              <button name="searchBtn" className="flex items-center justify-center w-1/4 p-2 bg-green-600 text-white text-center" type="submit">
                <FontAwesomeIcon icon={faSearch} className="h-8" />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
      
      <footer className="w-full bg-gray-700 text-white">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="w-full"></div>
          <div className="w-full p-2">
            <h2 className="font-bold text-2xl text-gray-300 uppercase">Contact</h2>
            <div className="m-2">
              <a target="_blank" className="hover:underline">
                <div className="flex flex-col">
                  <div>Name</div>
                  <div>123 Address Rd.,</div>
                  <div>City, State 12345</div>
                </div>
              </a>
            </div>
            <div className="m-2">
              <div>Phone: <a href="tel:1-555-555-5555">1-555-555-5555</a></div>
              <div>Hours: Mon. - Fri. 8 A.M. - 4:30 P.M. EST</div>
            </div>
          </div>
          <div className="w-full p-2">
            <h2 className="font-bold text-2xl text-gray-300 uppercase">Join Us</h2>
            <div className="m-2">
              <div><a className="hover:underline">Who are we?</a></div>
              <div><a className="hover:underline">Become a Member</a></div>
              <div><a className="hover:underline">Renew Membership</a></div>
              <div><a className="hover:underline">Member Discounts</a></div>
              <div><a className="hover:underline">Free Account</a></div>
            </div>
          </div>
          <div className="w-full p-2">
            <h2 className="font-bold text-2xl text-gray-300 uppercase">Customer Service</h2>
            <div className="m-2">
              <div><a className="hover:underline">Member Services</a></div>
              <div><a className="hover:underline">Department Directory</a></div>
            </div>
          </div>
          <div className="w-full p-2">
            <h2 className="font-bold text-2xl text-gray-300 uppercase">Follow Us</h2>
            <div className="flex flex-row h-8 m-2 space-x-4">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <h2 className="font-bold text-2xl text-gray-300 uppercase">Subscribe</h2>
            <div className="m-2"><a className="hover:underline">Organization Magazine</a></div>
          </div>
          <div className="w-full"></div>
        </div>
        <div className="p-4 text-center text-white">
          ©2020 Organization Name | <a>Privacy Policy</a> | <a>Terms of Use</a>
        </div>
      </footer>
    </div>
  );
}

export default MyApp
