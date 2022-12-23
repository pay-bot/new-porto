import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { InView } from 'react-intersection-observer';

import { trackEvent } from '@/lib/analytics';
import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx';
import { generateRss } from '@/lib/rss';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import BlogCard from '@/components/content/blog/BlogCard';
import ProjectCard from '@/components/content/projects/ProjectCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import MarbleGuest from '@/components/play/MarbleGuest';
import Seo from '@/components/Seo';

export default function IndexPage({
  featuredPosts,
  featuredProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const populatedPosts = useInjectContentMeta('blog', featuredPosts);
  const populatedProjects = useInjectContentMeta('projects', featuredProjects);

  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />

      <main>
        <section
          className={clsx(
            'min-h-main -mt-20 mb-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}
        >
          <article className='layout'>
            <div className='grid grid-cols-2 items-center'>
              <div className=''>
                <h2 className='text-2xl md:text-4xl 2xl:text-5xl' data-fade='1'>
                  Hi!
                </h2>
                <h1
                  className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'
                  data-fade='2'
                >
                  You can call me <Accent>Clarence</Accent>
                </h1>
                <p
                  className={clsx(
                    'mt-4 max-w-xl text-gray-700 dark:text-gray-200 md:mt-6',
                    'md:text-lg 2xl:text-xl'
                  )}
                  data-fade='3'
                >
                  I work with React Ecosystem, and write to teach people how to
                  rebuild and redefine,, fundamental concepts through mental
                  models.
                </p>

                <div
                  data-fade='5'
                  className='mt-8 flex flex-wrap gap-4 md:!text-lg'
                >
                  <div className='group relative'>
                    <div
                      className={clsx(
                        'absolute -inset-0.5 animate-tilt rounded blur',
                        'bg-gradient-to-r from-primary-300 to-primary-400',
                        'dark:from-primary-200 dark:via-primary-300',
                        'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                      )}
                    />
                    <ButtonLink href='#intro'>Read the blog</ButtonLink>
                  </div>
                  <ButtonLink href='/about'>Learn more about me</ButtonLink>
                </div>
                <div
                  data-fade='6'
                  className='mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8'
                >
                  <UnstyledLink
                    href='https://clarence.link/cv'
                    className={clsx(
                      'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                      'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                      'transition-colors'
                    )}
                    onClick={() => {
                      trackEvent('Social Link: Resume', 'link');
                    }}
                  >
                    <IoNewspaperSharp className='shrink-0' />
                    <span>Resume</span>
                  </UnstyledLink>
                  <UnstyledLink
                    href='https://twitter.com/th_clarence'
                    className={clsx(
                      'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                      'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                      'transition-colors'
                    )}
                    onClick={() => {
                      trackEvent('Social Link: Twitter', 'link');
                    }}
                  >
                    <SiTwitter className='shrink-0 transition-colors group-hover:text-[#1da1f2]' />
                    <span>@th_clarence</span>
                  </UnstyledLink>
                  <UnstyledLink
                    href='https://github.com/theodorusclarence'
                    className={clsx(
                      'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                      'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                      'transition-colors'
                    )}
                    onClick={() => {
                      trackEvent('Social Link: Github', 'link');
                    }}
                  >
                    <SiGithub className='shrink-0' />
                    <span>theodorusclarence</span>
                  </UnstyledLink>
                </div>
              </div>
              <div className='ml-auto overflow-hidden'>
                <MarbleGuest gameOn={true} />
              </div>
            </div>
          </article>
          <UnstyledLink
            href='#intro'
            className={clsx(
              'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
              'cursor-pointer rounded-md transition-colors',
              'hover:text-primary-300 focus-visible:text-primary-300'
            )}
          >
            <IoArrowDownOutline className='hidden h-8 w-8 animate-bounce md:block md:h-10 md:w-10' />
          </UnstyledLink>
        </section>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='blog'>
                  <Accent>Featured Posts</Accent>
                </h2>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedPosts.map((post, i) => (
                    <BlogCard
                      key={post.slug}
                      post={post}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/blog'
                  onClick={() => trackEvent('Home: See more post', 'navigate')}
                >
                  See more post
                </ButtonLink>
              </article>
            </section>
          )}
        </InView>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='projects'>
                  <Accent>Featured Projects</Accent>
                </h2>
                <p className='mt-2 text-gray-600 dark:text-gray-300'>
                  Some projects that I'm proud of
                </p>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedProjects.map((project, i) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/projects'
                  onClick={() =>
                    trackEvent('Home: See more project', 'navigate')
                  }
                >
                  See more project
                </ButtonLink>
              </article>
            </section>
          )}
        </InView>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  generateRss(locale);

  const blogs = await getAllFilesFrontmatter('blog', locale);
  const projects = await getAllFilesFrontmatter('projects', locale);

  const featuredPosts = getFeatured(blogs, [
    'swift-value-reference',
    'nextjs-storybook-tailwind',
    'react-core-concept-rendering-state',
    'nextjs-fetch-method',
    'one-stop-starter',
    '2021-retrospective',
  ]);
  const featuredProjects = getFeatured(projects, [
    'notiolink',
    'ppdbsumsel',
    'side-projects',
  ]);

  return {
    props: { featuredPosts, featuredProjects },
  };
}
