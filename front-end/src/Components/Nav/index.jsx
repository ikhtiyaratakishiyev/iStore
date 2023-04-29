import React from 'react'
import './style.scss'
import {FaRegClock} from 'react-icons/fa'
import {FaRegUser} from 'react-icons/fa'
import {HiOutlinePhone} from 'react-icons/hi'


const Nav = () => {
  return (
    <div>
       <Nav className='nav-container'>
                    <div className="nav-first">
            <div className="nav-left">
            <ul>
                <li className='nav-link'>Haqqımızda</li>
                <li className='nav-link'>Ödəniş və Çatdırılma</li>
                <li className='nav-link'>Mağazalarımız</li>
                <li className='nav-link'>Biznes Üçün</li>
                <li className='nav-link'>Tax Free</li>
            </ul>
            
    
            </div>


            <div className="nav-right">


              <div className="time">

               <FaRegClock />
            <p >09:00-21:00 (Be-B)</p>
            <HiOutlinePhone/>
            <div className="numbers">
               
             <p className="numbers">+994(12) 310 15 44</p>
            <p className="numbers">+994(50) 776 00 50</p>
          </div>
               </div>

             <div className="nav-lang">
             <ul>
            <li className='nav-lang'>Az</li>
            <li className='nav-lang'>En</li>
            <li >Ru</li>
          </ul>
             </div>


             <div className="nav-btn">
                <FaRegUser/>
                <button className='btn-şəxsi'>Şəxsi Kabinet</button>
              </div> 
         
         
          </div>
          
                    </div>

                    <div className="second-nav">
                    <h1>ISpace</h1>
                    </div>
       
       </Nav>
    </div>
  )
}

export default Nav