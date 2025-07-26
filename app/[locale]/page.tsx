import { getMessages } from 'next-intl/server'
import GameScene from '@/components/GameScene'
import Header from '@/components/Header'

export default async function Home() {
  const messages = await getMessages()
  const home = messages.HomePage
  const Common = messages.Common

  return (
    <>
      <Header />

      <section className='flex justify-center gap-2 w-full h-[66vh] md:h-[88vh] mx-auto mt-[calc(var(--page-header-height)+20px)] overflow-hidden'>
        <img
          src='/bg.png'
          alt='Gravity Ball game cover with a bouncing ball in space'
          className='hidden md:block absolute left-0 top-[var(--page-header-height)] w-full h-[86%] object-cover blur-sm'
        />
        <div className='hidden md:block md:flex-1'>{/* 广告位 */}</div>
        <div className='flex flex-col w-full max-w-[90vw] md:w-[88vh] '>
          <GameScene />
        </div>
        <div className='hidden md:block md:flex-1'>{/* 广告位 */}</div>
      </section>

      {/* introduce */}
      <section
        id='introduce'
        className='my-10 md:my-20 bg-gradient-to-b from-white via-sky-50 to-white text-center px-6'
      >
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-5xl font-extrabold mb-6 text-sky-600'>{home.introduceTitle}</h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            <span className='font-semibold text-sky-700'>{Common.brandName}</span>
            <span className='ml-1 whitespace-pre-line text-justify leading-relaxed'>
              {home.introduceContent}
            </span>
          </p>
          <p className='mt-4 text-gray-700 text-xl leading-relaxed underline'>{home.introduceGuide}</p>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section
        id='features'
        className='my-10 md:my-20 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'
      >
        <div className='bg-white/90 p-6 rounded-xl shadow hover:scale-105 transition'>
          <h3 className='text-xl font-semibold mb-2 text-sky-600'>{home.featureTitle1}</h3>
          <p className='whitespace-pre-line text-gray-600'>{home.featureContent1}</p>
        </div>
        <div className='bg-white/90 p-6 rounded-xl shadow hover:scale-105 transition'>
          <h3 className='text-xl font-semibold mb-2 text-sky-600'>{home.featureTitle2}</h3>
          <p className='whitespace-pre-line text-gray-600'>{home.featureContent2}</p>
        </div>
        <div className='bg-white/90 p-6 rounded-xl shadow hover:scale-105 transition'>
          <h3 className='text-xl font-semibold mb-2 text-sky-600'>{home.featureTitle3}</h3>
          <p className='whitespace-pre-line text-gray-600'>{home.featureContent3}</p>
        </div>
      </section>

      {/* contact */}
      <section
        id='contact'
        className='my-10 md:my-20 bg-white bg-opacity-90 px-6 py-16 max-w-4xl mx-auto text-center'
      >
        <h2 className='text-4xl font-extrabold mb-6 text-sky-600'>{home.contactTitle}</h2>
        <p className='text-gray-700 text-lg max-w-xl mx-auto mb-10'>{home.contactContent}</p>
        <a
          href='mailto:support@gravityball.top'
          className='inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg transition'
        >
          support@gravityball.top
        </a>
      </section>

      <footer className='py-6 text-center text-gray-500 text-sm bg-white border-t border-gray-200'>
        © 2025 Gravity Ball. All rights reserved.
      </footer>
    </>
  )
}
