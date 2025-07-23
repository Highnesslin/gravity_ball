'use client'

export default function Header() {
  const toggleMenu = () => {
    //
  }

  return (
    <header className='bg-white bg-opacity-70 fixed top-0 w-full h-header transition-[height] z-50 overflow-hidden shadow-md backdrop-blur'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className='text-2xl font-bold text-sky-600'>Gravity Jumping</div>
          <div className='hidden md:flex space-x-8 text-sm font-medium'>
            <a href='#GameScene' className='hover:text-sky-600 transition'>
              Play
            </a>
            <a href='#features' className='hover:text-sky-600 transition'>
              Features
            </a>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-gray-700 focus:outline-none'>
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id='mobile-menu' className='md:hidden hidden bg-white bg-opacity-80 px-4 pb-4'>
        <a href='#features' className='block py-2 border-b border-gray-300 hover:text-sky-600'>
          Features
        </a>
        <a href='#download' className='block py-2 border-b border-gray-300 hover:text-sky-600'>
          Download
        </a>
        <a href='#contact' className='block py-2 hover:text-sky-600'>
          Contact
        </a>
      </div>
    </header>
  )
}
