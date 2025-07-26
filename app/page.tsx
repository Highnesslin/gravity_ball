import GameScene from '@/components/GameScene'
import GoogleAd from '@/components/GoogleAd'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />

      <section className='flex justify-center gap-2 w-full h-[66vh] md:h-[88vh] mx-auto mt-[calc(var(--page-header-height)+20px)] overflow-hidden'>
        <div className='hidden md:block md:flex-1'>
          {/* 广告位 */}
        </div>
        <div className='flex flex-col w-full max-w-[90vw] md:w-[88vh] '>
          <GameScene />
        </div>
        <div className='hidden md:block md:flex-1'>
          {/* 广告位 */}
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section
        id='features'
        className='my-10 md:my-20 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'
      >
        <div className='bg-white/90 p-6 rounded-xl shadow hover:scale-105 transition'>
          <h3 className='text-xl font-semibold mb-2 text-sky-600'>Play Anytime, Totally Free</h3>
          <p className='text-gray-600'>
            No login, no download, no paywall. Just tap and play instantly — pure fun with zero
            cost.
          </p>
        </div>
        <div className='bg-white/90 p-6 rounded-xl shadow hover:scale-105 transition'>
          <h3 className='text-xl font-semibold mb-2 text-sky-600'>Gravity Flip Mechanics</h3>
          <p className='text-gray-600'>
            Tap to reverse gravity and dodge deadly traps in a constantly shifting world.
          </p>
        </div>
        <div className='bg-white/90 p-6 rounded-xl shadow hover:scale-105 transition'>
          <h3 className='text-xl font-semibold mb-2 text-sky-600'>Endless Jump Challenge</h3>
          <p className='text-gray-600'>
            Master the rhythm. Reach farther. Climb the leaderboard and prove your skill.
          </p>
        </div>
      </section>

      {/* introduce */}
      <section
        id='introduce'
        className='my-10 md:my-20 bg-gradient-to-b from-white via-sky-50 to-white text-center px-6'
      >
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-5xl font-extrabold mb-6 text-sky-600'>What is Gravity Ball?</h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            <span className='font-semibold text-sky-700'>Gravity Ball</span>
            is a fun and casual cartoon-style puzzle game featuring realistic physics! Enjoy this
            fast-paced online game with clean and charming visuals — perfect for killing time
            anywhere, anytime. The addictive gameplay will keep you hooked: control the ball to
            bounce by hitting white balls and avoid the black zones — or it’s game over.
          </p>
          <p className='mt-4 text-gray-700 text-lg leading-relaxed'>How far can your ball go?</p>
        </div>
      </section>

      {/* contact */}
      <section
        id='contact'
        className='my-10 md:my-20 bg-white bg-opacity-90 px-6 py-16 max-w-4xl mx-auto text-center'
      >
        <h2 className='text-4xl font-extrabold mb-6 text-sky-600'>Get in Touch</h2>
        <p className='text-gray-700 text-lg max-w-xl mx-auto mb-10'>
          Have any questions, feedback, or ideas? We’d love to hear from you!
        </p>
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
