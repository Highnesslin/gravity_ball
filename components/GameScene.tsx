'use client'

import React from 'react'
import Loading from './Loading'

enum STATUS {
  INIT = 0,
  LOADING = 1,
  COMPLETE = 2,
}

export default function GameScene() {
  const [status, setStatus] = React.useState(STATUS.INIT)
  const onPlay = async () => {
    setStatus(STATUS.LOADING)

    window
      .createUnityInstance(document.querySelector('#GameScene')!, {
        dataUrl: 'Build/GravityBall.data.unityweb',
        frameworkUrl: 'Build/GravityBall.framework.js.unityweb',
        codeUrl: 'Build/GravityBall.wasm.unityweb',
        streamingAssetsUrl: 'StreamingAssets',
        companyName: 'Lin',
        productName: 'Gravity Ball',
        productVersion: '1.0.0',
      })
      .then(() => {
        setTimeout(() => {
          setStatus(STATUS.COMPLETE)
        }, 2000)
      })
  }

  return (
    <section className='relative w-screen h-[calc(100vh-var(--page-header-height))] md:w-[80vh] mt-header mx-auto transition-[margin-top]'>
      <canvas id='GameScene' className='absolute inset-0 size-full bg-black' />
      {status === STATUS.LOADING ? (
        <div className='flex items-center justify-center absolute inset-0 size-full border border-solid border-slate-200 bg-white z-10'>
          <Loading className='size-20' />
        </div>
      ) : (
        status !== STATUS.COMPLETE && (
          <div
            className={
              'absolute inset-0 size-full flex items-center justify-center z-10 transition-all bg-white'
            }
          >
            <div className='h-64 text-center'>
              <h2 className='text-5xl font-bold mb-6 text-gray-900'>Bounce Your Way to Victory!</h2>
              <p className='max-w-xl mx-auto text-lg mb-8 text-gray-700'>
                Experience the thrill in this addictive tapping game. Guide your ball, avoid
                obstacles, and set new records!
              </p>
              <a
                href='#download'
                className='bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl text-lg font-medium transition'
                onClick={onPlay}
              >
                Play Now
              </a>
            </div>
          </div>
        )
      )}
    </section>
  )
}
