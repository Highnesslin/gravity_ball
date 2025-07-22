import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gravity Jumping Ball - Fun Physics Tap Game | Tapping Games & Ball Bouncing Adventure',
  keywords: 'Play Gravity Jumping Ball, a fun and addictive online physics tap game! Enjoy the thrilling challenge of this Ball Bouncing Game where you control a Jumping Ball through obstacles. Master gravity, test your reflexes, and experience an engaging brain-training puzzle. Perfect for fans of tapping games and casual online fun. No download needed, suitable for all ages.',
  description: 'tapping games, tap game, Ball Bouncing Game, Jumping Ball, Gravity Jumping Ball, fun tap games, online ball game, bouncing ball, addictive tap game, casual jumping game, online puzzle game, brain training game, casual physics game, free online game',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='text-gray-800 font-sans'>{children}</body>
      <script src="Build/GravityBall.loader.js"></script>
    </html>
  )
}
