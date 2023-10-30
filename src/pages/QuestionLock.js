import React from 'react'
import { Link } from "react-router-dom";
import Coins from '../component/Coins'

const Question = () => {
  return (
    <>
      <header className='header'>
         <Link className='back-arrow' to="/">Change Place</Link> 
         <Coins />
      </header>
      <div className='question-lock-container'>
         <ul className='step-block'>
          <li className='center'>
            <div className='flex'>
              <strong>Final Prize</strong>
              <div className='image-block'></div>
            </div>
          </li>
          <li>
            <div className='flex'>
               <div className="text-block"><strong>Speak</strong></div>
               <div className='image-block'><i></i></div>
            </div>
          </li>
          <li>
            <div className='flex'>
              <div className="text-block">
                <strong>Chat Conv</strong>
                <div className="star-block">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
					    </div>
              <div className='image-block'><i></i></div>
            </div>
          </li>
          <li>
            <div className='flex'>
              <div className="text-block">
                <strong>Kannada Practice</strong>
                <div className="star-block">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
					    </div>
              <Link className='image-block' to="/quiz"></Link>
              {/* <div className='image-block'></div> */}
            </div>
          </li>
          <li className='active'>
            <div className='flex'>
              <div className="text-block">
                <strong>Grammar Practice</strong>
                <div className="star-block">
                  <span className='filled'></span>
                  <span className='filled'></span>
                  <span></span>
                </div>
					    </div>
              <div className='image-block'><i></i></div>
            </div>
          </li>
         </ul>
      </div>
      <footer className='footer'>
          <div>My Best Friend</div>
      </footer>
    </>
  )
}

export default Question
