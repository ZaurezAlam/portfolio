import React from 'react'
import myImage from '../images/zaurez.JPG'

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  text-white font-medium mt-12  ">
      
      {/* Text */}
      <div className="pr-40">
  <h2 className="text-orange-500 font-serif font-bold text-xl mb-4">
    About Me
  </h2>

  <p className="mb-6 leading-relaxed mr-12">
    Aspiring React.js Intern passionate about building<br />
    responsive and modern user interfaces using React,<br />
    JavaScript, and CSS while learning best practices.
  </p>

  <a
    href="https://github.com/ZaurezAlam"
    className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
  >
    Learn More
  </a>
</div>


      {/* Image */}
      <div className="w-60 h-60  ml-24 -translate-y-1  ">
        <img
          className="w-full h-full object-cover rounded-full ml-19 "
          src={myImage}
          alt="person"
        />
      </div>
    </div>
  )
}
