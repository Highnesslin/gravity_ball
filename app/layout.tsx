import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gravity Ball - Fun Physics Tap Game | Gravity Jumping Ball Game |Tapping Games & Ball Bouncing Adventure',
  keywords: 'tapping games, tap game, Ball Bouncing Game, Jumping Ball, Gravity Jumping Ball, fun tap games, online ball game, bouncing ball, addictive tap game, casual jumping game, online puzzle game, brain training game, casual physics game, free online game',
  description: 'Play Gravity Ball, a fun online tap game! Guide a bouncing ball, master gravity, and enjoy the thrill of Gravity Jumping Ball. No download needed.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='text-gray-800 font-sans'>{children}</body>
    </html>
  )
}
