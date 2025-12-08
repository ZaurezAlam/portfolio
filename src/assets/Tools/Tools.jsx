import React from 'react'
import Html from '../../assets/Logos/html.png';
import Css from '../../assets/Logos/css.png';
import js from '../../assets/Logos/js.png';
import react from '../../assets/Logos/react.png';
import tailwind from '../../assets/Logos/tailwind.png';
import mui from '../../assets/Logos/mui.png';
import vercel from '../../assets/Logos/vercel.png';
import python from '../../assets/Logos/python.png';
import django from '../../assets/Logos/django.png';
import yolo from '../../assets/Logos/yolo.png';

function tools(){
  return (
    <>
    {/* Heading Section */}
    <div className="flex justify-center items-center font-black text-2xl text-white font-serif p-16">
        <h1>Languages and Frameworks</h1>
    </div>
    
    {/* Logos Section - Using flex-wrap for responsive rows */}
    <div className="flex justify-center items-center flex-wrap gap-8 max-w-4xl mx-auto">
        <img className="h-20 w-20" src={Html} alt="HTML" />
        <img className="h-20 w-20" src={Css} alt="CSS" />
        <img className="h-20 w-20" src={js} alt="JavaScript" />
        <img className="h-20 w-20" src={react} alt="React" />
        <img className="h-20 w-35" src={tailwind} alt="Tailwind CSS" />
        <img className="h-20 w-20" src={mui} alt="Material-UI" />
        <img className="h-20 w-20" src={vercel} alt="Vercel" />
        
        {/* Second row will naturally wrap */}
        <img className="h-20 w-20" src={python} alt="Python" />
        <img className="h-20 w-20" src={django} alt="Django" />
        <img className="h-20 w-35" src={yolo} alt="YOLO" />
    </div>
    </>
  )
}
export default tools