import GameScene from '@/components/GameScene'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />

      <GameScene />

      {/* <!-- Features Section --> */}
      <section
        id='features'
        className='my-20 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'
      >
        <div className='bg-white/90 p-6 rounded-xl shadow hover:scale-105 transition'>
          <h3 className='text-xl font-semibold mb-2 text-sky-600'>Gravity Flip Mechanics</h3>
          <p className='text-gray-600'>
            Tap to reverse gravity and dodge deadly traps in a constantly shifting world.
          </p>
        </div>
        <div className='bg-white/90 p-6 rounded-xl shadow hover:scale-105 transition'>
          <h3 className='text-xl font-semibold mb-2 text-sky-600'>Speed Builds Fast</h3>
          <p className='text-gray-600'>
            Every second counts. The longer you survive, the faster it gets. No brakes, no mercy.
          </p>
        </div>
        <div className='bg-white/90 p-6 rounded-xl shadow hover:scale-105 transition'>
          <h3 className='text-xl font-semibold mb-2 text-sky-600'>Endless Jump Challenge</h3>
          <p className='text-gray-600'>
            Master the rhythm. Reach farther. Climb the leaderboard and prove your skill.
          </p>
        </div>
      </section>

      {/*  */}
      <section
        id='introduce'
        className='my-20 bg-gradient-to-b from-white via-sky-50 to-white text-center px-6'
      >
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-5xl font-extrabold mb-6 text-sky-600'>What is Gravity Ball?</h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            <span className='font-semibold text-sky-700'>Gravity Ball</span> is a fun and casual
            cartoon-style puzzle game featuring realistic physics! With its clean and charming
            visuals, it’s perfect for passing the time. The addictive gameplay will keep you hooked
            — control the ball to bounce by hitting white balls and avoid touching any black areas,
            or it's game over.
          </p>
          <p className='mt-4 text-gray-700 text-lg leading-relaxed'>How far can your ball go?</p>
        </div>
      </section>

      <footer className='py-6 text-center text-gray-500 text-sm bg-white border-t border-gray-200'>
        © 2025 Gravity Ball. All rights reserved.
      </footer>
    </>
  )
}
