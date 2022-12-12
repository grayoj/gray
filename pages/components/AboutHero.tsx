import React from "react";

export default function AboutHero() {
  return (
    <main className='mb-32 mt-32 w-full mx-auto max-w-7xl px-4 sm:mt-24'>
      <div className='text-center'>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
          <span className='block text-zinc-800 xl:inline'>
            My Fantastic Journey
          </span>
        </h1>
        <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
          I wrote my first computer program at the age of five. My first ever
          laptop I received ran an instance of the Linux Operating System.
          Little did I know, it would be the stepping stone to what I can do
          today
        </p>
        <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
          <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
            <a
              href='#'
              className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zinc-800 hover:bg-white hover:text-black hover:border-black md:py-4 md:text-lg md:px-10'
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
