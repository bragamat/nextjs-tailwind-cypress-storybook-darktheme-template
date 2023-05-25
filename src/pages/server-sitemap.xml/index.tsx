import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { LoginDocument } from '@/hooks/graphql'
import { initializeGraphql } from '@/config/graphql'
import { APP_URL } from '@/constants/App'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const graphqlClient = initializeGraphql()

  const { data: pagesData } = await graphqlClient.query({
    query: LoginDocument,
    variables: { limit: 10 },
  })

  const pagesFields = pagesData.map((page: any) => ({
    loc: `${APP_URL}/${page?.attributes?.slug}`,
    lastmod: new Date().toISOString(),
  }))

  const fields: ISitemapField[] = [
    ...pagesFields,
  ]

  return getServerSideSitemap(ctx, fields)
}

export default function Site() { }
