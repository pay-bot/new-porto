import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useCookies } from 'react-cookie';

import Accent from '@/components/Accent';
import UnstyledLink from '@/components/links/UnstyledLink';

import ThemeButton from '../buttons/ThemeButton';

type HeaderProps = {
  large?: boolean;
};

const languageNames = {
  en: 'EN 🇬🇧',
  id: 'ID 🇮🇩',
};

export default function Header({ large = false }: HeaderProps) {
  //#region  //*=========== Route Functionality ===========
  const router = useRouter();
  /** Ex: /projects/petrolida-2021 -> ['', 'projects', 'petrolida-2021'] */
  const arrOfRoute = router.route.split('/');
  const baseRoute = '/' + arrOfRoute[1];
  //#endregion  //*======== Route Functionality ===========

  //#region  //*=========== Scroll Shadow ===========
  const [onTop, setOnTop] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //#endregion  //*======== Scroll Shadow ===========
  const [cookie, setCookie] = useCookies(['NEXT_LOCALE']);
  const { asPath, locale: activeLocale, locales } = useRouter();
  console.log('🚀 ~ file: Header.tsx:42 ~ Header ~ activeLocale', activeLocale);

  function handleCheckedChange(value) {
    if (cookie.NEXT_LOCALE !== value) {
      setCookie('NEXT_LOCALE', value, { path: '/' });
      router.push(asPath, undefined, { locale: value });
    }
    router.push(asPath, undefined, { locale: value });
  }

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 bg-transparent transition-shadow',
        !onTop && 'shadow-sm'
      )}
    >
      {/* Skip Navigation */}
      <a
        href='#skip-nav'
        className={clsx(
          'rounded-sm p-2 transition',
          'font-medium text-black dark:text-white',
          'bg-white dark:bg-dark',
          'group dark:hover:text-primary-300',
          'focus:outline-none focus:ring focus:ring-primary-300',
          'absolute top-4 left-4',
          '-translate-y-16 focus:translate-y-0'
        )}
      >
        <Accent>Skip to main content</Accent>
      </a>

      {/* Gradient List */}
      <div className='h-2 bg-gradient-to-tr from-primary-200 via-primary-300 to-primary-400' />

      <div
        className={
          !onTop
            ? 'bg-white transition-colors dark:bg-dark dark:text-white'
            : 'bg-white/0 transition-colors dark:bg-dark/0 dark:text-white'
        }
      >
        <nav
          className={clsx(
            'layout flex items-center justify-between py-4',
            large && 'lg:max-w-[68rem]'
          )}
        >
          <ul className='flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsx(
                    'rounded-sm py-2 transition-colors',
                    'font-medium text-black dark:text-white',
                    'group dark:hover:text-primary-300',
                    'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
                  )}
                >
                  <span
                    className={clsx(
                      'transition-colors',
                      'bg-primary-300/0 group-hover:bg-primary-300/20 dark:group-hover:bg-primary-300/0',
                      href === baseRoute &&
                        '!bg-primary-300/50 dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent'
                    )}
                  >
                    {label}
                  </span>
                </UnstyledLink>
              </li>
            ))}
          </ul>
          <div className='flex items-center space-x-4'>
            <select
              name='locales'
              onChange={(event) => handleCheckedChange(event.target.value)}
              defaultValue={activeLocale}
              className='bg-gray-600 text-sm'
            >
              {locales.map((locale) => (
                <option key={locale} value={locale}>
                  {languageNames[locale]}
                </option>
              ))}
            </select>
            <ThemeButton />
          </div>
        </nav>
      </div>
    </header>
  );
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/library', label: 'Library' },
  { href: '/about', label: 'About' },
];
