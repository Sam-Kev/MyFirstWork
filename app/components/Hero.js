import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white px-6">
      {/* Profile Image */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 -full overflow-hidden border-4 border-grey-500 shadow-lg">
        <Image src="/Prof.png" alt="Sam" width={192} height={192} className="object-cover" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hi, I'm <span className="text-blue-500">Samuel Martei</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300 leading-relaxed">
        A web programmer and technical trainer with a passion for 
        <span className="text-yellow-400 font-semibold"> technology</span>, 
        <span className="text-yellow-400 font-semibold"> education</span>, and 
        <span className="text-yellow-400 font-semibold"> training</span>.  
        I am dedicated to empowering individuals and organizations with cutting-edge web solutions and technical expertise.
      </p>

      {/* CTA Button */}
      <a 
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-medium 
        hover:bg-yellow-600 transition duration-300 shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;