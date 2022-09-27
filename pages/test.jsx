import React from "react";

export default function test() {
  return (
    <div class=" mx-auto mt-6  flex w-[550px] items-center justify-center space-x-4 rounded-xl bg-slate-800 p-4">
      <div class=" ">
        <p class="text-lg font-medium">“Next JS & Tailwind For The Win .”</p>
        <div class="mt-3 text-sky-500 dark:text-sky-400">Sarah Dayan</div>
        <div class="text-white">Staff Engineer, Algolia</div>
        <div className="mt-3  flex space-x-2">
          <Link href="/">
            <a className="rounded bg-blue-300 p-2 ">Read the blog</a>
          </Link>
          <Link href="/">
            <a className="rounded bg-blue-300 p-2 ">Leran more about me</a>
          </Link>
        </div>
      </div>
      <div className=" relative h-40 w-40">
        <Image
          className="h-full w-full rounded-full object-cover object-top"
          src="/static/images/fahrri.jpeg"
          alt=""
          fill
        />
      </div>
    </div>
  );
}
