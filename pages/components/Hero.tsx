import React from "react";
import bg from "./gerald.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className='px-6 py-8 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left'>
      <div className='container mx-auto xl:px-32'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='mt-12 lg:mt-0'>
            <h1 className='text-4xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-8'>
              I am <br />
              <span className='text-black font-caption'>Gerald Maduabuchi</span>
            </h1>
            <p className='text-black mb-14 text-xl'>
              I am a computer programmer, tutor and consultant with six years of
              experience and executed projects. I design, develop, and deploy
              software. When I'm not programming, I write blogs on software
              development, produce music beats or tinker with electronics. My
              interests span through Machine Learning, Operating Systems,
              Compiler Design, Distributed Systems and Database Systems.
            </p>
            <a
              className='inline-block px-7 py-3 mr-2 rounded-lg border border-transparent font-medium text-lg text-white bg-zinc-800 hover:bg-white hover:text-black hover:border-black'
              href='#!'
            >
              Discover More
            </a>
            <a
              className='inline-block px-7 py-3 bg-transparent text-zinc-800 font-medium text-lg rounded-xl bg-zinc-800 hover:bg-white hover:text-black hover:border-zinc-800'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              href='#!'
              role='button'
            >
              Get in Touch!
            </a>
          </div>
          <div className='mb-12 lg:mb-0'>
            <Image src={bg} className='w-full rounded-xl shadow-lg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

// I am a computer programmer, tutor and consultant with six years of
//     experience and executed projects. I design, develop, and deploy
//     software. When I'm not programming, I write blogs on software
//     development, produce music beats or tinker with electronics. My
//     interests span through Machine Learning, Operating Systems, Compiler
//     Design, Distributed Systems and Database Systems.
