import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/future/image'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import TypeIt from 'typeit-react'
import { useState, useEffect, useCallback } from 'react'

const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const [firsAction, setFirsAction] = useState(false)
  let timer1

  const clickHandler = useCallback(() => {
    timer1 = setTimeout(() => setFirsAction(true), 3000)
  }, []);

  useEffect(
    () => {
      clickHandler()
      return () => {
        clearTimeout(timer1)
      }
    },
    [clickHandler, firsAction, timer1])

  console.log(firsAction)

  function renderOpenDiv(cls) {
    return (
      <div className={['code', cls].join(' ')}>
        <span className="whitevs">{`<`}</span>
        <span className="redvs">div</span>{'  '}
        <span className="orangevs">className</span>
        <span className="bluevs">=</span>
        <span className="greenvs">""</span>
        <span className="whitevs">{`>`}</span>
      </div>
    )
  }

  function renderCloseDiv(cls) {
    return (

      <div className={['code', cls].join(' ')}>
        <span className="whitevs">{`</`}</span>
        <span className="redvs">div</span>{'  '}
        <span className="whitevs">{`>`}</span>
      </div>
    )
  }

  function renderP(htm) {
    return (
      <div className="code">
        <span className="whitevs">{`<`}</span>
        <span className="redvs">p</span>{'  '}
        <span className="orangevs">className</span>
        <span className="bluevs">=</span>
        <span className="greenvs">""</span>
        <span className="whitevs">{`>`}</span>
        <div className="code">
          <span className="whitevs">{`</`}</span>
          <span className="redvs">p</span>{'  '}
          <span className="whitevs">{`>`}</span>
        </div>
      </div>
    )
  }

  function renderOpenLink(htm) {
    return (
      <div className="code">
        <span className="whitevs">{`<`}</span>
        <span className="yellowvs">Link</span>{'  '}

        <span className="orangevs">href</span>
        <span className="bluevs">=</span>
        <span className="greenvs">""</span>
        <span className="whitevs">{`>`}</span>

      </div>
    )
  }
  function renderCloseLink(htm) {
    return (
      <div className="code">
        <span className="whitevs">{`</`}</span>
        <span className="yellowvs">Link</span>{'  '}
        <span className="whitevs">{`>`}</span>
      </div>
    )
  }

  function renderA(htm) {
    return (
      <div className="code">
        <span className="whitevs">{`<`}</span>
        <span className="redvs">a</span>{'  '}
        <span className="orangevs">className</span>
        <span className="bluevs">=</span>
        <span className="greenvs">""</span>
        <span className="whitevs">{`>`}</span>
        <div className="code">
          <span className="whitevs">{`</`}</span>
          <span className="redvs">a</span>{'  '}
          <span className="whitevs">{`>`}</span>
        </div>
      </div>
    )
  }

  function renderImage(htm) {
    return (
      <div className="code">
        <span className="whitevs">{`<`}</span>
        <span className="yellowvs">Image</span>{'  '}
        <span className="orangevs">className</span>
        <span className="bluevs">=</span>
        <span className="greenvs">""</span>{' '}
        <span className="orangevs">src</span>
        <span className="bluevs">=</span>
        <span className="greenvs">""</span>
        <span className="whitevs">{`/>`}</span>

      </div>
    )
  }



  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className=" flex h-[1200px] w-full">
        <div className=" w-full">
          <div className="grid grid-cols-2">
            <div className=" w-full  ">
              <div>
                <div className="flex space-x-3 bg-gray-400 px-2 py-1">
                  <img src="./static/images/vscode.svg" alt="" className="h-5 w-5" />
                  <div className="text-sm">File</div>
                  <div className="text-sm">Edit</div>
                  <div className="text-sm">Terminal</div>
                </div>
                <div className="w-full  py-1">
                  <div className="flex items-center">
                    <div className="flex w-fit items-center space-x-2 border-b border-white px-2 py-1">
                      <img src="./static/images/react.svg" alt="" className="h-4 w-4" />
                      <div className="text-sm">index.jsx</div>
                      <img src="./static/images/cross.svg" alt="" className="h-2 w-2" />
                    </div>
                  </div>
                </div>
                <div className="w-full ">
                  <div className="flex items-center space-x-1">
                    <div className="flex w-fit items-center  space-x-2 px-2 py-1">
                      {/* <img src="./static/images/react.svg" alt="" className="w-4 h-4" /> */}
                      <div className="text-sm">pages</div>
                      <img src="./static/images/right.svg" alt="" className="h-2 w-2" />
                    </div>
                    <div className="flex w-fit items-center space-x-2 ">
                      <img src="./static/images/react.svg" alt="" className="h-4 w-4" />
                      <div className="text-sm">index.jsx</div>
                      <img src="./static/images/right.svg" alt="" className="h-2 w-2" />
                    </div>
                    <div className="flex w-fit items-center space-x-2 ">
                      <img src="./static/images/cube.svg" alt="" className="h-4 w-4" />
                      <div className="text-sm">Home</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#282c35]">
                {/* <TypeIt
                  options={{
                    cursor: false,
                    speed: 35,
                    // lifeLike: true,
                    // loop: true,
                    loopDelay: 5000,
                    // startDelete: true,
                    startDelay: 1000,
                    // deleteSpeed: 35,
                    // waitUntilVisible: true,
                  }}
                > */}
                <div className="code">
                  <div className="flex items-center space-x-2">
                    <div className="text-purplevs">import</div>
                    <div className="text-redvs">React</div>
                    <div className="text-purplevs">from</div>
                    <div className="text-greenvs">'reactvs'</div>
                    <br></br>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="whitespacing text-purplevs ">export default function</div>

                    <div className="text-bluevs">Home</div>
                    <div className="text-orangevs">{`( ) {`}</div>
                  </div>
                  <div className="text-purplevs pl-4">{`return (`}</div>
                  <div className="code">
                    {renderOpenDiv('pl-8')}
                    {renderOpenDiv('pl-12')}
                    {renderOpenDiv('pl-16')}

                    {renderCloseDiv()}
                    {renderOpenDiv()}
                    {renderCloseDiv()}
                    {renderCloseDiv()}
                    {renderOpenDiv()}
                    {renderOpenLink()}
                    {renderA()}
                    {renderCloseLink()}
                    {renderOpenLink()}
                    {renderA()}
                    {renderCloseLink()}
                    {renderCloseDiv()}
                    {renderImage()}
                    {renderCloseDiv()}
                    {renderCloseDiv()}



                  </div>

                </div>
                {/* </TypeIt> */}
              </div>
            </div>
            <div className="w-full bg-white relative">
              <div className="text-black ">Chrome tools</div>
              <div className="flex items-center justify-center w-full p-4">
                <div class=" bg-slate-800  p-4 flex items-center space-x-4 rounded-xl flex items-center justify-center w-full">
                  <div class="space-y-3  text-center m md:text-left">
                    <p class="text-lg font-medium">
                      “Tailwind CSS is the only framework .”
                    </p>
                    <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                    <div class="text-white">
                      Staff Engineer, Algolia
                    </div>
                    <div className="flex  space-x-2">
                      <Link href="/">
                        <a className="rounded bg-blue-300 p-2 " >
                          Read Post
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="rounded bg-blue-300 p-2 " >
                          Read Post
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-full w-40 h-40 relative">
                    <Image
                      className="w-full h-full rounded-full object-cover object-top"
                      src="/static/images/fahri.jpeg"
                      alt=""
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                <div className="grid grid-cols-2 h-20 gap-x-[1px] w-full -mb-[76px] shadow-[0px_0px_30px_30px_rgba(0,0,0,0.3)] shadow-cyan-500/40">
                  <div className="w-full hfull bg-black"></div>
                  <div className="w-full hfull bg-slate-800 ">
                    <div className="absolute ml-2">
                      <div className="px-2 py-1">
                        <figure class=" flex justify-between">
                          <div class="space-y-1 pt-6 text-center md:p-1 md:text-left">
                            <p class="text-[5px] font-medium">
                              “Tailwind CSS is the only framework .”
                            </p>
                            <figcaption class="font-medium">
                              <div class="text-sky-500 dark:text-sky-400 text-[5px]">Sarah Dayan</div>
                              <div class="text-white text-[5px]">
                                Staff Engineer, Algolia
                              </div>
                              <div className="flex  space-x-1 mt-3">
                                <Link href="/">
                                  <a className="rounded-[2px] bg-blue-300 px-[1px] text-[5px]" >
                                    Read Post
                                  </a>
                                </Link>

                                <Link href="/">
                                  <a className="rounded-[2px] bg-blue-300 px-[1px] text-[5px]" >
                                    Read Post
                                  </a>
                                </Link>
                              </div>
                            </figcaption>
                          </div>
                          <Image
                            class=""
                            src="/static/images/fahri.webp"
                            alt=""
                            width="20"
                            height="20"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="mt-[50px]">
                      <div className="font-bold text-lg text-blue-700 text-center ">.</div>
                    </div>
                  </div>

                </div>
                <div
                  className="w-60 h-60 mx-auto">
                  <Image

                    src="/static/images/programer.png"
                    alt=""
                    width="350"
                    height="350"
                    layuot="fill"
                  // sizes="100vw"

                  // objectFit='contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* <Hero /> */}
      {/* <div className="container mx-auto divide-y divide-gray-700">
        <div className="my-4 flex flex-col">
          <span className="font-poppins title-font  text-3xl font-bold">Recent Posts</span>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 xl:grid-cols-3">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            const firstTwoTags = tags.slice(0, 2)
            return (
              <div
                key={slug}
                className="group bg-day relative h-full transform rounded-lg transition duration-500 hover:scale-105"
              >
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-green-600 to-amber-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <a className="c-card relative block h-full overflow-hidden rounded-lg bg-cardBg">
                  <div className="group relative max-h-4 overflow-hidden rounded-lg pb-60">
                    <Link href={`/blog/${slug}`}>
                      <span>
                        <img
                          alt={title}
                          src={images}
                          className="absolute inset-0 h-full w-full  object-cover "
                        />
                      </span>
                    </Link>
                  </div>
                  <div className="h-full py-4 px-2">
                    <span className="inline-flex w-full items-center justify-between">
                      <span className="inline-block rounded border border-gray-700 py-1 px-2 text-xs font-medium">
                        {firstTwoTags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </span>
                      <time dateTime={date}>{formatDate(date)}</time>
                    </span>
                    <h2 className="mt-2 mb-2 font-bold md:text-xl">
                      <Link href={`/blog/${slug}`} className="text-gray-100">
                        {title}
                      </Link>
                    </h2>
                    <p className="h-auto text-sm tracking-wider text-gray-300">{summary}</p>
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        {posts.length > MAX_DISPLAY && (
          <div className="mt-5 flex justify-end text-base font-medium leading-6">
            <Link href="/posts" className="mt-5 hover:text-primary-400" aria-label="all posts">
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>
      <RecentProjects MAX_PROJECTS="4" /> */}
    </>
  )
}
