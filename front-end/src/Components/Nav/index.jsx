import React from 'react'
import './style.scss'
import {FaRegClock} from 'react-icons/fa'
import {FaRegUser} from 'react-icons/fa'
import {HiOutlinePhone} from 'react-icons/hi'
import {FaSistrix} from 'react-icons/fa'
import {FaApple} from 'react-icons/fa'
import {RiScales3Fill} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
  return (
    <div>
       <nav className='nav-container'>
                    <div className="nav-first">
            <div className="nav-left">

              <div className="first-ul">
              <ul >
                <li className='nav-link'>Haqqımızda</li>
                <li className='nav-link'>Ödəniş və Çatdırılma</li>
                <li className='nav-link'>Mağazalarımız</li>
               
            </ul>
              </div>

              <div className="second-ul">
              <ul >
                <li className='nav-link'>Biznes Üçün</li>
                <li className='nav-link'>Tax Free</li>
            </ul>
              </div>
          
           
            
    
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

                      <div className="second-nav-left">
                        
                      <div className="logo">
                        <div className='icon'>
                        <AiOutlineMenu/>
                        </div>
                     
                      <h1>ISpace</h1>
                      </div>

                      <div className="icon">
                        <FaApple  />
                        <p>Premium 
                          <br /> Reseller</p>
                        
                      </div>
                      </div>

                     
                   <div className="second-nav-right">
                     
                         <div className='products'>
                      
                      <ul>
                      <FaSistrix/>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>Tv</li>
                        <li>AirPods</li>
                        <li>Audio</li>
                        <li>Aksesuarlar</li>
                        <li>Brendler</li>
  
                      </ul>
                         </div>
                         <div className="services">
                        <ul>
                          <li>Xidmetler</li>
                          <li>Servis</li>
                          <li>Bloglar</li>
                        </ul>
                         </div>

                         <div className="for-icons">
                      <RiScales3Fill/>
                      <AiOutlineHeart/>
                      <FaShoppingCart/>
                   </div>

                   </div>

                   

                   
                  
                    </div>
       
       </nav>
    </div>
  )
}

export default Nav