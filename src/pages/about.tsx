import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';

export default function AboutPage() {
  const isLoaded = useLoaded();
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Alfian is a front-end developer that started learning in May 2020. He write blogs about his approach and mental model on understanding topics in front-end development.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout min-h-main py-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Fahri Alpiansyah</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <CloudinaryImg
                className='float-right ml-6 w-36 md:w-72'
                publicId='theodorusclarence/clarence_gu3cxx.jpg'
                width='1345'
                height='1511'
                alt='Photo of me'
                preview={false}
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>{t('about.p1')}</p>
                <p data-fade='4'>{t('about.p2')}</p>
                <p data-fade='5'>{t('about.p3')}</p>
              </article>
              <h3 className='mt-12'>Current Favorite Tech Stack</h3>
              <figure className='mt-2'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout py-6'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                Do contact me if you need my opinion about web development,
                especially frontend works. I’ll be happy to help! (find my email
                in the footer)
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
