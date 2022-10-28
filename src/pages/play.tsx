/* eslint-disable */

// import CustomTypeIt from '@/components/CustomTypeIt'
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MarbleGuest from '@/components/play/MarbleGuest';
import VSCode from '@/components/play/VSCode';

const dropIn = {
  hidden: {
    y: 600,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      type: 'spring',
      bounce: 0,
    },
  },
  exit: {
    y: 600,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Play() {
  const [initVsCodeDone, setInitVsCodeDone] = useState(false);
  const [talkingOn, setTalkingOn] = useState(false);
  const [storageVsCode, setStorageVsCode] = useState(false);
  const [resetVsCode, setResetVsCode] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [gameOn, setGameOn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (gameOn) {
      localStorage.setItem('gameOn', gameOn);
    }
    if (typeof window !== 'undefined') {
      const game = localStorage.getItem('gameOn');
      const strgVs = localStorage.getItem('vsCodeCount');
      setGameOn(JSON.parse(game));
      setStorageVsCode(JSON.parse(strgVs));
    }
  }, [gameOn, setGameOn]);

  const handleTalking = (message) => {
    setTalkingOn(message);
    setTimeout(() => {
      setTalkingOn(false);
    }, 1000);
  };
  const handleGame = useCallback(() => {
    setGameOn(true);
    if (gameOn) {
      localStorage.setItem('gameOn', true);
    }
  }, [gameOn, setGameOn]);

  const handleVsCode = useCallback(() => {
    setResetVsCode(true);
    localStorage.removeItem('vsCodeCount');
    router.reload();
  }, [router]);

  useEffect(() => {
    setTimeout(() => {
      setShowHero(true);
    }, 500);
  }, []);

  const generateHero = useCallback(() => {
    let htm;

    if (gameOn) {
      return (htm = (
        <div className='absolute inset-0 top-1/2 left-1/2 z-[20000] flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 transform overflow-hidden'>
          <MarbleGuest gameOn={gameOn} setGameOn={setGameOn} />
        </div>
      ));
    } else
      htm = (
        <div className={showHero ? 'visible' : 'invisible'}>
          <div className=' mx-auto flex max-w-[1366px] md:h-[660px]'>
            <div className=' w-full'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='hidden md:block'>
                  {!gameOn && (
                    <VSCode
                      gameOn={gameOn}
                      resetVsCode={resetVsCode}
                      setResetVsCode={setResetVsCode}
                      type='Big'
                      setInitVsCodeDone={setInitVsCodeDone}
                    />
                  )}
                </div>
                {/* <VSCode type='Big' /> */}
                <VSCode
                  gameOn={gameOn}
                  resetVsCode={resetVsCode}
                  type='Result'
                  setResetVsCode={setResetVsCode}
                  setInitVsCodeDone={setInitVsCodeDone}
                  talkingOn={talkingOn}
                />
              </div>
              <div className=''>
                <div
                  className={[
                    'flex  w-full items-center justify-center space-x-6 py-3 ',
                    'glass',
                  ].join(' ')}
                >
                  <div
                    onClick={() =>
                      initVsCodeDone
                        ? handleGame()
                        : handleTalking(
                            'let me finish my work, it wont take long'
                          )
                    }
                    className=''
                  >
                    <img
                      src='./static/images/marbleplus.png'
                      alt=''
                      className='h-14 w-14 cursor-pointer hover:animate-bounce'
                    />
                  </div>

                  <button
                    type='button'
                    onClick={() =>
                      initVsCodeDone
                        ? handleVsCode()
                        : handleTalking('VS Code Still Runing')
                    }
                    className=''
                  >
                    <img
                      src='./static/images/vscode.svg'
                      alt=''
                      className='h-14 w-14 cursor-pointer hover:animate-bounce'
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    return htm;
  }, [
    gameOn,
    handleGame,
    handleVsCode,
    initVsCodeDone,
    resetVsCode,
    setGameOn,
    showHero,
    storageVsCode,
    talkingOn,
  ]);

  return <>{generateHero()}</>;
}
