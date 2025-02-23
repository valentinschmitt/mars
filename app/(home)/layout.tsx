import React from 'react';
import { LayoutProps } from '@/.next/types/app/layout';
import Image from 'next/image';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('../assets/home/background-home-desktop.jpg')]">
      {/* Header and Navbar combined in one line */}
      <header className=" text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          <Image src='/shared/logo.svg' alt='logo' width={50} height={50} />
          <nav className="flex items-baseline space-x-4  bg-opacity-50">
            <a
              href="#"
              className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
             00 Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              01 Destination
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              02 Crew
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              03 Technology
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow ">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;