import React from 'react'
import Sidebar from '../Bar/Sidebar';
import './Privacy_policy.css';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Privacy_policy() 
{
  return (
    <div>
       <Sidebar/>
       <div className='ppfull'>
          <img src='https://blog.ipleaders.in/wp-content/uploads/2020/10/bluestar_webbox_privacy-policy_1024x512_1218_V1_PRESS.jpg' width="1400px" height="420px"/>
          <div className='ppcontent'>
              <div className='pphead'>
                 <p>Privacy Policy</p>
              </div>
              <div className='ppara'>
               <p>This Privacy Policy describes how our website collects, uses, and protects personal information 
               when you visit our website or use our services related to online wildlife watching tours.</p>
              </div>
              <div className='pphead1'>
                 <p><b>Information We Collect</b></p>
              </div>
              <div className='para'><br/>
                <p>We collect the following types of information:</p>
              </div>
              <div className='para'><br/>
                <p><span className='ppspan'>Personal Information: </span> We may collect personal information, such as your name, email address, and location, 
                when you voluntarily provide it to us, such as when signing up for an account or subscribing to our newsletter.
                </p>
              </div>
              <div className='para'><br/>
                <p><span className='ppspan'>Usage Data: </span>We automatically collect information about your interaction with our website, including your IP address, browser type, device information, 
                and pages visited. We use cookies and similar technologies for this purpose.
                </p>
              </div>
              
              <div className='pphead1'>
              <h4>How We Use Your Information</h4>
           </div>

           <div className='para'><br/>
           <p>We use the collected information for the following purposes:</p>
         </div>

           <div className='para'><br/>
           <p>1. To provide and improve our online wildlife watching tour services.</p>
           <p>2. To personalize your experience and offer relevant content.</p>
           <p>3. To send you updates, newsletters, and information about our tours and events.</p>
           <p>4. To respond to your inquiries, comments, or requests.</p>
           <p>5. To analyze and enhance our website's functionality and user experience.</p>
         </div>
            
         <div className='pphead1'>
         <p><b>Sharing Your Information</b></p>
      </div>

      <div className='para'><br/>
           <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
         </div>
       
         <div className='para'><br/>
           <p>1.Partners and affiliates for marketing and promotional purposes.</p>
           <p>2.Third-party service providers that assist us in operating our website and delivering our services.</p>
           </div>
          
       

        <div className='pphead1'>
         <p><b>Security</b></p>
      </div>

      <div className='para'>
      <p>We take reasonable steps to protect your personal information from unauthorized access, disclosure, or alteration. However, no data transmission 
      over the internet or storage system is entirely secure, and we cannot guarantee absolute security.</p>
    </div>

    <div className='pphead1'>
         <p><b>Contact Us</b></p>
      </div>
      
      <div className='para'>
      <p>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at abxcgh</p>
    </div>
    </div>
    </div>
    
    <footer>
        <div className='footer-content'>
            <h4>Projects</h4>
            <li><a href='/places'>Places</a></li>
            <li><a href='/animals'>Animals</a></li>
            <li><a href='/images'>Images</a></li>
            <li><a href='/videos'>Videos</a></li>
        </div>
        <div className='footer-content'>
            <h4>Quick Links</h4>
            <li><a href='/faq'>FAQ</a></li>
            <li><a href='/privacy'>Privacy Policy</a></li>
            <li><a href='/contact'>Help</a></li>
            <li><a href='/terms'>Terms & Conditions</a></li>
        </div>
        <div className='footer-content'>
            <h4>Company</h4>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/contact'>Contact Us</a></li>
        </div>
        <div className='footer-content'>
          <h4>Follow Us</h4>
          <div className='sociallink'>
          <a href='https://www.facebook.com/profile.php?id=100091308641475'><span className='sicon'><AiIcons.AiFillFacebook/></span></a>
          <Link to='https://www.instagram.com/archana.v11/'><span className='sicon'><BsIcons.BsInstagram/></span></Link>
          <Link to='https://www.linkedin.com/in/archana-v-456278227/'><span className='sicon'><AiIcons.AiOutlineLinkedin/></span></Link>
          <Link to='https://twitter.com/'><span className='sicon'><BsIcons.BsTwitter/></span></Link>
          <Link to='https://www.youtube.com/'><span className='sicon'><BsIcons.BsYoutube/></span></Link>
          </div>
          </div>
  </footer>
   <div className='copyright'>
      <p>Copright 2023 Online Tutorials.All rights reserved</p>
   </div>
    </div>
  )
}