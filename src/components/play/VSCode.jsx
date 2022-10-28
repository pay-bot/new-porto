/* eslint-disable */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';

import dynamic from 'next/dynamic';
const CustomTypeIt = dynamic(() => import('@/components/play/CustomTypeIt'), {
  ssr: false,
});

const ln6ClassVariants = {
  initial: { height: 0, top: -180, opacity: 0 },
  animate: {
    height: 180,
    top: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.2, ease: 'easeInOut' },
  },
};

const ln6ClassVariantsMini = {
  initial: { height: 0, top: -85, opacity: 0 },
  animate: {
    height: 50,
    top: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.2, ease: 'easeInOut' },
  },
};

const ln8TextVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 1, duration: 0.2, ease: 'easeInOut' },
  },
};
const ln9TextVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.8, duration: 0.2, ease: 'easeInOut' },
  },
};
const ln10TextVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.8, duration: 0.2, ease: 'easeInOut' },
  },
};
const ln13TextVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.8, duration: 0.2, ease: 'easeInOut' },
  },
};

const ln23SrcVariants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    borderRadius: '100%',
    transition: { delay: 3, duration: 0.5, ease: 'easeInOut' },
  },
};
const textVariantsMini = {
  initial: { x: -5, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.8, duration: 0.2, ease: 'easeInOut' },
  },
};

function renderImport(param1, param2, mini) {
  return (
    <div
      className={[
        'flex items-center',
        mini ? 'space-x-[2px]' : 'space-x-2',
      ].join(' ')}
    >
      <div className={['text-purplevs', mini && 'text-[2px] '].join(' ')}>
        import{' '}
      </div>
      <div className={['text-redvs', mini && 'text-[2px] '].join(' ')}>
        {param1}
      </div>
      <div className={['text-purplevs', mini && 'text-[2px] '].join(' ')}>
        from
      </div>
      <div className={['text-greenvs', mini && 'text-[2px] '].join(' ')}>
        '{param2}'
      </div>
      {!mini && <br></br>}
    </div>
  );
}

function renderOpenDiv(strClass, mini) {
  return (
    <div className={mini ? 'code-mini' : 'code'}>
      <span
        className={['whitevs', mini && 'text-[2px] text-white'].join(' ')}
      >{`<`}</span>
      <span className={['redvs', mini && 'text-[2px] text-white'].join(' ')}>
        div
      </span>
      {'  '}
      <span className={['orangevs', mini && 'text-[2px] text-white'].join(' ')}>
        className
      </span>
      <span className={['bluevs', mini && 'text-[2px] text-white'].join(' ')}>
        =
      </span>
      <span className={['greenvs', mini && 'text-[2px] text-white'].join(' ')}>
        "{strClass}"
      </span>
      <span
        className={['whitevs', mini && 'text-[2px] text-white'].join(' ')}
      >{`>`}</span>
    </div>
  );
}

function renderCloseDiv(mini) {
  return (
    <div className={mini ? 'code-mini' : 'code'}>
      <span className='whitevs'>{`</`}</span>
      <span className='redvs'>div</span>
      {'  '}
      <span className='whitevs'>{`>`}</span>
    </div>
  );
}

function renderP(strClass, strText, mini) {
  return (
    <div className={mini ? 'code-mini' : 'code'}>
      <span
        className={['whitevs', mini && 'text-[2px] text-white'].join(' ')}
      >{`<`}</span>
      <span className={['redvs', mini && 'text-[2px] text-white'].join(' ')}>
        p
      </span>
      {'  '}
      <span className={['orangevs', mini && 'text-[2px] text-white'].join(' ')}>
        className
      </span>
      <span className={['bluevs', mini && 'text-[2px] text-white'].join(' ')}>
        =
      </span>
      <span className={['greenvs', mini && 'text-[2px] text-white'].join(' ')}>
        "{strClass}"
      </span>
      <span
        className={['whitevs', mini && 'text-[2px] text-white'].join(' ')}
      >{`>`}</span>
      <span className={['whitevs', mini && 'text-[2px] text-white'].join(' ')}>
        {strText}
      </span>
      <span
        className={['whitevs', mini && 'text-[2px] text-white'].join(' ')}
      >{`</`}</span>
      <span className={['redvs', mini && 'text-[2px] text-white'].join(' ')}>
        p
      </span>
      {'  '}
      <span
        className={['whitevs', mini && 'text-[2px] text-white'].join(' ')}
      >{`>`}</span>
    </div>
  );
}

