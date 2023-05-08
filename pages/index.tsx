import Head from 'next/head';
import Image from 'next/image'
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa'
import {AiOutlineArrowDown} from 'react-icons/ai'
import laptop from "../public/laptop.png";
import password from "../public/password.png";
import workout from "../public/workout.jpeg";
import icon from "../public/me.png"
import icon2 from "../public/realme-modified.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HiOutlineSparkles } from 'react-icons/hi';
import { styled } from '@material-ui/core';
import { StylesContext } from '@material-ui/styles';
import ContactForm from './contactForm';
import emailjs from '@emailjs/browser';
import codegenie from "../public/genieMode.png"



export default function Home() {

  return (
    <div>
      <main>
      <section className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 min-h-screen">
      <nav className="navbar">
          <h1 className='text-xl'></h1>
          <ul className="ml-7 flex items-end h-full">
  <li className="mr-6">
    <a className="text-blue-500 hover:text-purple-800" href="#boutme">A little about Me</a>
  </li>
  <li className="mr-6">
    <a className="text-blue-500 hover:text-purple-800" href="#portfolio">Portfolio</a>
  </li>
  <li className="mr-6">
    <a className="text-blue-500 hover:text-purple-800" href="#contact">Contact Me</a>
  </li>
</ul>
</nav>
      <div className='text-center p-10'>
          <h2 className=' text-5xl py-2 inline-block border-blue-500 text-indigo-400 mt-9'>I am Jailene </h2>
          <h3 className='text-2xl py-2'> Web Developer and Designer. </h3>
          <p className='text-md py-5 leading-8 text-gray-800'>

            Lets work together. I want to make your design ideas come to life! 
          </p>
         <div className='flex justify-center'>
          <Image src={laptop} className="hover" alt="purple animated laptop"/>
         </div>
        
        </div>
        <div className='aboutMe' id="boutme">
          <h3 className=" relative left-7 text-3xl py-1" id="titleMe">About Me</h3>
         
          <p className=" relative left-7 w-1/2 h-32 max-w-full max-h-full min-w-20 min-h-10 text-gray-800 text-lg" > Graduated from University of Miami Bootcamp in fullstack Development. In my time in the bootcamp I was able to work on a multitude of projects in programming and designing applications.
          Some Technologies and languages I have experience using include : HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, MongoDB, MySQL, Command Line, and Git. 
           <br></br>
           <br></br>
           Check out my work down below!
           </p>
      </div>
           
         
         <div className='image-container'>
    <Image src={icon} className="avi" alt="animation of myself"/>
    <Image src={icon2} className="hoverPic" alt= "real portrait of myself"/>
        </div>
        <div className='porfolio' id='portfolio'>
          <h3 className='relative left-7 text-3xl mt-10 py-1'>Portfolio</h3>

          <div className="card-container">
  <a href="https://example.com" className="card">
    <div className="card-image">
      <Image src={""} alt="portfolio image 1"/>
      <div className="card-image-overlay"></div>
    </div>
    <div className="card-content">
      <h2>JessBlinks</h2>
      <p>Description of project 1</p>
    </div>
  </a>
  <a href="https://glacial-beyond-25840.herokuapp.com/" className="card">
    <div className="card-image">
    <Image src={codegenie} alt="Portfolio Image 2" />
      <div className="card-image-overlay"></div>
    </div>
    <div className="card-content">
      <h2>Code Genie</h2>
      <p>Forum style application for Fullstack Developers. Features AI technology to get coding answers.</p>
    </div>
  </a>
  <a href="https://example.com" className="card">
    <div className="card-image">
      <Image src={""} alt="portfolio image 3" />
      <div className="card-image-overlay"></div>
    </div>
    <div className="card-content">
      <h2>Weather Dashboard</h2>
      <p>Description of project 3</p>
    </div>
  </a>
</div>


        </div>
<div></div>
<h3 id="contact" className='relative left-7 text-3xl mt-10 py-1'>I'd love to hear from you!</h3>
     <ContactForm />
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
         <a href="https://www.linkedin.com/in/jailene-veras-36a498174/"><AiFillLinkedin /></a> 
          <a href="https://github.com/jailenevrs"><FaGithub /></a>
          </div>
      </section>
     
      
      </main>
    </div>
  )
}