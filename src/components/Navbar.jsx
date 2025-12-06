import React, { useState } from 'react';
import { IoMoon, IoSunny,IoCall } from "react-icons/io5";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <header className="text-gray-600 body-font shadow-md dark:text-gray-400 dark:bg-gray-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <img src="./annie.png" alt="" className="w-10 h-10 rounded-full" />
          <span className="ml-3 text-xl">Aanandita Diwan</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <p className="mr-5 hover:text-gray-900 dark:hover:text-white">
            <a
              href="https://www.linkedin.com/in/aananditadiwan"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin mr-2"></i>Linkedin
            </a>
          </p>
          <p className="mr-5 hover:text-gray-900 dark:hover:text-white">
            <a
              href="https://www.github.com/aananditadiwan"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github mr-2"></i>Github
            </a>
          </p>
          <p className="mr-5 hover:text-gray-900 dark:hover:text-white">
            <a href="mailto:iam@aananditadiwan.com" className="hover:underline">
              <i className="fas fa-envelope mr-2"></i>Email
            </a>
          </p>
          <p className="mr-5 hover:text-gray-900 dark:hover:text-white">
            <a href="tel:+919990864545" className="hover:underline">
              <IoCall className="mr-2 inline-block align-text-bottom" />Phone
            </a>
          </p>
        </nav>
        <button onClick={darkModeHandler} className="flex items-center gap-2 mt-4 lg:mt-0">
          {dark ? (
            <>
              <IoSunny className="text-yellow-500" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <IoMoon className="text-gray-500" />
              <span>Dark Mode</span>
            </>
          )}
        </button>

      </div>
    </header>
  )
}
