'use client'

import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    if (isMenuOpen) {
      setIsVisible(true) // 展开时立刻显示
    } else {
      // 收起时延迟卸载，留动画时间
      const timeout = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className='bg-white bg-opacity-70 fixed top-0 w-full h-header transition-[height] z-50 overflow-visible shadow-md backdrop-blur'>
      <div className='relative max-w-7xl mx-auto px-4 bg-white sm:px-6 lg:px-8 z-10'>
        <div className='flex justify-between items-center py-4'>
          <div className='text-2xl font-bold text-sky-600'>{t('Common.brandName')}</div>
          <div className='hidden md:flex items-center space-x-8 text-sm font-medium'>
            <a href='#GameScene' className='hover:text-sky-600 transition'>
              {t('Menu.play')}
            </a>
            <a href='#introduce' className='hover:text-sky-600 transition'>
              {t('Menu.introduce')}
            </a>
            <a href='#features' className='hover:text-sky-600 transition'>
              {t('Menu.features')}
            </a>
            <a href='#contact' className='hover:text-sky-600 transition'>
              {t('Menu.contact')}
            </a>
            <LanguageSwitcher />
          </div>
          <div className='md:hidden flex items-center gap-3'>
            <LanguageSwitcher />
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

      {/* 移动端菜单 */}
      {isVisible && (
        <div
          className={`md:hidden bg-white px-4 pb-4
            ${isMenuOpen ? 'animate-slide-down-fade' : 'animate-slide-up-fade'}`}
        >
          <a
            href='#GameScene'
            className='block py-2 border-b border-gray-300 hover:text-sky-600'
            onClick={() => setIsMenuOpen(false)}
          >
            {t('Menu.play')}
          </a>
          <a
            href='#introduce'
            className='block py-2 border-b border-gray-300 hover:text-sky-600'
            onClick={() => setIsMenuOpen(false)}
          >
            {t('Menu.introduce')}
          </a>
          <a
            href='#features'
            className='block py-2 hover:text-sky-600'
            onClick={() => setIsMenuOpen(false)}
          >
            {t('Menu.features')}
          </a>
          <a
            href='#contact'
            className='block py-2 hover:text-sky-600'
            onClick={() => setIsMenuOpen(false)}
          >
            {t('Menu.contact')}
          </a>
        </div>
      )}
    </header>
  )
}