function renderOpenLink(strLink, mini) {
  return (
    <div className={mini ? 'code-mini' : 'code'}>
      <span className='whitevs'>{`<`}</span>
      <span className='yellowvs'>Link</span>
      {'  '}

      <span className='orangevs'>href</span>
      <span className='bluevs'>=</span>
      <span className='greenvs'>"{strLink}"</span>
      <span className='whitevs'>{`>`}</span>
    </div>
  );
}
function renderCloseLink(mini) {
  return (
    <div className={mini ? 'code-mini' : 'code'}>
      <span className='whitevs'>{`</`}</span>
      <span className='yellowvs'>Link</span>
      {'  '}
      <span className='whitevs'>{`>`}</span>
    </div>
  );
}

function renderA(strClass, strText, mini) {
  return (
    <div className={mini ? 'code-mini' : 'code'}>
      <span className='whitevs'>{`<`}</span>
      <span className='redvs'>a</span>
      {'  '}
      <span className='orangevs'>className</span>
      <span className='bluevs'>=</span>
      <span className='greenvs'>"{strClass}"</span>
      <span className='whitevs'>
        {`>`}
        {strText}
      </span>
      <span className='whitevs'>{`</`}</span>
      <span className='redvs'>a</span>
      {'  '}
      <span className='whitevs'>{`>`}</span>
    </div>
  );
}

function renderImage(strClass, strSrc, strAlt) {
  return (
    <div className='code'>
      <span className='whitevs'>{`<`}</span>
      <span className='yellowvs'>Image</span>
      {'  '}
      <div className='code pl-3'>
        <span className='orangevs'>className</span>
        <span className='bluevs'>=</span>
        <span className='greenvs'>"{strClass}"</span>{' '}
        <div className='code'>
          <span className='orangevs'>src</span>
          <span className='bluevs'>=</span>
          <span className='greenvs'>"{strSrc}"</span>
        </div>
        <span className='orangevs'>fill</span>
      </div>
      <span className='whitevs'>{`/>`}</span>
    </div>
  );
}

function renderClass(txtClass) {
  return <span className='greenvs'>{txtClass}</span>;
}

const delay = 1;

