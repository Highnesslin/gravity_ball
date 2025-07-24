'use client'

import React from 'react'
import Script from 'next/script'
import Fullscreen from './Fullscreen'
import screenfull from 'screenfull'
// import Online from './Online'

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
      screenfull.request(el)
    }
  }

  return (
    <>
      <Script
        id='core-asset'
        src='Build/GravityBall.loader.js'
        onLoad={() => {
          setStatus(STATUS.ALREADY)
          onPlay()
        }}
      ></Script>
      <section className='relative max-w-[90vw] w-20vh md:w-[88vh] h-[60vh] md:h-[82vh] mx-auto mt-[calc(var(--page-header-height)+20px)]  overflow-hidden md:rounded-md !rounded-b-none shadow-xl transition-all'>
        <canvas id='GameScene' className='absolute inset-0 size-full bg-black' />

        {(status === STATUS.LOADING ||
          status === STATUS.PREPARING ||
          status === STATUS.ALREADY) && (
          <div className='absolute inset-0 size-full z-10 flex items-center justify-center'>
            <div
              className='absolute inset-0 size-full bg-cover bg-center'
              style={{ backgroundImage: 'url(/snapshot.jpg)' }}
            />
            <div className='absolute inset-0 size-full z-10 bg-black/10' />
            {(status === STATUS.LOADING || status === STATUS.PREPARING) && (
              <div className='relative z-10 bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full text-center'>
                <p className='text-3xl font-bold text-sky-500'>Loading...</p>
              </div>
            )}
          </div>
        )}
      </section>
      <div className='flex justify-end items-center relative z-10 max-w-[90vw] w-20vh md:w-[88vh] mx-auto bg-gradient-to-b from-sky-100 to-white md:rounded-md !rounded-t-none p-2 shadow-md'>
        {/* <Online /> */}
        <Fullscreen className='cursor-pointer text-slate-800' onClick={onFullscreen} />
      </div>
    </>
  )
}
