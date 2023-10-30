import React from 'react'
import { Link } from "react-router-dom";
import '../assets/landing.scss'
import Coins from '../component/Coins'
import social from '../assets/images/social-district.svg'
import home from '../assets/images/home.svg'
import marketArea from '../assets/images/market.svg'
import OfficeTower from '../assets/images/offices.svg'


const Landing = () => {
  return (
    <div className='landing-page'>
       <Coins />
       <div className='landing-container'>
         <div className='home-block'>
            <div className='mid-line'></div>
            <div className='image-block'>
                  <img src={home} alt='' />
            </div>
            <strong>Home</strong>
         </div>
          <div className='social-district'>
            <div className='wrap-social-district'>
               <div className='image-block'>
                  <img src={social} alt='' />
                </div>
                <Link className='btn' to="/question">Social District</Link>
                <div className='progressbar'>
                   <span></span>
                   <strong>25%</strong>
                </div>
            </div>
          </div>

          <div className='flex market-area'>
            <div className='wrap-market-area'>
               <div className='image-block'>
                  <img src={marketArea} alt='' />
                </div>
                <Link className='btn' to="/question">Market Area</Link>
                <div className='progressbar'>
                   <span></span>
                   <strong>50%</strong>
                </div>
            </div>
          </div>

          <div className='flex office-block'>
            <div className='wrap-market-area'>
               <div className='image-block'>
                  <img src={OfficeTower} alt='' />  
                </div>
                <Link className='btn' to="/question">Office Towers</Link>
                <div className='progressbar'>
                   <span></span>
                   <strong>75%</strong> 
                </div>
            </div>
          </div>

       </div>
    </div>
  )
}

export default Landing
