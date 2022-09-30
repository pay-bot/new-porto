import Head from 'next/head'

import Container from '@/components/ContainerBox'
import List from '@/components/Post/List'
import Pagination from '@/components/Pagination'
import Layout from '@/components/Layout/Default'

import { getPagedPost, getAvailablePage } from '@/lib/api'

export default function PagedPost ({ data, page, pages, next, prev }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Halaman {`${page} // mazipan.space`}</title>
        </Head>
        <Container>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-5 md:gap-y-8 mb-16">
              {data.length > 0 && <List posts={data} lang="id" />}
            </div>
          </section>

          <Pagination prev={prev} next={next} pages={pages} page={page} lang="id" />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps ({ params }) {
  const { data, next, prev, pages } = await getPagedPost(
    ['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags'],
    params.page,
    'id'
  )

  return {
    props: { data, page: `${params.page}`, next, prev, pages },
    revalidate: 3
  }
}

export async function getStaticPaths () {
  const pages = await getAvailablePage('id')

  return {
    paths: pages.map((page) => {
      return {
        params: {
          page: `${page}`
        }
      }
    }),
    fallback: false
  }
}
