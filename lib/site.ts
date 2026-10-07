// Set NEXT_PUBLIC_SITE_URL once you have a custom domain; Vercel's production URL is used until then.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const SITE_NAME = 'GoldClass Chauffeur'
export const PHONE = '+13476352412'
export const WHATSAPP_URL = `https://wa.me/${PHONE.slice(1)}?text=Hi%20Abdul%2C%20I%27d%20like%20to%20book%20a%20ride`
