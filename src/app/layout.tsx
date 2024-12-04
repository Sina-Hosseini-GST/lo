'use client'

import "./globals.css";
import { useState, useRef, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
    document.addEventListener('click', hideMenu);

    return () => {
      document.removeEventListener('click', hideMenu);
    };
  }, []);


  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden font-mono`}
      >
        <header className='fixed inset-x-0 top-0 p-6'>
          <nav className="flex justify-end">
            <button className={`size-11 bg-[#f9ec0c] rounded-md z-20 flex flex-col ${isClicked ? 'gap-[3px]' : 'gap-1'} justify-center items-center`} onClick={toggleMenu} ref={buttonRef}>
              <span className={`bg-black rounded-full duration-500 transition-transform w-3 h-[3px] ${isClicked && 'rotate-45'}`}></span>
              <span className={`bg-black rounded-full duration-[250ms] transition-[height] w-3 ${isClicked ? 'h-0' : 'h-[3px]'}`}></span>
              <span className={`bg-black rounded-full duration-500 transition-transform w-3 h-[3px] ${isClicked && '-rotate-45'}`}></span>
            </button>
            <div className={`${isClicked ? 'left-1/2' : 'left-[calc(100%+2.75rem)]'} z-10 absolute w-1/2 inset-y-0 bg-[#008C44] top-0 h-svh transition-[left] duration-500 flex flex-col justify-center items-center`} ref={menuRef}>
              <div className='text-8xl uppercase'>
                <div className='flex items-center gap-8'>
                  <span className={`text-lg text-white delay-[0ms] transition-[opacity,transform] duration-500 ${isClicked ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    I
                  </span>
                  <a href={'/foodchin'} className={`py-4 text-[#f9ec0c] hover:text-white transition-[color,transform] delay-[0ms,0ms] duration-500 ${isClicked ? 'translate-x-0' : 'translate-x-8'}`}>
                    foodchin
                  </a>
                </div>
                <div className='flex items-center gap-8'>
                  <span className={`text-lg text-white delay-[250ms] transition-[opacity,transform] duration-500 ${isClicked ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    II
                  </span>
                  <a href={'/about'} className={`py-4 text-[#f9ec0c] hover:text-white transition-[color,transform] delay-[0ms,250ms] duration-500 ${isClicked ? 'translate-x-0' : 'translate-x-8'}`}>
                    about
                  </a>
                </div>
                <div className='flex items-center gap-8'>
                  <span className={`text-lg text-white delay-[375ms] transition-[opacity,transform] duration-500 ${isClicked ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    III
                  </span>
                  <a href={'/contact'} className={`py-4 text-[#f9ec0c] hover:text-white transition-[color,transform] delay-[0ms,375ms] duration-500 ${isClicked ? 'translate-x-0' : 'translate-x-8'}`}>
                    contact
                  </a>
                </div>
              </div>
              <ul className='absolute flex gap-4 bottom-8 inset-x-0 justify-center'>
                <li>
                  <a href="#">
                    <svg className={`size-6 transition-[opacity,transform] duration-500 delay-[875ms] stroke-[#f9ec0c] fill-transparent ${isClicked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg className={`size-6 transition-[opacity,transform] duration-500 delay-[1000ms] stroke-[#f9ec0c] fill-transparent ${isClicked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg className={`size-6 transition-[opacity,transform] duration-500 delay-[1125ms] stroke-[#f9ec0c] fill-transparent ${isClicked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
