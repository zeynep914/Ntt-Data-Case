import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-2">
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
        <img src="/1.png" width={220} height={55} />
        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <hr />
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="flex text-base text-gray-600 lg:justify-between lg:items-center lg:px-20">
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700" href="#">
                Menu Item
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700" href="#">
                Menu Item
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700" href="#">
                Menu Item
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700" href="#">
                Menu Item
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700" href="#">
                Menu Item
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700" href="#">
                Menu Item
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700" href="#">
                Menu Item
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700" href="#">
                Menu Item
              </a>
            </li>            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
