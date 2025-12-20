import React from 'react'
import myImage from '../images/zaurez.JPG'

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-white font-medium mt-16 md:mt-24 px-4 md:px-8 lg:px-12 gap-8 md:gap-12 lg:gap-16">
      
      {/* Text */}
      <div className="w-full md:w-auto text-center md:text-left max-w-xl">
        <h2 className="text-orange-500 font-serif font-bold text-xl md:text-2xl mb-4">
          ABOUT ME
        </h2>

        <p className="mb-6 leading-relaxed text-sm md:text-base lg:text-lg px-4 md:px-0">
          Aspiring React.js Intern passionate about building
          responsive and modern user interfaces using React,
          JavaScript, and CSS while learning best practices.
        </p>

        <a
          href="https://github.com/ZaurezAlam"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Learn More
        </a>
      </div>

      {/* Image */}
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-72 lg:h-72 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-full shadow-lg"
          src={myImage}
          alt="Zaurez Alam"
        />
      </div>
    </div>
  )
}