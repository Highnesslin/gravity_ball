'use client'

import React from 'react'
import Loading from './Loading'
import Script from 'next/script'
import Fullscreen from './Fullscreen'
import screenfull from 'screenfull';

enum STATUS {
  INIT = 0,
  LOADING = 1,
  ALREADY = 2,
  PREPARING = 3,
  COMPLETE = 4,
}

export default function GameScene() {
  const [status, setStatus] = React.useState(STATUS.LOADING)
  const onPlay = async () => {
    setStatus(STATUS.PREPARING)

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
        setStatus(STATUS.COMPLETE)
      })
  }

  const onFullscreen = () => {
    const el = document.querySelector('#GameScene')
    if (screenfull.isEnabled && el) {
      screenfull.request(el);
    }
  }

  return (
    <>
      <Script
        src='Build/GravityBall.loader.js'
        onLoad={() => {
          setStatus(STATUS.ALREADY)
          onPlay()
        }}
      ></Script>
      <section className='relative max-w-[90vw] w-20vh md:w-[80vh] h-[70vh] md:h-[60vh] mx-auto mt-[calc(var(--page-header-height)+20px)]  overflow-hidden md:rounded-md !rounded-b-none shadow-xl transition-all'>
        <canvas id='GameScene' className='absolute inset-0 size-full bg-black' />

        {(status === STATUS.LOADING ||
          status === STATUS.PREPARING ||
          status === STATUS.ALREADY) && (
          <div className='absolute inset-0 size-full z-10 flex items-center justify-center'>
            <div
              className='absolute inset-0 size-full bg-cover bg-center'
              style={{ backgroundImage: 'url(/snapshot.jpg)' }}
            />
            <div className='absolute inset-0 size-full z-10 bg-black/40' />
            {(status === STATUS.LOADING || status === STATUS.PREPARING) && (
              <div className='relative z-10 bg-white/70 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 shadow-lg'>
                <Loading className='size-8 animate-spin stroke-white' />
                <span className='text-gray-800 font-medium'>Loading ...</span>
              </div>
            )}

            {/* {status === STATUS.ALREADY && (
              <button
                onClick={onPlay}
                className='relative z-10 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-lg font-semibold shadow-lg transition'
              >
                Play
              </button>
            )} */}
          </div>
        )}
      </section>
      <div className="flex justify-end items-center max-w-[90vw] w-20vh md:w-[80vh] mx-auto bg-gray-700/70 dark:bg-gray-800/70 text-white md:rounded-md !rounded-t-none p-2 shadow-md">
        <Fullscreen className='cursor-pointer text-white' onClick={onFullscreen} />
      </div>
    </>
  )
}
