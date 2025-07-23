'use client'

import React from 'react'
import Loading from './Loading'
import Script from 'next/script'

enum STATUS {
  INIT = 0,
  LOADING = 1,
  COMPLETE = 2,
}

export default function GameScene() {
  const [status, setStatus] = React.useState(STATUS.LOADING)
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
    <>
      <Script src='Build/GravityBall.loader.js' onLoad={onPlay}></Script>
      <section className='relative w-screen h-[calc(100vh-var(--page-header-height))] md:w-[80vh] mt-header mx-auto transition-[margin-top]'>
        <canvas id='GameScene' className='absolute inset-0 size-full bg-black' />
        {status === STATUS.LOADING && (
          <div className='flex items-center justify-center absolute inset-0 size-full border border-solid border-slate-200 bg-white z-10'>
            <Loading className='size-20' />
          </div>
        )}
      </section>
    </>
  )
}
