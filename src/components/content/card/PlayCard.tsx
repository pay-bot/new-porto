import clsx from 'clsx';
import * as React from 'react';

import CloudinaryImg from '@/components/images/CloudinaryImg';
import UnstyledLink from '@/components/links/UnstyledLink';

import { BlogFrontmatter, InjectedMeta } from '@/types/frontmatters';

type BlogCardProps = {
  post: BlogFrontmatter & InjectedMeta;
  checkTagged?: (tag: string) => boolean;
} & React.ComponentPropsWithoutRef<'li'>;

export default function PlayCard({
  post,
  className,
  onClick,
}: BlogCardProps) {
  return (
    <li
      className={clsx(
        'w-full rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-dark',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
      onClick={onClick}
    >
      <UnstyledLink
        className='block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        href={`/blog/${post.slug}`}
      >
        <div className='relative'>
          <CloudinaryImg
            noStyle
            className='pointer-events-none overflow-hidden rounded-t-md'
            publicId={`theodorusclarence/banner/${post.banner}`}
            alt='Photo taken from unsplash'
            width={1200}
            height={(1200 * 2) }
            aspect={{ height: 3, width: 3 }}
            preview={false}
          />
        </div>
        <div className='p-4'>
          <h4 className='text-gray-800 dark:text-gray-100'>{post.title}</h4>
        </div>
      </UnstyledLink>
    </li>
  );
}
