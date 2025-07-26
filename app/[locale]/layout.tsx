import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import '../globals.css'

// TDK
export async function generateMetadata({
  params,
}: {
  params: { locale: 'en' | 'zh' }
}): Promise<Metadata> {
  const { locale } = await params
  if (!routing.locales.includes(locale)) notFound()

  const messages = await getMessages()
  const tdk = messages.Metadata
  const openGraph = messages.OpenGraph

  return {
    title: tdk.title,
    description: tdk.description,
    keywords: tdk.keywords,
    openGraph: {
      title: openGraph.title,
      description: openGraph.description,
      siteName: openGraph.siteName,
      url: 'https://gravityball.top',
      images: [
        {
          url: 'https://gravityball.top/snapshot2.png',
          width: 1225,
          height: 1504,
        },
      ],
      type: 'website',
    },
    metadataBase: new URL('https://gravityball.top'),
    alternates: {
      canonical: 'https://gravityball.top',
      languages: routing.locales.reduce((result, locale) => {
        result[locale] = 'https://gravityball.top/' + locale
        return result
      }, {} as Record<string, string>),
    },
  }
}

// SSG
export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

// Main
export default async function RootLayoutt({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()
  const jsonLD = messages.JsonLD

  return (
    <html className='scroll-smooth'>
      <NextIntlClientProvider messages={messages}>
        <head>
          <link rel='canonical' href='https://gravityball.top' />
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8439460293607938'
            crossOrigin='anonymous'
          ></script>
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                name: jsonLD.name,
                description: jsonLD.description,
                url: 'https://gravityball.top/',
                image: 'https://gravityball.top/snapshot2.png',
                applicationCategory: 'Game',
                operatingSystem: 'Web',
                author: {
                  '@type': 'Person',
                  name: 'Lin',
                },
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
              }),
            }}
          />
        </head>
        <body className='text-gray-800 font-sans'>
          {children}

          <Script id='core-asset' src='Build/GravityBall.loader.js' />
          {process.env.NODE_ENV !== 'development' && <GoogleAnalytics gaId={'G-KJQQX3Q1Q3'} />}
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
