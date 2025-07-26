import { NextResponse } from 'next/server'

const SITE_URL = 'https://gravityball.top'
const locales = ['', 'zh']

export async function GET() {
  const today = new Date().toISOString().split('T')[0]

  const urls = locales
    .map(
      (locale) => `
      <url>
        <loc>${SITE_URL}/${locale}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    `
    )
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
