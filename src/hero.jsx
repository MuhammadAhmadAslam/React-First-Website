import React, { useState } from 'react';
import "./App.css"

let HeroSection = () => {
    return (
        <section
            className="min-h-screen p-32 text-center flex justify-center items-center flex-col">
            <h1 className="text-7xl font-bold mb-2  text-white">
                Welcome to My Site!
            </h1>
            <p className="text-gray-400 mt-5 text-3xl mb-11">
                Browse around for amazing content!
            </p>
            <div className="space-x-2">
                <a
                    href="#"
                    className="py-3 px-8 text-2xl text-[#003366] bg-[#fff] hover:bg-yellow-300  rounded-lg hover:shadow-xl transition duration-300"
                >
                    About Us
                </a>
                <a
                    href="#"
                    className="py-3 px-8 text-2xl text-[#003366] bg-[#fff] hover:bg-yellow-300  rounded-lg hover:shadow-xl transition duration-300"
                >
                    Explore
                </a>
            </div>
        </section>
    )
}

export default HeroSection