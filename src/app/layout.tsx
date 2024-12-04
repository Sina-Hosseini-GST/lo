'use client'

import "./globals.css";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const duration = .5;

  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuItemNo1Ref = useRef<HTMLAnchorElement | null>(null);
  const menuItemNo2Ref = useRef<HTMLAnchorElement | null>(null);
  const menuItemNo3Ref = useRef<HTMLAnchorElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const spanNo1Ref = useRef<HTMLSpanElement | null>(null);
  const spanNo2Ref = useRef<HTMLSpanElement | null>(null);
  const spanNo3Ref = useRef<HTMLSpanElement | null>(null);
  const bulletNo1Ref = useRef<HTMLSpanElement | null>(null);
  const bulletNo2Ref = useRef<HTMLSpanElement | null>(null);
  const bulletNo3Ref = useRef<HTMLSpanElement | null>(null);
  const iconNo1Ref = useRef<SVGSVGElement | null>(null);
  const iconNo2Ref = useRef<SVGSVGElement | null>(null);
  const iconNo3Ref = useRef<SVGSVGElement | null>(null);

  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setIsClicked(!isClicked);
  };

  const hideMenu = (event: MouseEvent) => {
    if (
      buttonRef.current && !buttonRef.current.contains(event.target as Node) &&
      menuRef.current && !menuRef.current.contains(event.target as Node)
    ) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    if (isClicked) {
      gsap.to(buttonRef.current, {
        gap: '3px',
        duration,
        ease: 'power4.out',
      });

      gsap.to(spanNo1Ref.current, {
        rotate: '45deg',
        duration,
        ease: 'power4.out',
      });

      gsap.to(spanNo2Ref.current, {
        height: '0px',
        duration: duration / 2,
        ease: 'power4.out',
      });

      gsap.to(spanNo3Ref.current, {
        rotate: '-45deg',
        duration,
        ease: 'power4.out',
      });

      gsap.to(menuRef.current, {
        left: '50%',
        duration,
        ease: 'power4.out',
      });

      gsap.to(bulletNo1Ref.current, {
        delay: 0,
        opacity: 1,
        translateX: '0px',
        duration,
        ease: 'power4.out',
      });

      gsap.to(bulletNo2Ref.current, {
        delay: duration / 4,
        opacity: 1,
        translateX: '0px',
        duration,
        ease: 'power4.out',
      });

      gsap.to(bulletNo3Ref.current, {
        delay: duration / 2,
        opacity: 1,
        translateX: '0px',
        duration,
        ease: 'power4.out',
      });

      gsap.to(menuItemNo1Ref.current, {
        delay: 0,
        opacity: 1,
        translateX: '0px',
        duration,
        ease: 'power4.out',
      });

      gsap.to(menuItemNo2Ref.current, {
        delay: duration / 4,
        opacity: 1,
        translateX: '0px',
        duration,
        ease: 'power4.out',
      });

      gsap.to(menuItemNo3Ref.current, {
        delay: duration / 2,
        opacity: 1,
        translateX: '0px',
        duration,
        ease: 'power4.out',
      });

      gsap.to(iconNo1Ref.current, {
        delay: .5,
        opacity: 1,
        translateY: '0px',
        duration,
        ease: 'power4.out',
      });

      gsap.to(iconNo2Ref.current, {
        delay: .625,
        opacity: 1,
        translateY: '0px',
        duration,
        ease: 'power4.out',
      });

      gsap.to(iconNo3Ref.current, {
        delay: .75,
        opacity: 1,
        translateY: '0px',
        duration,
        ease: 'power4.out',
      });
    }
    else {
      gsap.to(buttonRef.current, {
        gap: '0.25rem',
        duration,
        ease: 'power4.out',
      });

      gsap.to(spanNo1Ref.current, {
        rotate: '0deg',
        duration,
        ease: 'power4.out',
      });

      gsap.to(spanNo2Ref.current, {
        height: '3px',
        duration: duration / 2,
        ease: 'power4.out',
      });

      gsap.to(spanNo3Ref.current, {
        rotate: '0deg',
        duration,
        ease: 'power4.out',
      });

      gsap.to(menuRef.current, {
        left: 'calc(100% + 2.75rem)',
        duration,
        ease: 'power4.out',
      });

      gsap.to(bulletNo1Ref.current, {
        delay: 0,
        opacity: 0,
        translateX: '-1rem',
        duration,
        ease: 'power4.out',
      });

      gsap.to(bulletNo2Ref.current, {
        delay: duration / 4,
        opacity: 0,
        translateX: '-1rem',
        duration,
        ease: 'power4.out',
      });

      gsap.to(bulletNo3Ref.current, {
        delay: duration / 2,
        opacity: 0,
        translateX: '-1rem',
        duration,
        ease: 'power4.out',
      });

      gsap.to(menuItemNo1Ref.current, {
        delay: 0,
        opacity: 0,
        translateX: '2rem',
        duration,
        ease: 'power4.out',
      });

      gsap.to(menuItemNo2Ref.current, {
        delay: duration / 4,
        opacity: 0,
        translateX: '2rem',
        duration,
        ease: 'power4.out',
      });

      gsap.to(menuItemNo3Ref.current, {
        delay: duration / 2,
        opacity: 0,
        translateX: '2rem',
        duration,
        ease: 'power4.out',
      });

      gsap.to(iconNo1Ref.current, {
        delay: .5,
        opacity: 0,
        translateY: '1.5rem',
        duration,
        ease: 'power4.out',
      });

      gsap.to(iconNo2Ref.current, {
        delay: .625,
        opacity: 0,
        translateY: '1.5rem',
        duration,
        ease: 'power4.out',
      });

      gsap.to(iconNo3Ref.current, {
        delay: .75,
        opacity: 0,
        translateY: '1.5rem',
        duration,
        ease: 'power4.out',
      });
    }

    document.addEventListener('click', hideMenu);

    return () => {
      document.removeEventListener('click', hideMenu);
    };
  }, [isClicked]);


  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden font-mono`}
      >
        <header className='fixed inset-x-0 top-0 p-6'>
          <nav className="flex justify-end">
            <button className={`size-11 bg-[#f9ec0c] rounded-md z-20 flex flex-col gap-[3px] justify-center items-center`} onClick={toggleMenu} ref={buttonRef}>
              <span className={`bg-black rounded-full w-3 h-[3px]`} ref={spanNo1Ref}></span>
              <span className={`bg-black rounded-full w-3 h-[3px]`} ref={spanNo2Ref}></span>
              <span className={`bg-black rounded-full w-3 h-[3px]`} ref={spanNo3Ref}></span>
            </button>
            <div className={`z-10 absolute w-1/2 inset-y-0 bg-[#008C44] top-0 h-svh flex flex-col justify-center items-center left-[calc(100%+2.75rem)]`} ref={menuRef}>
              <div className='text-8xl uppercase'>
                <div className='flex items-center gap-8'>
                  <span className={`text-lg text-white opacity-0 -translate-x-4`} ref={bulletNo1Ref}>
                    I
                  </span>
                  <a href={'/foodchin'} className={`py-4 text-[#f9ec0c] hover:text-white transition-colors duration-500 translate-x-8 opacity-0`} ref={menuItemNo1Ref}>
                    foodchin
                  </a>
                </div>
                <div className='flex items-center gap-8'>
                  <span className={`text-lg text-white opacity-0 -translate-x-4`} ref={bulletNo2Ref}>
                    II
                  </span>
                  <a href={'/about'} className={`py-4 text-[#f9ec0c] hover:text-white transition-colors duration-500 translate-x-8 opacity-0`} ref={menuItemNo2Ref}>
                    about
                  </a>
                </div>
                <div className='flex items-center gap-8'>
                  <span className={`text-lg text-white opacity-0 -translate-x-4`} ref={bulletNo3Ref}>
                    III
                  </span>
                  <a href={'/contact'} className={`py-4 text-[#f9ec0c] hover:text-white transition-colors duration-500 translate-x-8 opacity-0`} ref={menuItemNo3Ref}> 
                    contact
                  </a>
                </div>
              </div>
              <ul className='absolute flex gap-4 bottom-8 inset-x-0 justify-center'>
                <li>
                  <a href="#">
                    <svg ref={iconNo1Ref} className={`size-6 stroke-[#f9ec0c] opacity-0 translate-y-6 fill-transparent`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg ref={iconNo2Ref} className={`size-6 stroke-[#f9ec0c] opacity-0 translate-y-6 fill-transparent`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg ref={iconNo3Ref} className={`size-6 stroke-[#f9ec0c] opacity-0 translate-y-6 fill-transparent`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
