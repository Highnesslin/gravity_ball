import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import Head from 'next/head'
import './globals.css'

export const metadata: Metadata = {
  title:
    'Gravity Ball - Fun Physics Tap Game | Gravity Jumping Ball Game |Tapping Games & Ball Bouncing Adventure',
  keywords:
    'tapping games, tap game, Ball Bouncing Game, Jumping Ball, Gravity Jumping Ball, fun tap games, online ball game, bouncing ball, addictive tap game, casual jumping game, online puzzle game, brain training game, casual physics game, free online game, Leap On play online, Leap On browser game',
  description:
    'Play Gravity Ball, a fun online tap game! Guide a bouncing ball, master gravity, and enjoy the thrill of Gravity Jumping Ball. No download needed.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className='scroll-smooth'>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Gravity Ball',
              url: 'https://gravityball.top/',
              description:
                'Play Gravity Jumping Ball, a fun and addictive browser tap game. Bounce through obstacles in this thrilling challenge!',
              image: 'https://gravityball.top/snapshot2.jpg',
              applicationCategory: 'Game',
              operatingSystem: 'Web',
              author: {
                '@type': 'Person',
                name: 'Lin',
              },
            }),
          }}
        />
      </Head>
      <body className='text-gray-800 font-sans'>{children}</body>
      <Script id='core-asset' src='Build/GravityBall.loader.js' />
      <GoogleAnalytics gaId={'G-KJQQX3Q1Q3'} />
    </html>
  )
}
