import React from 'react';
import dsu from '../../assets/Logos/dsu.png';
import aptech from '../../assets/Logos/aptech.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function education(){
    return(
        <>
        <div className="flex justify-center items-center font-black text-2xl text-white font-serif p-16">
        Education and Certification
      </div>
      <div className="flex justify-center items-center gap-8 mb-8">
      <div className="flex justify-center w-28"><img className="h-28 w-28" src={dsu}></img></div>
      <div className="text-white w-64 font-black font-serif">DHA SUFFA UNIVERSITY<br/>Bachelor of Science in Software Engineering</div>
      <div className="text-white w-24 font-black font-serif">2021-2025</div>
      </div>
      <div className="flex justify-center items-center gap-8">
      <div className="flex justify-center w-28 font-serif font-black"><img className="h-14 w-40" src={aptech}></img></div>
      <div className="text-white w-64 font-serif font-black">Aptech(Web Development)</div>
      <div className="text-white w-24 font-serif font-black"></div>
    </div>
    <footer className="flex flex-col items-center text-white font-serif py-6 mt-40 gap-4">
  {/* Portfolio Title */}
  <div>
    <h1 className="text-2xl font-bold">PORTFOLIO</h1>
  </div>
  
  {/* Contact Icons and Info */}
  <div className="flex items-center gap-4 text-lg">
    <a href="mailto:a@gmail.com" className="hover:text-orange-500 transition-colors">
      <EmailIcon />|
    </a>
    <span>| zaurezalam@gmail.com</span>
    
    <a 
      href='https://www.linkedin.com/in/zaurez-alam-khan-0ab9bb32a' 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-orange-500 transition-colors"
    >
      <LinkedInIcon />
    </a>
    
    <a 
      href='https://github.com/ZaurezAlam' 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-orange-500 transition-colors"
    >
      <GitHubIcon />
    </a>
    
    <a href="tel:090078601" className="hover:text-orange-500 transition-colors">
      <PhoneIcon />|
    </a>
    <span>| +923358273980</span>
  </div>
  
  {/* Made By */}
  <div className="text-sm text-gray-300">
    <p>Made and Designed by Zaurez</p>
  </div>
</footer>
    </>
    
    
    )

}
export default education