import Head from 'next/head'

import Container from '@/components/ContainerBox'
import MoreStories from '@/components/Post/Home'
import Pagination from '@/components/Pagination'
import Layout from '@/components/Layout/Default'

import { getPagedPost, getFeaturedPost } from '@/lib/api'

export default function Index ({ data, page, pages, featured }) {
  return (
    <>
      <Layout>
        <Head>
          <title>🏠 Home of mazipan.space</title>
        </Head>
        <Container>
          <MoreStories posts={data} lang="en" />
          <Pagination next="2" pages={pages} page={page} lang="en" />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const { data, page, pages } = await getPagedPost(
    ['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags'],
    1,
    'en'
  )

  return {
    props: { data, page, pages }
  }
}
