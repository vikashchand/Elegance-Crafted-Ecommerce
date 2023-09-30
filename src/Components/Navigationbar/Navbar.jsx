import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
          //  give the image url  
            className="h-8 mr-3"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Elegance Crafted &#127801;
          </span>
          
          <div className="cursor-pointer hover:text-blue-700">
            <span role="img" aria-label="Cart">
              🛒
            </span>
          </div>
          <div className="cursor-pointer hover:text-blue-700">
            <span role="img" aria-label="Like">
              ❤️
            </span>
          </div>
          <div className="cursor-pointer hover:text-blue-700">
            <span role="img" aria-label="Euro">
              💶
            </span>
          </div>
          <div className="cursor-pointer hover:text-blue-700">
            <span role="img" aria-label="Photo">
              📷
            </span>
          </div>

        </a>
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                aria-current="page"
              >
                Store
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Designers 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Categories
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
          <input
            type="text"
            className="w-full placeholder-gray-400 text-gray-900 p-4"
            placeholder="🔍Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar; 
