"use client"
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';





const HeroSection = () => {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 max-w-6xl mx-auto">
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xllg:text-6xl font-extrabold'>
                        <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-500 to-white
">
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Doğan Demir',          // first thing typed
                                1500,             // pause 1.5s
                                'A Full Stack Developer',
                                2000,             // pause 2s
                                'An AI Enthusiast',
                                2000,             // pause 2s
                            ]}
                            wrapper="span"
                            cursor={true}      // show blinking cursor
                            speed={50}         // typing speed (ms per character)
                            deletionSpeed={30} // speed of deleting text
                            repeat={Infinity}   // loop forever
                            style={{ fontWeight: 'bold' }} // optional styling
                        />

                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        I'm a software developer with a passion for building web applications.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-blue-800 hover:to-blue-500 transition transform duration-300'>
                            Hire Me
                        </button>

                        <button
                            onClick={() => {
                                const projectsSection = document.querySelector('#projects');
                                if (projectsSection) {
                                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className='px-6 py-3 w-full sm:w-fit rounded-full border border-white text-white bg-transparent shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-600 hover:text-white transition transform duration-300 mt-3 cursor-pointer'
                        >
                            View My Work
                        </button>


                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
                        <Image
                            src="/images/memoji.png"
                            alt="Hero image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection