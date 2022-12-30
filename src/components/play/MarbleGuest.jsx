// /* eslint-disable */

import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { AiFillWarning, AiOutlineDoubleLeft } from 'react-icons/ai';
import { RiForbid2Fill } from 'react-icons/ri';
import { Bounce } from 'react-reveal';
import { Tooltip as TooltipTippy } from 'react-tippy';
import useWindowSize from 'react-use/lib/useWindowSize';

export default function MarbleGuest() {
  const { t } = useTranslation('common');
  const [gameOn, setGameOn] = useState(false);
  const { width, height } = useWindowSize();
  const [startNewGame, setStartNewGame] = useState(false);
  const [continueGame, setContinueGame] = useState(false);
  const [startScreen, setStartScreen] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setStartScreen(true);
  //   }, 2000);
  // }, [gameOn]);

  const [onButtonClick, setOnButtonClick] = useState(false);
  const [playerValue, setPlayerValue] = useState({ taruhan: 0, tebakan: 0 });

  const [playerBall, setPlayerBall] = useState(10);
  const [cpuBall, setCpuBall] = useState(10);

  const [taruhanCpu, setTaruhanCpu] = useState(0);
  const [tebakanCpu, setTebakanCpu] = useState(0);

  const [pemenang, setPemenang] = useState(null);
  const [modalPemenang, setModalPemenang] = useState(false);
  const [confettiOn, setConfettiOn] = useState(false);
  const [howOn, setHowOn] = useState(false);

  const { taruhan, tebakan } = playerValue;

  const maxTebakanCpu = parseInt(playerBall, 10);
  const minTebakanCpu = playerBall;

  const maxTaruhanCpu = parseInt(cpuBall, 10);
  const minTaruhan = 1;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPlayerBall(parseInt(localStorage.getItem('playerBall'), 10));
      setCpuBall(parseInt(localStorage.getItem('cpuBall'), 10));
    }
  }, [gameOn]);

  const handlePlayAgain = () => {
    setPlayerValue({ taruhan: 0, tebakan: 0 });
    setTaruhanCpu(0);
    setTebakanCpu(0);
    setModalPemenang(false);
    setConfettiOn(false);
  };

  const handleGameStartNew = () => {
    setStartNewGame(true);
    parseInt(localStorage.setItem('playerBall', 10), 10);
    parseInt(localStorage.setItem('cpuBall', 10), 10);
    setPlayerBall(parseInt(localStorage.getItem('playerBall'), 10));
    setCpuBall(parseInt(localStorage.getItem('cpuBall'), 10));
  };

  const handleGameContinue = () => {
    setContinueGame(true);
  };

  const handleBackToStart = () => {
    setContinueGame(false);
    setStartScreen(true);
    setStartNewGame(false);
  };

  const handleExit = () => {
    setGameOn(false);
    setStartScreen(false);
    localStorage.setItem('gameOn', JSON.stringify(false));
  };

  const gerarNumero = useCallback(() => {
    setOnButtonClick(true);
    setTimeout(() => {
      setOnButtonClick(false);
    }, 2000);
    const newTaruhanCpu =
      parseInt(Math.floor(Math.random() * (maxTaruhanCpu - minTaruhan), 10)) +
      minTaruhan;

    setTaruhanCpu(newTaruhanCpu);

    const newTebakanCpu =
      parseInt(Math.floor(Math.random() * (maxTebakanCpu - minTaruhan), 10)) +
      minTaruhan +
      newTaruhanCpu;
    setTebakanCpu(newTebakanCpu);
    // if (maxTebakanCpu < minTaruhan) {
    //   alert('Max value should be higher than Min value');
    //   setTaruhanCpu('Error');
    // }
  }, [maxTaruhanCpu, maxTebakanCpu]);

  useEffect(() => {
    const playerWin =
      parseInt(playerValue.taruhan, 10) !== 0 &&
      parseInt(playerValue.taruhan, 10) !== parseInt(playerValue.tebakan, 10) &&
      parseInt(playerValue.tebakan, 10) ===
        parseInt(playerValue.taruhan, 10) + parseInt(taruhanCpu, 10);

    const cpuWin =
      parseInt(playerValue.taruhan, 10) !== 0 &&
      parseInt(tebakanCpu, 10) ===
        parseInt(playerValue.taruhan, 10) + parseInt(taruhanCpu, 10);

    if (
      (parseInt(tebakanCpu, 10) !== 0 &&
        parseInt(playerValue.tebakan, 10) === parseInt(tebakanCpu, 10)) ||
      (parseInt(taruhanCpu, 10) !== 0 &&
        parseInt(tebakanCpu, 10) !==
          parseInt(playerValue.taruhan, 10) + parseInt(taruhanCpu, 10) &&
        parseInt(playerValue.taruhan, 10) !== 0 &&
        parseInt(playerValue.tebakan, 10) !==
          parseInt(playerValue.taruhan, 10) + parseInt(taruhanCpu, 10))
    ) {
      setPemenang('no');
    }

    if (playerWin) {
      setPemenang('player');
    }

    if (cpuWin) {
      setPemenang('cpu');
    }
  }, [playerValue.taruhan, playerValue.tebakan, taruhanCpu, tebakanCpu]);

  useEffect(() => {
    if (pemenang && pemenang === 'player') {
      const newPlayerBall = parseInt(playerBall, 10) + parseInt(taruhanCpu, 10);
      const newCpuBall = parseInt(cpuBall, 10) - parseInt(taruhanCpu, 10);
      setPlayerBall(newPlayerBall);
      setCpuBall(newCpuBall);
      localStorage.setItem('playerBall', newPlayerBall);
      localStorage.setItem('cpuBall', newCpuBall);
      setPemenang(null);
      setModalPemenang('Player');
      setConfettiOn(true);
    } else if (pemenang && pemenang === 'cpu') {
      const newPlayerBall =
        parseInt(playerBall, 10) - parseInt(playerValue.taruhan, 10);
      const newCpuBall =
        parseInt(cpuBall, 10) + parseInt(playerValue.taruhan, 10);
      setPlayerBall(newPlayerBall);
      setCpuBall(newCpuBall);
      setPemenang(null);
      setModalPemenang('CPU');
      setConfettiOn(true);
    } else if (pemenang && pemenang === 'no') {
      setModalPemenang(t('game.nowin'));
    }
  }, [cpuBall, pemenang, playerBall, playerValue.taruhan, taruhanCpu]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayerValue(() => {
      return {
        ...playerValue,
        [name]: value,
      };
    });
  };

  const disablePush =
    (taruhan.toString() === '0' && tebakan.toString() === '0') ||
    (taruhan.toString() !== '0' && tebakan.toString() === '0') ||
    (taruhan.toString() === '0' && tebakan.toString() !== '0') ||
    (taruhan === '' && tebakan === '') ||
    (taruhan !== '' && tebakan === '') ||
    (taruhan === '' && tebakan !== '') ||
    onButtonClick;

  const MarbleGuest = (
    <div className='svfg-bg z-[10000] flex h-[calc(100vh-4rem)] w-[340px] flex-col items-center justify-between overflow-hidden bg-transparent  py-10 px-3 md:h-[600px] md:p-8'>
      <div className='w-full '>
        {/* <div className='w-full border-2 border-blue-300 mb-2'>CPU</div> */}
        <div className='flex items-center justify-center space-x-3 '>
          <div className='flex w-4/12 flex-col-reverse items-center justify-center md:w-3/12 '>
            <div className='text-lg font-bold text-white'>{t('game.bet')}</div>
            {/* <p className=''>{taruhanCpu}</p> */}
            <input
              label='tebakan'
              className='md: h-16 w-12 rounded-lg bg-gradient-to-br from-rose-600 via-red-500 to-blue-600 !p-[2px] text-center  text-3xl text-white outline-none [appearance:textfield] md:h-20 md:w-16 md:text-5xl'
              type='number'
              disabled
              // onChange={handleChange}
              name='tebakan'
              value={parseInt(taruhanCpu, 10)}
            />
          </div>
          <div className='spaxe-x-2 flex h-[100px]  w-4/12 flex-col items-center justify-center md:w-5/12'>
            {' '}
            <div className=' bg-gradient-to-b from-red-700 via-indigo-600 to-red-900 bg-clip-text px-2 text-center text-3xl font-bold text-transparent'>
              CPU
            </div>
            <div className='  spaxe-x-2 flex items-center justify-center'>
              <img
                src='./static/images/marble1.png'
                alt=''
                className='h-10 w-10'
              />
              <div className='text-center text-3xl text-white md:text-5xl'>
                X{parseInt(cpuBall, 10)}
              </div>
            </div>
          </div>
          <div className='flex w-4/12 flex-col-reverse items-center justify-center md:w-3/12 '>
            {' '}
            <div className='pb-2 text-lg font-bold text-white'>
              {t('game.guess')}
            </div>{' '}
            <div className=''>
              <input
                label='tebakan'
                className='md: h-16 w-12 rounded-lg bg-gradient-to-br from-rose-600 via-red-500 to-blue-600 !p-[2px] text-center text-3xl text-white outline-none [appearance:textfield]  md:h-20 md:w-16 md:text-5xl '
                type='number'
                disabled
                // onChange={handleChange}
                name='tebakan'
                value={parseInt(tebakanCpu, 10)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <TooltipTippy
          trigger='mouseenter'
          open={taruhan.toString() === '0' && tebakan.toString() === '0'}
          hideOnClick={false}
          interactive
          html={
            taruhan.toString() === '0' && tebakan.toString() === '0' ? (
              <div className='z-[30000] inline-block rounded-md border  p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
                Please Fill Taruhan And Tebakan
              </div>
            ) : (
              <div className=''></div>
            )
          }
        >
          <button
            onClick={gerarNumero}
            className={[
              'button-fire text-sm font-bold',
              disablePush ? 'cursor-not-allowed ' : 'cursor-pointer ',
            ].join(' ')}
            disabled={disablePush}
          >
            {t('game.push')}
          </button>
        </TooltipTippy>
      </div>

      {parseInt(taruhan, 10) > parseInt(playerBall, 10) && (
        <div className='absolute inset-0 -z-[10] mt-44 flex items-center justify-center md:mt-36'>
          <div className='flex items-center justify-center space-x-3 rounded border-2 border-red-600 bg-black/80 p-2'>
            <RiForbid2Fill className='h-8 w-8 text-red-600' />
            <div className='font-bold text-white'>{t('game.notEnough')}</div>
          </div>
        </div>
      )}
      {parseInt(tebakan, 10) > 20 && (
        <div
          className={[
            `absolute inset-0 -z-[10] flex items-center  justify-center `,
            parseInt(tebakan, 10) > 20
              ? 'mt-[18rem] md:mt-[16rem]'
              : 'mt-44 md:mt-36',
          ].join(' ')}
        >
          <div className='flex items-center justify-center space-x-3 rounded border-2 border-yellow-400 bg-black/80 p-2'>
            <AiFillWarning className='h-8 w-8 text-yellow-300' />
            <div className='font-bold text-white'>{`${t(
              'game.guess'
            )} <= 20`}</div>
          </div>
        </div>
      )}

      {/* Player Layout Using Reverse Styling */}
      <div className='flex w-full flex-col-reverse'>
        {' '}
        <div className='flex items-end justify-center space-x-3'>
          <div className='flex w-4/12 flex-col items-center justify-center md:w-3/12'>
            <div className='pb-2 text-lg font-bold  text-white'>
              {t('game.bet')}
            </div>
            <div>
              {' '}
              <input
                label='taruhan'
                className={[
                  'md: h-16 w-12 rounded-lg !p-[2px] text-center text-3xl text-white outline-none [appearance:textfield]  md:h-20 md:w-16 md:text-5xl ',
                  parseInt(taruhan, 10) > parseInt(playerBall, 10)
                    ? 'bg-red-600'
                    : 'bg-gradient-to-tl from-lime-200 via-lime-300 to-teal-500 ',
                ].join(' ')}
                type='number'
                onChange={handleChange}
                name='taruhan'
                value={parseInt(taruhan, 10)}
              />
            </div>
          </div>
          <div className=' h-[100px] w-4/12 md:w-5/12 '>
            <div className=' spaxe-x-2 flex items-center justify-center'>
              <img
                src='./static/images/marble2.png'
                alt=''
                className='h-10 w-10'
              />
              <div className='text-center text-3xl text-white md:text-5xl'>
                X{parseInt(playerBall, 10)}
              </div>
            </div>
            <div className=' bg-gradient-to-b from-green-700 via-lime-500 to-green-900 bg-clip-text px-2 text-center text-3xl font-bold text-transparent'>
              Player
            </div>
          </div>
          <div className='flex w-4/12 flex-col items-center justify-center md:w-3/12'>
            {' '}
            <div className='pb-2 text-lg font-bold text-white'>
              {t('game.guess')}
            </div>
            <div>
              {' '}
              <input
                label='tebakan'
                className={[
                  'md: h-16 w-12 rounded-lg !p-[2px] text-center text-3xl text-white outline-none [appearance:textfield]  md:h-20 md:w-16 md:text-5xl ',
                  parseInt(tebakan, 10) > 20
                    ? 'bg-yellow-300'
                    : 'bg-gradient-to-tl from-lime-200 via-lime-300 to-teal-500 ',
                ].join(' ')}
                type='number'
                onChange={handleChange}
                name='tebakan'
                value={parseInt(tebakan, 10)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Player Layout Using Reverse Styling. */}
      <div onClick={handleBackToStart} className='absolute bottom-5'>
        <AiOutlineDoubleLeft className='h-6 w-6 text-white' />
      </div>
    </div>
  );

  const stateModal =
    taruhanCpu.toString() !== '0' && typeof modalPemenang !== 'boolean';
  const stateGameOver =
    playerBall.toString() === '0' || cpuBall.toString() === '0';
  return (
    <>
      {confettiOn && <Confetti width={width} height={height} />}
      <div className='relative mx-auto flex h-[630px] w-[350px]   transform flex-col  items-center justify-center'>
        <img
          src='./static/images/frame.png'
          alt=''
          className='svg-bg absolute h-full w-full'
        />

        {!gameOn && !startScreen && !startNewGame && (
          <div className='flex h-[500px] w-full flex-col items-center justify-center space-y-5 '>
            <img
              src='./static/images/marbleplus.png'
              alt=''
              className='h-24 w-24 animate-[spin_5s_ease-in-out_infinite] hover:animate-[spin_1s_ease-in-out_infinite]'
            />
            <div className='flex items-center  space-x-1'>
              <div className='text-center text-xl font-bold text-white '>
                Play With Me
              </div>
            </div>
            {/* <img src='./static/images/marblemin.png' alt='' className='h-24 w-24' /> */}
          </div>
        )}

        {gameOn && !startScreen && !startNewGame && (
          <div className='flex h-[500px] w-full flex-col items-center justify-center space-y-5 '>
            <img
              src='./static/images/marbleplus.png'
              alt=''
              className='h-24 w-24 animate-[spin_5s_ease-in-out_infinite] hover:animate-[spin_1s_ease-in-out_infinite]'
            />
            <div className='flex items-center  space-x-1'>
              <div className='text-center text-xl font-bold text-white '>
                Loading
              </div>
              <div className='dot1'></div>
              <div className='dot2'></div>
              <div className='dot3'></div>
            </div>
            {/* <img src='./static/images/marblemin.png' alt='' className='h-24 w-24' /> */}
          </div>
        )}
        {startScreen && !startNewGame && !continueGame && gameOn && (
          <div className=' z-[10000] flex h-screen w-[340px] flex-col items-center justify-center space-y-4 md:h-[600px]'>
            <button
              type='button'
              onClick={handleGameStartNew}
              className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent'
            >
              {t('game.new')}
            </button>
            <div
              onClick={handleGameContinue}
              className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent'
            >
              {t('game.continue')}
            </div>
            <div
              onClick={() => setHowOn(true)}
              className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent'
            >
              {t('game.how')}
            </div>
            <div
              onClick={handleExit}
              className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent'
            >
              {t('game.exit')}
            </div>
            {/* <LanguageSwitch position='bottom-center' /> */}
          </div>
        )}
        {startNewGame && MarbleGuest}
        {continueGame && MarbleGuest}
        <Bounce when={stateModal}>
          {stateModal && (
            <div className='absolute inset-0 z-[10001] -mt-10 flex items-center justify-center'>
              <div className='flex h-48 w-72 flex-col items-center justify-center space-y-3 rounded  p-4 shadow-xl'>
                {stateGameOver ? (
                  <div className='text-red font-bold uppercase'>
                    {t('game.gameOver')}
                  </div>
                ) : (
                  <>
                    <div className='text-xs font-bold uppercase'>
                      {t('game.win')}
                    </div>
                    <div className='fontsemibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl text-lg font-bold text-transparent'>
                      {modalPemenang}
                    </div>
                    <div className='fontsemibold bg-gradient-to-r  from-lime-400  via-green-500 to-teal-500 bg-clip-text text-lg font-bold text-transparent'>
                      {t('game.true')}{' '}
                      {parseInt(taruhanCpu, 10) + parseInt(taruhan, 10)}
                    </div>
                    <button className=' pushable' onClick={handlePlayAgain}>
                      <span className='shadow'></span>
                      <span className='edge-red'></span>
                      <span className='front-red'>{t('game.playAgain')}</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </Bounce>

        <Bounce when={howOn}>
          {howOn && (
            <div className='absolute inset-0 z-[10001] -mt-10 flex items-center justify-center'>
              <div className='flex h-[70%] w-72 flex-col items-center justify-center space-y-3 rounded  p-4 shadow-xl'>
                <div className='text-xl font-bold text-black'>Tebak Gundu</div>
                <div className='text-black '>{t('game.howDesc')}</div>
                <button
                  className={[' pushable', '!mt-10'].join(' ')}
                  onClick={() => setHowOn(false)}
                >
                  <span className='front-red'>{t('game.close')}</span>
                </button>
              </div>
            </div>
          )}
        </Bounce>
        {/* <Bounce when={stateGameOver}>
          {stateGameOver && (
            <div className='absolute inset-0 flex items-center justify-center -mt-10 z-[10002]'>
              <div className='flex flex-col items-center justify-center h-40 w-72  rounded space-y-3 p-4 shadow-xl'>
                <div className='text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 fontsemibold text-lg'>
                  {modalPemenang}
                </div>
                <div className='text-transparent font-bold  bg-clip-text  bg-gradient-to-r from-lime-400 via-green-500 to-teal-500 fontsemibold text-lg'>
                  WIN
                </div>
                <button className=' pushable' onClick={handlePlayAgain}>
                  <span className='shadow'></span>
                  <span className='edge-red'></span>
                  <span className='front-red'>Game Over</span>
                </button>
              </div>
            </div>
          )}
        </Bounce> */}
      </div>
    </>
  );
}
