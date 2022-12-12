export default function AboutResume() {
  return (
    <div className='bg-gray-50 mx-auto my-20 max-w-7xl py-24 rounded-xl'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>Think I could add value to your team?</span>
          <span className='block text-zinc-800'>Reach Out</span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zinc-800 hover:text-black hover:bg-white hover:border-zinc-800'
            >
              Download Resume
            </a>
          </div>
          <div className='ml-3 inline-flex rounded-md shadow'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white  border-zinc-800'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
