'use client'

import React from 'react'
import Script from 'next/script'
import Fullscreen from './Fullscreen'
import screenfull from 'screenfull'
import ProgressBar, { ProgressBarRef } from './ProgressBar'

enum STATUS {
  LOADING = 1, // 加载中
  LOADED = 2, // 加载完成
  PREPARING = 3, // 准备中
  READY = 4, // 准备完成
  COMPLETE = 5, // 最终完成
}

export default function GameScene() {
  const [status, setStatus] = React.useState(STATUS.LOADING)
  const progress = React.useRef<ProgressBarRef>(null)
  const onPlay = async () => {
    setStatus(STATUS.PREPARING)
    const startTime = performance.now()

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
        progress.current?.complete()
        setTimeout(() => {
          setStatus(STATUS.COMPLETE)
        }, 1000)

        const loadTime = Math.round(performance.now() - startTime)

        // ✅ 上传加载成功埋点，适合移动端和桌面
        window.gtag?.('event', 'game_loaded', {
          load_time_ms: loadTime,
          scene: 'GameScene',
          device_category: navigator.userAgent.match(/Mobi|Android|iPhone/i) ? 'mobile' : 'desktop',
        })
      })
      .catch(err => {
        window.gtag?.('event', 'game_load_error', {
          message: err?.message || 'Unknown error',
          scene: 'GameScene',
          device_category: navigator.userAgent.match(/Mobi|Android|iPhone/i) ? 'mobile' : 'desktop',
        })
        console.error('load failed:', err)
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
          onPlay()
        }}
      ></Script>
      <section className='relative w-full flex-1 overflow-hidden md:rounded-md !rounded-b-none shadow-xl transition-all'>
        <canvas id='GameScene' className='absolute inset-0 size-full bg-black' />

        {status !== STATUS.COMPLETE && (
          <div className='absolute inset-0 size-full z-10 flex items-center justify-center'>
            <img
              src='/snapshot.jpg'
              alt='Gravity Ball game cover with a bouncing ball in space'
              className='absolute inset-0 size-full object-cover blur-sm'
            />
            {/* <div className='absolute inset-0 size-full z-10 bg-sky-100/70' /> */}
            <ProgressBar ref={progress} />
          </div>
        )}
      </section>
      <div className='flex justify-end items-center relative z-10 w-full h-9 bg-gradient-to-b from-sky-100 to-white md:rounded-md !rounded-t-none p-2 shadow-md'>
        {/* <Online /> */}
        <Fullscreen className='cursor-pointer text-slate-800' onClick={onFullscreen} />
      </div>
    </>
  )
}
