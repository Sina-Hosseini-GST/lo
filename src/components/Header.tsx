'use client'

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Objects from '@/components/Objects';
import Link from 'next/link';

const Header = () => {
  const duration = .5;

  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuItemNo1Ref = useRef<HTMLAnchorElement | null>(null);
  const menuItemNo2Ref = useRef<HTMLAnchorElement | null>(null);
  const menuItemNo3Ref = useRef<HTMLAnchorElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const barNo1Ref = useRef<HTMLSpanElement | null>(null);
  const barNo2Ref = useRef<HTMLSpanElement | null>(null);
  const barNo3Ref = useRef<HTMLSpanElement | null>(null);
  const bulletNo1Ref = useRef<HTMLSpanElement | null>(null);
  const bulletNo2Ref = useRef<HTMLSpanElement | null>(null);
  const bulletNo3Ref = useRef<HTMLSpanElement | null>(null);
  const iconNo1Ref = useRef<SVGSVGElement | null>(null);
  const iconNo2Ref = useRef<SVGSVGElement | null>(null);
  const iconNo3Ref = useRef<SVGSVGElement | null>(null);

  const [isActive, setIsActive] = useState(false);

  // Show and hide the menu
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // Hide the menu if outside is clicked
  const hideMenu = (event: MouseEvent) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target as Node)
        && menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      gsap.to(barNo1Ref.current, {
        scaleX: 1.65,
        rotation: 45,
        duration,
      });

      gsap.to(barNo2Ref.current, {
        scale: 0,
        duration: duration * .5,
      });

      gsap.to(barNo3Ref.current, {
        scaleX: 1.65,
        rotation: - 45,
        duration,
      });

      gsap.to(menuRef.current, {
        right: 0,
        duration,
      });

      gsap.to(bulletNo1Ref.current, {
        delay: duration * .25,
        opacity: 1,
        translateX: 0,
        duration,
      });

      gsap.to(bulletNo2Ref.current, {
        delay: duration * .5,
        opacity: 1,
        translateX: 0,
        duration,
      });

      gsap.to(bulletNo3Ref.current, {
        delay: duration * .75,
        opacity: 1,
        translateX: 0,
        duration,
      });

      gsap.to(menuItemNo1Ref.current, {
        delay: duration * .25,
        opacity: 1,
        translateX: 0,
        duration,
      });

      gsap.to(menuItemNo2Ref.current, {
        delay: duration * .5,
        opacity: 1,
        translateX: 0,
        duration,
      });

      gsap.to(menuItemNo3Ref.current, {
        delay: duration * .75,
        opacity: 1,
        translateX: 0,
        duration,
      });

      gsap.to(iconNo1Ref.current, {
        delay: duration * 1.75,
        opacity: 1,
        translateY: 0,
        duration,
      });

      gsap.to(iconNo2Ref.current, {
        delay: duration * 2,
        opacity: 1,
        translateY: 0,
        duration,
      });

      gsap.to(iconNo3Ref.current, {
        delay: duration * 2.25,
        opacity: 1,
        translateY: 0,
        duration,
      });
    }
    else {
      gsap.to(barNo1Ref.current, {
        scaleX: 1,
        rotation: 0,
        duration,
      });

      gsap.to(barNo2Ref.current, {
        scale: 1,
        duration: duration * .5,
      });

      gsap.to(barNo3Ref.current, {
        scaleX: 1,
        rotation: 0,
        duration,
      });

      gsap.matchMedia().add('(min-width: 1024px)', () => {
        gsap.to(menuRef.current, {
          right: '-50%',
          duration,
        });
      });

      gsap.matchMedia().add('(max-width: 1023px)', () => {
        gsap.to(menuRef.current, {
          right: '-100%',
          duration,
        });
      });

      gsap.to(bulletNo1Ref.current, {
        delay: duration * .25,
        opacity: 0,
        translateX: '-4rem',
        duration,
      });

      gsap.to(bulletNo2Ref.current, {
        delay: duration * .5,
        opacity: 0,
        translateX: '-4rem',
        duration,
      });

      gsap.to(bulletNo3Ref.current, {
        delay: duration * .75,
        opacity: 0,
        translateX: '-4rem',
        duration,
      });

      gsap.to(menuItemNo1Ref.current, {
        delay: duration * .25,
        opacity: 0,
        translateX: '4rem',
        duration,
      });

      gsap.to(menuItemNo2Ref.current, {
        delay: duration * .5,
        opacity: 0,
        translateX: '4rem',
        duration,
      });

      gsap.to(menuItemNo3Ref.current, {
        delay: duration * .75,
        opacity: 0,
        translateX: '4rem',
        duration,
      });

      gsap.to(iconNo1Ref.current, {
        delay: duration * 1.75,
        opacity: 0,
        translateY: '1.5rem',
        duration,
      });

      gsap.to(iconNo2Ref.current, {
        delay: duration * 2,
        opacity: 0,
        translateY: '1.5rem',
        duration,
      });

      gsap.to(iconNo3Ref.current, {
        delay: duration * 2.25,
        opacity: 0,
        translateY: '1.5rem',
        duration,
      });
    }
  }, [isActive]);

  useEffect(() => {
    document.addEventListener('click', hideMenu);
  }, []);

  return (
    <>
      <header className='fixed inset-x-0 top-0 p-6'>
        <nav className='flex justify-end'>
          <button className={`size-10 sm:size-11 bg-[#f9ec0c] rounded-md flex flex-col gap-1 justify-center items-center z-20`} onClick={toggleMenu} ref={buttonRef}>
            <span className={`bg-black rounded-full w-3 h-[3px]`} ref={barNo1Ref}></span>
            <span className={`bg-black rounded-full w-3 h-[3px]`} ref={barNo2Ref}></span>
            <span className={`bg-black rounded-full w-3 h-[3px]`} ref={barNo3Ref}></span>
          </button>
          <div className={`absolute w-full lg:w-1/2 inset-y-0 bg-[#008C44] top-0 h-svh flex flex-col justify-center items-center -right-full lg:-right-1/2`} ref={menuRef}>
            <div className='text-6xl'>
              <div className='flex items-center gap-4 sm:gap-8'>
                <span className={`text-xs sm:text-sm text-white opacity-0 -translate-x-16`} ref={bulletNo1Ref}>
                  I
                </span>
                <Link href={'/foodchin'} className={`font-mottercorpusstd py-3 sm:py-5 text-[#f9ec0c] hover:text-white transition-colors translate-x-16 opacity-0 uppercase`} ref={menuItemNo1Ref}>
                  foodchin
                </Link>
              </div>
              <div className='flex items-center gap-4 sm:gap-8'>
                <span className={`text-xs sm:text-sm text-white opacity-0 -translate-x-16`} ref={bulletNo2Ref}>
                  II
                </span>
                <Link href={'/about'} className={`font-mottercorpusstd py-3 sm:py-5 text-[#f9ec0c] hover:text-white transition-colors translate-x-16 opacity-0 uppercase`} ref={menuItemNo2Ref}>
                  about
                </Link>
              </div>
              <div className='flex items-center gap-4 sm:gap-8'>
                <span className={`text-xs sm:text-sm text-white opacity-0 -translate-x-16`} ref={bulletNo3Ref}>
                  III
                </span>
                <Link href={'/contact'} className={`font-mottercorpusstd py-3 sm:py-5 text-[#f9ec0c] hover:text-white transition-colors translate-x-16 opacity-0 uppercase`} ref={menuItemNo3Ref}> 
                  contact
                </Link>
              </div>
            </div>
            <ul className='absolute flex gap-3 sm:gap-4 bottom-8 inset-x-0 justify-center'>
              <li>
                <a href="#">
                  <svg ref={iconNo1Ref} className={`size-6 stroke-[#f9ec0c] opacity-0 translate-y-6 fill-transparent`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg ref={iconNo2Ref} className={`size-6 stroke-[#f9ec0c] opacity-0 translate-y-6 fill-transparent`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg ref={iconNo3Ref} className={`size-6 stroke-[#f9ec0c] opacity-0 translate-y-6 fill-transparent`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {isActive && (<Objects numberOfObjects={20} />)}
    </>
  )
}

export default Header
