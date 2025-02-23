import { Bellefair } from 'next/font/google';

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bellefair', // Custom CSS variable for Tailwind
});

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16 ">
      {/* Left Column: Text Content */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-lg mb-4 text-white">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className="text-8xl font-bold mb-6 text-white {bellefair.variable}">SPACE</h1>
        <p className="max-w-md text-base text-gray-300 mb-8">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. We’ll sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
  
      {/* Right Column: Explore Button */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <button className="bg-white text-gray-900 font-bold text-lg py-4 px-8 rounded-full hover:bg-gray-200 transition">
          EXPLORE
        </button>
      </div>
    </div>
  )}