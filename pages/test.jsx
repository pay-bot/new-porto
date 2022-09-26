import React from 'react'

export default function test() {
  return (
    <div className="">
      <figure class="bg-slate-10i0 bg-slate-800  p-8 md:flex md:p-0">
        <div class="space-y-4 pt-6 text-center md:p-8 md:text-left">
          <p class="text-lg font-medium">“Tailwind CSS is the only framework .”</p>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-white">Staff Engineer, Algolia</div>
            <div className="flex  space-x-2">
              <Link href="/">
                <a className="rounded bg-blue-300 p-2">Read Post</a>
              </Link>

              <Link href="/">
                <a className="rounded bg-blue-300 p-2">Read Post</a>
              </Link>
            </div>
          </figcaption>
        </div>
        <Image
          class="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-none"
          src="/static/images/fahri.webp"
          alt=""
          width="384"
          height="512"
        />
      </figure>
    </div>
  )
}
