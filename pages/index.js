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

  function renderOpenDiv(cls, txtClass) {
    return (
      <div className={['code', cls].join(' ')}>
        <span className="whitevs">{`<`}</span>
        <span className="redvs">div</span>{'  '}
        <span className="orangevs">className</span>
        <span className="bluevs">=</span>
        <span className="greenvs">"{txtClass}"</span>
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

  function renderP(str) {
    console.log(str)
    return (
      <div className="code">
        <span className="whitevs">{`<`}</span>
        <span className="redvs">p</span>{'  '}
        <span className="orangevs">className</span>
        <span className="bluevs">=</span>
        <span className="greenvs">""</span>
        <span className="whitevs">{`>`}</span>
        <span className="whitevs">{str}</span>
        <span className="whitevs">{`</`}</span>
        <span className="redvs">p</span>{'  '}
        <span className="whitevs">{`>`}</span>
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

  function renderA(cls) {
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

  function renderClass(txtClass) {
    return (
      <span className="greenvs">{txtClass}</span>

    )
  }

  const secondMoni = <div className="border-x-1 border-t-1 border-b-4 border-black border h-full bg-white">
    <div className="flex items-center justify-center w-full px-1 h-full">
      <div class=" bg-slate-800  p-1 flex items-center space-x-1 rounded flex items-center justify-center w-full">
        <div class="space-y-1  text-center m md:text-left">
          <p class="text-[4px] font-medium">
            “Next JS & Tailwind For The Win .”
          </p>
          <div class="text-sky-500 dark:text-sky-400 text-[4px]">Sarah Dayan</div>
          <div class="text-white text-[4px]">
            Staff Engineer, Algolia
          </div>
          <div className="flex  space-x-1">
            <Link href="/">
              <a className="rounded-[2px] bg-blue-300 p-[2px] text-[4px]" >
                Read the blog
              </a>
            </Link>
            <Link href="/">
              <a className="rounded-[2px] bg-blue-300 p-[2px] text-[4px]" >
                Leran more about me
              </a>
            </Link>
          </div>
        </div>
        <div className="rounded-full w-8 h-8 relative">
          <Image
            className="w-full h-full rounded-full object-cover object-top"
            src="/static/images/fahrri.jpeg"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
    <div className="-mt-4  ">
      <div className="font-bold text-lg text-white text-center animate-pulse ">.</div>
    </div>
  </div>


  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className=" flex h-[660px] max-w-[1366px] mx-auto">
        <div className=" w-full">
          <div className="grid grid-cols-2">
            <div className="bg-[#282c34]   overflow-x-auto">
              <div>
                <div className="flex space-x-3 bg-[#21252b] px-2 py-1 ">
                  <img src="./static/images/vscode.svg" alt="" className="h-5 w-5" />
                  <div className="text-sm">File</div>
                  <div className="text-sm">Edit</div>
                  <div className="text-sm">Terminal</div>
                </div>
                <div className="w-full  py-1 bg-[#21252b]">
                  <div className="flex items-center bg-[#282c34] w-fit border-r border-black">
                    <div className="flex w-fit items-center space-x-2 border-b border-white px-2 py-1">
                      <img src="./static/images/react.svg" alt="" className="h-4 w-4" />
                      <div className="text-sm">index.jsx</div>
                      <img src="./static/images/cross.svg" alt="" className="h-2 w-2" />
                    </div>
                  </div>
                </div>
                <div className="h-[550px] w-full   ">
                  <div className="   border-b border-gray-800">
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
                  <div className="bg-[#282c34] flex">
                    <div className="px-2">
                      {Array.from({ length: 40 }, (_, x) => (
                        <div className="code text-whitevs">{x > 0 && x}</div>

                      ))}

                    </div>
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
                    <div className="code w-[683px]">
                      <div className="flex items-center space-x-2">
                        <div className="text-purplevs">import </div>
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
                      <div className="code whitespace-nowrap">
                        {renderOpenDiv('pl-8', renderClass(<TypeIt>mx-auto mt-6  flex w-[550px] items-center justify-center space-x-4 rounded-xl bg-slate-800 p-4</TypeIt>))}
                        {renderOpenDiv('pl-12')}
                        <div className="pl-16">
                          {renderP(<TypeIt>“Next JS & Tailwind For The Win .”</TypeIt>)}
                          {renderP(<TypeIt>Sarah Dayan</TypeIt>)}
                          {renderP(<TypeIt>Staff Engineer, Algolia</TypeIt>)}
                          {renderOpenDiv('')}
                          <div className="pl-4">
                            {renderOpenLink()}
                            <div className="pl-4">
                              {renderA('pl-4')}
                            </div>
                            {renderCloseLink()}
                            {renderOpenLink()}
                            <div className="pl-4">
                              {renderA('pl-4')}
                            </div>
                            {renderCloseLink()}
                          </div>
                          {renderCloseDiv()}
                        </div>
                        <div className="pl-12">
                          {renderOpenDiv('')}
                          <div className="pl-4">
                            {renderImage()}
                          </div>
                          {renderCloseDiv()}
                        </div>
                        <div className="pl-8">
                          {renderCloseDiv()}
                        </div>



                      </div>

                    </div>
                    {/* </TypeIt> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  relative ">
              <div className="bg-white p-1 h-[280px]">
                <div className="h-[30px]">
                  <div className="bg-[#f1f3f4] w-full rounded-xl text-sm py-1 px-3 text-black">http://localhost:3000/</div>
                </div>
                <div class=" bg-slate-800 p-4  space-x-4 rounded-xl flex items-center justify-center w-[550px] mx-auto mt-6">
                  <div class=" ">
                    <p class="text-lg font-medium">
                      “Next JS & Tailwind For The Win .”
                    </p>
                    <div class="text-sky-500 dark:text-sky-400 mt-3">Sarah Dayan</div>
                    <div class="text-white">
                      Staff Engineer, Algolia
                    </div>
                    <div className="flex  space-x-2 mt-3">
                      <Link href="/">
                        <a className="rounded bg-blue-300 p-2 " >
                          Read the blog
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="rounded bg-blue-300 p-2 " >
                          Leran about me
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className=" w-40 h-40 relative">
                    <Image
                      className="w-full h-full rounded-full object-cover object-top"
                      src="/static/images/fahrri.jpeg"
                      alt=""
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className='p-2 bg-black bg-opacity-10 h-[360px]'>
                <div className="h-[60px]">t</div>
                <div className="h-[60px]">t</div>
                <div className="h-[240px] flex justify-center items-end relative">
                  <div className="">
                    <div className="grid grid-cols-2 h-20 gap-x-[1px] w-full -mb-[77px]  blink-bg">
                      <div className="w-full hfull bg-black border-2 border-black"></div>
                      {secondMoni}

                    </div>
                    <div
                      className="w-60 h-60 mx-auto relative">
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
          </div>
        </div>
      </div >



    </>
  )
}
