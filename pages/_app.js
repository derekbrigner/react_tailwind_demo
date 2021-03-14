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
          <h1 className="hidden lg:block lg:w-8/12 p-3 text-gray-600 text-xl text-center">U.S. Trotting Association</h1>
          <div className="flex justify-center w-1/6 p-3 lg:hidden">
            <FontAwesomeIcon icon={faBars} className="h-8 text-gray-400" onClick={handleHide} />
          </div>
        </div>
        <nav className={`w-full lg:w-9/12 ${hide} lg:block`}>
          <ul className="flex flex-col lg:flex-row">
            <li className="w-full p-4 uppercase hover:bg-gray-100"><a href="" className="hover:underline">News</a></li>
            <li className="w-full p-4 uppercase hover:bg-gray-100"><a href="" className="hover:underline">Racing</a></li>
            <li className="w-full p-4 uppercase hover:bg-gray-100"><a href="" className="hover:underline">HoofBeats</a></li>
            <li className="w-full p-4 uppercase hover:bg-gray-100"><a href="" className="hover:underline">Members</a></li>
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
              <a href="https://goo.gl/maps/gCkEFHreA7giGvp17" target="_blank" className="hover:underline">
                <div className="flex flex-col">
                  <div>United States Trotting Association</div>
                  <div>6130 Sunbury Rd.,</div>
                  <div>Westerville, Ohio 43081</div>
                </div>
              </a>
            </div>
            <div className="m-2">
              <div>Phone: <a href="tel:1-877-800-8782">1-877-800-USTA</a></div>
              <div>Hours: Mon. - Fri. 8 A.M. - 4:30 P.M. EST</div>
            </div>
          </div>
          <div className="w-full p-2">
            <h2 className="font-bold text-2xl text-gray-300 uppercase">Join the USTA</h2>
            <div className="m-2">
              <div><a href="http://members.ustrotting.com" className="hover:underline">What is the USTA?</a></div>
              <div><a href="http://members.ustrotting.com/about.cfm" className="hover:underline">Become a Member</a></div>
              <div><a href="http://members.ustrotting.com/membership.cfm" className="hover:underline">Renew Membership</a></div>
              <div><a href="http://members.ustrotting.com/member_discounts.cfm" className="hover:underline">Member Discounts</a></div>
              <div><a href="http://myaccount.ustrotting.com/" className="hover:underline">Free Online Account</a></div>
            </div>
          </div>
          <div className="w-full p-2">
            <h2 className="font-bold text-2xl text-gray-300 uppercase">Customer Service</h2>
            <div className="m-2">
              <div><a href="http://members.ustrotting.com/" className="hover:underline">Member Services</a></div>
              <div><a href="http://www.ustrotting.com/contact.cfm" className="hover:underline">Department Directory</a></div>
              <div><a href="http://myaccount.ustrotting.com" className="hover:underline">MyAccount</a></div>
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
            <div className="m-2"><a href="http://hoofbeats.ustrotting.com" className="hover:underline">Hoof Beats Magazine</a></div>
          </div>
          <div className="w-full"></div>
        </div>
        <div className="p-4 text-center text-white">
          ©2020 The United States Trotting Association | <a>Privacy Policy</a> | <a>Terms of Use</a>
        </div>
      </footer>
    </div>
  );
}

export default MyApp
