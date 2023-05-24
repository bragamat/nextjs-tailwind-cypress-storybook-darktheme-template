import { APP_NAME, APP_URL } from '@/constants/App'
import type { DefaultSeoProps } from 'next-seo'

export const DEFAULT_SEO = <DefaultSeoProps>{
  defaultTitle: `${APP_NAME}`,
  titleTemplate: `${APP_NAME} | %s`,
  description: `${APP_NAME} - some good description`,
  canonical: APP_URL,
  openGraph: {
    type: 'website',
    locale: 'en',
    url: APP_URL,
    title: APP_NAME,
    description: 'change-me-at-src/config/next-seo.config',
    site_name: APP_NAME,
  },
}

