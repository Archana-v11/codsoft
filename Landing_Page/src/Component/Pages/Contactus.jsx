import React, { useState } from 'react';
import './Contactus.css';
import Sidebar from '../Bar/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Contactus() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const details = { firstname, lastname, email, mobileno, message };

  const formHolder = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email) {
      setError('Please fill in all required fields.');
    } else {
      setError('');

      try {
        const storedToken = localStorage.getItem('token');
  
        if (!storedToken) {
          setError('Token not found in localStorage. Please log in.');
        } else {
          axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
          const response = await axios.post('http://localhost:8080/auth/postContact', details);
          console.log(response.data);
          navigate('/home');
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred while submitting the form.');
      }
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="contactfull">
        <form onSubmit={formHolder}>
          <h1>Contact Us Form</h1>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            required
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            required
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            id="mobile"
            placeholder="Mobile Number"
            value={mobileno}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <h4>Type Your Message Here...</h4>
          <textarea
            type="text"
            name=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input type="submit" value="Send" id="contact_button" />
        </form>
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
  );
}
