import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Header() {

const [navbar, setNavbar] = useState(false);
const { theme, setTheme } = useTheme();

  return (
    <>   
        <nav className="lg:w-1/2 mx-auto bg-slate-100 dark:bg-slate-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
            
            <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full py-2 text-black bg-none dark:bg-white dark:text-black">
          {theme === 'dark' ? <FiMoon /> : <FiSun />}
        </button>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-md"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-md"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-medium">
                <li className="text-md">
                  <Link href="/" className='text-slate-600 hover:text-slate-800 hover:dark:text-black'>
                    Home
                  </Link>
                </li>
                <li className="text-md">
                  <Link href="/experience" className='text-slate-600 hover:text-slate-800 hover:dark:text-black'>
                    Experience
                  </Link>
                </li>
                <li className="text-md">
                  <Link href="/project" className='text-slate-600 hover:text-slate-800 hover:dark:text-black'>
                    Project
                  </Link>
                </li>
                {/* <li className="text-md">
                  <Link href="/contact" className='text-slate-600 hover:text-slate-800 hover:dark:text-black'>
                    Contact
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
    
  )
}