export default function VSCode({
  type,
  gameOn,
  setInitVsCodeDone,
  setResetVsCode,
  talkingOn,
  resetVsCode,
}) {
  const [counter, setCounter] = useState(0);
  const [countVsCode, setCountVsCode] = useState(false);

  const [line6Class, setLine6Class] = useState(false);
  const [line8Class, setLine8Class] = useState(false);
  const [line8Text, setLine8Text] = useState(false);
  const [line9Class, setLine9Class] = useState(false);
  const [line9Text, setLine9Text] = useState(false);
  const [line10Class, setLine10Class] = useState(false);
  const [line10Text, setLine10Text] = useState(false);
  const [line11Class, setLine11Class] = useState(false);
  const [line12Text, setLine12Text] = useState(false);
  const [line13Class, setLine13Class] = useState(false);
  const [line13Text, setLine13Text] = useState(false);
  const [line15Text, setLine15Text] = useState(false);
  const [line16Class, setLine16Class] = useState(false);
  const [line16Text, setLine16Text] = useState(false);
  const [line20Class, setLine20Class] = useState(false);
  const [line22Class, setLine22Class] = useState(false);
  const [line23Text, setLine23Text] = useState(false);
  const timer = useRef(null); // we can save timer in useRef and pass it to child
  useEffect(() => {
    if (resetVsCode) {
      setCountVsCode(false);
      setInitVsCodeDone(false);
      setLine6Class(false);
      setLine8Class(false);
      setLine8Text(false);
      setLine9Class(false);
      setLine9Text(false);
      setLine10Class(false);
      setLine10Text(false);
      setLine11Class(false);
      setLine12Text(false);
      setLine13Class(false);
      setLine13Text(false);
      setLine15Text(false);
      setLine16Class(false);
      setLine16Text(false);
      setLine20Class(false);
      setLine22Class(false);
      setLine23Text(false);
      setCounter(0);
      // clearInterval(timer.current)
      // timer.current = setInterval(() => setCounter((v) => v + 1), delay * 500)
    }
  }, [resetVsCode]);

  useEffect(() => {
    if (counter) {
      switch (counter) {
        case 1:
          setLine6Class(true);
          break;
        case 13:
          setLine8Class(true);
          break;
        case 16:
          setLine8Text(true);
          break;
        case 20:
          setLine9Class(true);
          break;
        case 23:
          setLine9Text(true);
          break;
        case 26:
          setLine10Class(true);
          break;
        case 29:
          setLine10Text(true);
          break;
        case 32:
          setLine11Class(true);
          break;
        case 35:
          setLine12Text(true);
          break;
        case 38:
          setLine13Class(true);
          break;
        case 41:
          setLine13Text(true);
          break;
        case 44:
          setLine15Text(true);
          break;
        case 47:
          setLine16Class(true);
          break;
        case 51:
          setLine16Text(true);
          break;
        case 54:
          setLine20Class(true);
          break;
        case 57:
          setLine22Class(true);
          break;
        case 63:
          setLine23Text(true);
          break;
        case 70:
          // setCountVsCode(true)
          setInitVsCodeDone(true);
          localStorage.setItem('vsCodeCount', true);
          setResetVsCode(false);
          break;
        default:
          break;
      }
    }
  }, [counter]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCountVsCode(JSON.parse(localStorage.getItem('vsCodeCount')));
    }
  }, []);
  const handleVsCode = () => {
    clearInterval(timer.current);
    setLine6Class(false);
    setLine8Class(false);
    setLine8Text(false);
    setLine9Class(false);
    setLine9Text(false);
    setLine10Class(false);
    setLine10Text(false);
    setLine11Class(false);
    setLine12Text(false);
    setLine13Class(false);
    setLine13Text(false);
    setLine15Text(false);
    setLine16Class(false);
    setLine16Text(false);
    setLine20Class(false);
    setLine22Class(false);
    setLine23Text(false);
    timer.current = setInterval(() => setCounter((v) => v + 1), delay * 500);
    // return () => {
    //   clearInterval(timer.current)
    // }
  };

  useEffect(() => {
    // useRef value stored in .current property

    if (countVsCode) {
      setLine6Class(true);
      setLine8Class(true);
      setLine8Text(true);
      setLine9Class(true);
      setLine9Text(true);
      setLine10Class(true);
      setLine10Text(true);
      setLine11Class(true);
      setLine12Text(true);
      setLine13Class(true);
      setLine13Text(true);
      setLine15Text(true);
      setLine16Class(true);
      setLine16Text(true);
      setLine20Class(true);
      setLine22Class(true);
      setLine23Text(true);
      setInitVsCodeDone(true);
    }
    if (!countVsCode) {
      timer.current = setInterval(() => setCounter((v) => v + 1), delay * 500);

      // clear on component unmount
      return () => {
        clearInterval(timer.current);
      };
    }
  }, [countVsCode, resetVsCode]);

  useEffect(() => {
    if (counter < 70) return;

    clearInterval(timer.current);
  }, [counter]);

  const VSCodeBig = (
    <div
      className={`h-[640px]'   overflow-x-auto bg-[#282c34]
      `}
    >
      <div>
        <div className='flex space-x-3 bg-[#21252b] px-2 py-1 '>
          <img src='./static/images/vscode.svg' alt='' className='h-5 w-5' />
          <div className='text-sm text-white'>File</div>
          <div className='text-sm text-white'>Edit</div>
          <div className='text-sm text-white'>Terminal</div>
        </div>
        <div className='w-full  bg-[#21252b] py-1'>
          <div className='flex w-fit items-center border-r border-black bg-[#282c34]'>
            <div className='flex w-fit items-center space-x-2 border-b border-white px-2 py-1'>
              <img src='./static/images/react.svg' alt='' className='h-4 w-4' />
              <div className='text-sm text-white'>index.jsx</div>
              <img src='./static/images/cross.svg' alt='' className='h-2 w-2' />
            </div>
          </div>
        </div>
        <div className='h-[550px] w-full   '>
          <div className='   border-b border-gray-800'>
            <div className='flex items-center space-x-1'>
              <div className='flex w-fit items-center  space-x-2 px-2 py-1'>
                {/* <img src="./static/images/react.svg" alt="" className="w-4 h-4" /> */}
                <div className='text-sm text-white'>pages</div>
                <img
                  src='./static/images/right.svg'
                  alt=''
                  className='h-2 w-2'
                />
              </div>
              <div className='flex w-fit items-center space-x-2 '>
                <img
                  src='./static/images/react.svg'
                  alt=''
                  className='h-4 w-4'
                />
                <div className='text-sm text-white'>index.jsx</div>
                <img
                  src='./static/images/right.svg'
                  alt=''
                  className='h-2 w-2'
                />
              </div>
              <div className='flex w-fit items-center space-x-2 '>
                <img
                  src='./static/images/cube.svg'
                  alt=''
                  className='h-4 w-4'
                />
                <div className='text-sm text-white'>Home</div>
              </div>
            </div>
          </div>
          <div
            className={`scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-blue-100 flex h-[545px]
            overflow-auto bg-[#282c34] `}
          >
            <div className='px-2'>
              {Array.from({ length: 30 }, (_, x) => (
                <div key={x} className='code text-whitevs'>
                  {x > 0 && x}
                </div>
              ))}
            </div>

            <div className='code w-[683px]'>
              {renderImport('Link', 'next/link')}
              {renderImport('Image', 'next/future/image')}
              <br />
              <div className='flex items-center space-x-2'>
                <div className='whitespacing text-purplevs '>
                  export default function
                </div>

                <div className='text-bluevs'>Home</div>
                <div className='text-orangevs'>{`( ) {`}</div>
              </div>
              <div className='text-purplevs pl-4'>{`return (`}</div>
              <div className='code whitespace-nowrap'>
                <div className='pl-7'>
                  {renderOpenDiv(
                    renderClass(
                      line6Class && (
                        <CustomTypeIt>
                          bg-slate-800 p-4 space-x-4 rounded-xl flex
                          items-center justify-center w-[550px] h-[190px]
                          mx-auto
                        </CustomTypeIt>
                      )
                    )
                  )}
                  <div className='pl-4'>
                    {renderOpenDiv()}
                    <div className='pl-5'>
                      {renderP(
                        line8Class && (
                          <CustomTypeIt>text-lg font-medium</CustomTypeIt>
                        ),
                        line8Text && (
                          <CustomTypeIt>
                            “Next JS & Tailwind For The Win .”
                          </CustomTypeIt>
                        )
                      )}
                      {renderP(
                        line9Class && (
                          <CustomTypeIt>mt-3 text-sky-500</CustomTypeIt>
                        ),
                        line9Text && (
                          <CustomTypeIt>Fahri Alpiansyah</CustomTypeIt>
                        )
                      )}
                      {renderP(
                        line10Class && <CustomTypeIt>text-white</CustomTypeIt>,
                        line10Text && (
                          <CustomTypeIt>
                            React JS Developer, Baezeni
                          </CustomTypeIt>
                        )
                      )}
                      {renderOpenDiv(
                        line11Class && (
                          <CustomTypeIt>mt-3 flex space-x-2</CustomTypeIt>
                        )
                      )}
                      <div className='pl-4'>
                        {renderOpenLink(
                          line12Text && <CustomTypeIt>/blog</CustomTypeIt>
                        )}
                        <div className='pl-4'>
                          {renderA(
                            line13Class && (
                              <CustomTypeIt>
                                rounded bg-blue-300 p-2{' '}
                              </CustomTypeIt>
                            ),
                            line13Text && (
                              <CustomTypeIt>Read the blog</CustomTypeIt>
                            )
                          )}
                        </div>
                        {renderCloseLink()}
                        {renderOpenLink(
                          line15Text && <CustomTypeIt>/about</CustomTypeIt>
                        )}
                        <div className='pl-4'>
                          {renderA(
                            line16Class && (
                              <CustomTypeIt>
                                rounded bg-blue-300 p-2{' '}
                              </CustomTypeIt>
                            ),
                            line16Text && (
                              <CustomTypeIt>Learn About Me</CustomTypeIt>
                            )
                          )}
                        </div>
                        {renderCloseLink()}
                      </div>
                      {renderCloseDiv()}
                    </div>
                    {renderCloseDiv()}
                    <div className='pl-'>
                      {renderOpenDiv(
                        line20Class && (
                          <CustomTypeIt>relative h-40 w-40</CustomTypeIt>
                        )
                      )}
                      <div className='pl-4'>
                        {renderImage(
                          line22Class && (
                            <CustomTypeIt>
                              h-full w-full rounded-full object-cover object-top
                            </CustomTypeIt>
                          ),
                          line23Text && (
                            <CustomTypeIt>
                              /static/images/fahri.jpeg
                            </CustomTypeIt>
                          ),
                          <CustomTypeIt>fahri</CustomTypeIt>
                        )}
                      </div>
                      {renderCloseDiv()}
                    </div>
                  </div>
                  <div className='pl-'>{renderCloseDiv()}</div>
                </div>
                <div className='code'>
                  <span className='purplevs pl-4'>{`)`}</span>
                  <span className='whitevs'>{`;`}</span>
                  <div className='code'>
                    <span className='orangevs'>{`}`}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* </TypeIt> */}
          </div>
        </div>
      </div>
    </div>
  );

  const VSCodeMini = (
    <div className='border-x-1 border-t-1 relative h-full border border-b-4 border-black bg-white'>
      <div className='h-full overflow-hidden  bg-[#282c34]'>
        <div>
          <div className='flex space-x-[3px] bg-[#21252b] px-[1px] py-[1px] '>
            <img
              src='./static/images/vscode.svg'
              alt=''
              className='h-[2px] w-[2px]'
            />
            <div className='text-[2px] text-white'>File</div>
            <div className='text-[2px] text-white'>Edit</div>
            <div className='text-[2px] text-white'>Terminal</div>
          </div>
          <div className='w-full  bg-[#21252b] py-[1px]'>
            <div className='flex w-fit items-center border-r border-black bg-[#282c34]'>
              <div className='flex w-fit items-center space-x-[3px]  px-[3px] py-[1px]'>
                <img
                  src='./static/images/react.svg'
                  alt=''
                  className='h-[2px] w-[2px]'
                />
                <div className='text-[2px] text-white'>index.jsx</div>
                <img
                  src='./static/images/cross.svg'
                  alt=''
                  className='h-[2px] w-[2px]'
                />
              </div>
            </div>
          </div>
          <div className='h-[50px] w-full   '>
            <div className='   border-b border-gray-800'>
              <div className='flex items-center space-x-[2px]'>
                <div className='flex w-fit items-center  space-x-[2px] px-[2px] py-[2px]'>
                  {/* <img src="./static/images/react.svg" alt="" className="w-4 h-4" /> */}
                  <div className='text-[2px] text-white'>pages</div>
                  <img
                    src='./static/images/right.svg'
                    alt=''
                    className='h-[2px] w-[2px]'
                  />
                </div>
                <div className='flex w-fit items-center space-x-[2px] '>
                  <img
                    src='./static/images/react.svg'
                    alt=''
                    className='h-[2px] w-[2px]'
                  />
                  <div className='text-[2px] text-white'>index.jsx</div>
                  <img
                    src='./static/images/right.svg'
                    alt=''
                    className='h-[2px] w-[2px]'
                  />
                </div>
                <div className='flex w-fit items-center space-x-[2px] '>
                  <img
                    src='./static/images/cube.svg'
                    alt=''
                    className='h-[2px] w-[2px]'
                  />
                  <div className='text-[2px] text-white'>Home</div>
                </div>
              </div>
            </div>
            <div className='flex bg-[#282c34]'>
              <div className='px-[2px]'>
                {Array.from({ length: 40 }, (_, x) => (
                  <div key={x} className='codef text-whitevs text-[1px]'>
                    {x > 0 && x}
                  </div>
                ))}
              </div>

              <div className='code w-[100px]'>
                {renderImport('Link', 'next/link', 'mini')}
                {renderImport('Image', 'next/future/image', 'mini')}
                <div className='flex items-center space-x-[2px]'>
                  <div className=' text-purplevs  text-[2px] '>
                    export default function
                  </div>

                  <div className='text-bluevs  text-[2px]'>Home</div>
                  <div className='text-orangevs  text-[2px]'>{`( ) {`}</div>
                </div>
                <div className='text-purplevs pl-[1px]  text-[2px]'>{`return (`}</div>
                <div className='code-mini text-[2px] text-white '>
                  <div className='pl-[2px]'>
                    {renderOpenDiv(
                      line6Class && (
                        <CustomTypeIt>
                          bg-slate-800 p-4 space-x-4 rounded-xl flex
                          items-center justify-center w-[550px] h-[190px]
                          mx-auto
                        </CustomTypeIt>
                      ),
                      'mini'
                    )}
                    <div className='pl-[1px]'>
                      {renderOpenDiv('', 'mini')}
                      <div className='pl-[2px]'>
                        {renderP(
                          line8Class && (
                            <CustomTypeIt>text-lg font-medium</CustomTypeIt>
                          ),
                          line8Text && (
                            <CustomTypeIt>
                              “Next JS & Tailwind For The Win .”
                            </CustomTypeIt>
                          ),
                          'mini'
                        )}
                        {renderP(
                          line9Class && (
                            <CustomTypeIt>mt-3 text-sky-500</CustomTypeIt>
                          ),
                          line9Text && (
                            <CustomTypeIt>Fahri Alpiansyah</CustomTypeIt>
                          ),
                          'mini'
                        )}
                        {renderP(
                          line10Class && (
                            <CustomTypeIt>text-white</CustomTypeIt>
                          ),
                          line10Text && (
                            <CustomTypeIt>
                              React JS Developer, Baezeni
                            </CustomTypeIt>
                          ),
                          'mini'
                        )}
                        {renderOpenDiv(
                          line11Class && (
                            <CustomTypeIt>mt-3 flex space-x-2</CustomTypeIt>
                          ),
                          'mini'
                        )}
                        <div className='pl-[3px]'>
                          {renderOpenLink(
                            line12Text && <CustomTypeIt>/blog</CustomTypeIt>,
                            'mini'
                          )}
                          <div className='pl-[4px]'>
                            {renderA(
                              line13Class && (
                                <CustomTypeIt>
                                  rounded bg-blue-300 p-2{' '}
                                </CustomTypeIt>
                              ),
                              line13Text && (
                                <CustomTypeIt>Read the blog</CustomTypeIt>
                              ),
                              'mini'
                            )}
                          </div>
                          {renderCloseLink('mini')}
                          {renderOpenLink(
                            line15Text && <CustomTypeIt>/about</CustomTypeIt>,
                            'mini'
                          )}
                          <div className='pl-[4px]'>
                            {renderA(
                              line16Class && (
                                <CustomTypeIt>
                                  rounded bg-blue-300 p-2{' '}
                                </CustomTypeIt>
                              ),
                              line16Text && (
                                <CustomTypeIt>Learn About Me</CustomTypeIt>
                              ),
                              'mini'
                            )}
                          </div>
                          {renderCloseLink('mini')}
                        </div>
                        {renderCloseDiv('mini')}
                      </div>
                      {renderCloseDiv('mini')}
                      <div className='pl-'>
                        {renderOpenDiv(
                          line20Class && (
                            <CustomTypeIt>relative h-40 w-40</CustomTypeIt>
                          )
                        )}
                        <div className='pl-4'>
                          {renderImage(
                            line22Class && (
                              <CustomTypeIt>
                                h-full w-full rounded-full object-cover
                                object-top
                              </CustomTypeIt>
                            ),
                            line23Text && (
                              <CustomTypeIt>
                                /static/images/fahri.jpeg
                              </CustomTypeIt>
                            ),
                            <CustomTypeIt>fahri</CustomTypeIt>
                          )}
                        </div>
                        {renderCloseDiv()}
                      </div>
                    </div>
                    <div className='pl-'>{renderCloseDiv()}</div>
                  </div>
                  <div className='code'>
                    <span className='purplevs pl-4'>{`)`}</span>
                    <span className='whitevs'>{`;`}</span>
                    <div className='code'>
                      <span className='orangevs'>{`}`}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* </TypeIt> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="-mt-4  ">
      <div className="font-bold text-lg text-white text-center animate-pulse ">.</div>
    </div> */}
    </div>
  );

  const secondMoni = (
    <div className='border-x-1 border-t-1 h-full border border-b-4 border-black bg-white'>
      <div className='flex h-full w-full items-center justify-center px-1'>
        <AnimatePresence>
          {line8Class && (
            <motion.div
              className=' flex w-full items-center justify-center space-x-1 rounded bg-slate-800 p-1'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={countVsCode ? false : ln6ClassVariantsMini}
            >
              <div className=' '>
                {line9Class && (
                  <motion.p
                    className='text-[4px] font-medium text-white'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={countVsCode ? false : textVariantsMini}
                  >
                    “Next JS & Tailwind For The Win .”
                  </motion.p>
                )}
                {line10Class && (
                  <motion.p
                    className='mt-1  text-[4px] text-sky-500'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={countVsCode ? false : textVariantsMini}
                  >
                    Fahri Alpiansyah
                  </motion.p>
                )}
                {line11Class && (
                  <motion.p
                    className='text-[4px] text-white'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={countVsCode ? false : textVariantsMini}
                  >
                    React JS Developer, Baezeni
                  </motion.p>
                )}

                <div className='mt-1  flex space-x-1'>
                  {line15Text && (
                    <motion.div
                      className='rounded-[2px] bg-blue-300 p-[2px] text-[4px]'
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      variants={countVsCode ? false : textVariantsMini}
                    >
                      <Link href='/blog'>
                        Read the blog
                      </Link>
                    </motion.div>
                  )}
                  {line20Class && (
                    <Link href='/about'>
                      <motion.div
                        className='rounded-[2px] bg-blue-300 p-[2px] text-[4px]'
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        variants={countVsCode ? false : textVariantsMini}
                      >
                        Leran about me
                      </motion.div>
                    </Link>
                  )}
                </div>
              </div>
              {line23Text && (
                <motion.div
                  className=' relative h-8 w-8'
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={countVsCode ? false : ln23SrcVariants}
                >
                  <Image
                    className='h-full w-full rounded-full  object-cover object-top'
                    src='/static/images/fahri.jpeg'
                    alt=''
                    fill
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <div className="-mt-4  ">
      <div className="font-bold text-lg text-white text-center animate-pulse ">.</div>
    </div> */}
    </div>
  );

  const VSCodeResult = (
    <div className='relative h-[calc(100vh_-_5rem)] w-full md:h-full'>
      <div className='h-[280px] bg-white p-1'>
        <div className='h-[30px]'>
          <div className='w-full rounded-xl bg-[#f1f3f4] py-1 px-3 text-sm text-black'>
            http://localhost:3000/
          </div>
        </div>
        <AnimatePresence>
          {line8Class && (
            <motion.div
              className=' mx-auto mt-6  flex h-[190px] items-center justify-center space-x-4 rounded-xl bg-slate-800 p-4 md:w-[550px]'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={countVsCode ? false : ln6ClassVariants}
            >
              <div className=' '>
                {line9Class && (
                  <motion.p
                    className='font-medium  text-white md:text-lg'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={countVsCode ? false : ln8TextVariants}
                  >
                    “Next JS & Tailwind For The Win .”
                  </motion.p>
                )}
                {line10Class && (
                  <motion.p
                    className='mt-3 text-sky-500 dark:text-sky-400'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={countVsCode ? false : ln9TextVariants}
                  >
                    Fahri Alpiansyah
                  </motion.p>
                )}
                {line11Class && (
                  <motion.p
                    className='text-white'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={countVsCode ? false : ln10TextVariants}
                  >
                    React JS Developer, Baezeni
                  </motion.p>
                )}

                <div className='mt-3  flex space-x-2'>
                  {line15Text && (
                    <motion.div
                      className='rounded bg-blue-300 p-1 md:p-2'
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      variants={countVsCode ? false : ln13TextVariants}
                    >
                      <Link href='/blog'>
                    
                          Read the blog
                       
                      </Link>
                    </motion.div>
                  )}
                  {line20Class && (
                    <motion.div
                      className='rounded bg-blue-300 p-1 md:p-2'
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      variants={countVsCode ? false : ln13TextVariants}
                    >
                      <Link href='/about'>
                      
                          Learn about me
                      
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
              {line23Text && (
                <motion.div
                  className=' relative h-20 w-20 md:h-40 md:w-40'
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={countVsCode ? false : ln23SrcVariants}
                >
                  <Image
                    className='h-full w-full rounded-full  object-cover object-top'
                    src='/static/images/fahri.jpeg'
                    alt=''
                    fill
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='h-[360px] bg-black/90  p-2'>
        <div className='h-[60px]'></div>
        <div className='h-[60px]'></div>
        <div className='relative flex h-[240px] items-end justify-center'>
          <div className=''>
            <div className='blink-bg -mb-[77px] grid h-20 w-full grid-cols-2  gap-x-[1px]'>
              {/* <div className="w-full hfull bg-black border-2 border-black"></div> */}
              {VSCodeMini}
              {secondMoni}
            </div>
            {talkingOn && (
              <div className='absolute left-[50%] right-[50%] -top-[25%] '>
                <p className='bubble thought text-xs'>{talkingOn}</p>
              </div>
            )}
            <div className='relative mx-auto h-60 w-60'>
              <Image
                src='/static/images/programer.png'
                alt=''
                width='350'
                height='350'
                layuot='fill'
                // sizes="100vw"

                // objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function renderVSCode(strType) {
    let htmlCode;
    if (type) {
      switch (type) {
        case 'Big':
          htmlCode = VSCodeBig;
          break;
        case 'Mini':
          htmlCode = VSCodeMini;
          break;
        case 'Result':
          htmlCode = VSCodeResult;
          break;
        default:
          break;
      }
    }
    return htmlCode;
  }

  return <div className=''>{renderVSCode(type)}</div>;
}
