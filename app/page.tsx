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
        className='py-20 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'
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

      <section className='py-20 bg-white text-center max-w-5xl mx-auto'>
        <h2 className='text-4xl font-bold mb-6 text-gray-900'>Similar Games You Might Like</h2>
        <p className='text-gray-600 text-lg'>Coming soon! Stay tuned for more exciting games.</p>
      </section>

      <footer className='py-6 text-center text-gray-500 text-sm bg-white border-t border-gray-200'>
        © 2025 Gravity Jumping. All rights reserved.
      </footer>
    </>
  )
}
