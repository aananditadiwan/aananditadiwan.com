import React, { useState } from 'react';
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Navbar() {
  const[dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <header class="text-gray-600 body-font shadow-md dark:text-gray-400 dark:bg-gray-900">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <img src="/annie.png" alt="" className="w-10 h-10 rounded-full" />
          <span class="ml-3 text-xl">Aanandita Diwan</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900 dark:hover:text-white">First Link</a>
          <a class="mr-5 hover:text-gray-900 dark:hover:text-white">Second Link</a>
          <a class="mr-5 hover:text-gray-900 dark:hover:text-white">Third Link</a>
          <a class="mr-5 hover:text-gray-900 dark:hover:text-white">Fourth Link</a>
        </nav>
        <button onClick={darkModeHandler} >
          { dark && <IoSunny /> }
          { !dark && <IoMoon /> }
        </button>
      </div>
    </header>
  )
}
