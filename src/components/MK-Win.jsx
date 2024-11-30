import React from 'react';
import { ArrowRight } from 'lucide-react';

const AILandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center">
          <span className="text-xl font-bold">CrAI.studio</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-gray-300">Search</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Tools</a>
          <a href="#" className="hover:text-gray-300">Features</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Sign Up
          </button>
          <button className="text-white hover:text-gray-300">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative container mx-auto px-4 pt-12 pb-24">
        {/* Background text */}
        <div className="absolute top-0 left-0 text-gray-800 text-[200px] font-bold opacity-20 select-none">
          GENERAT
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom AI<br />Development
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              We ignite the magic of intelligence, creating systems that bring brighter, unimaginable and leading-edge innovations.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-2xl hover:from-red-700 hover:to-red-900 flex items-center space-x-2 group">
              <span>Custom your AI</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Stats */}
            <div className="flex space-x-12 mt-12">
              <div>
                <h3 className="text-4xl font-bold text-red-600">320M+</h3>
                <p className="text-gray-400">Business</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-red-600">590K+</h3>
                <p className="text-gray-400">Happy Client</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 relative mt-12 md:mt-0">
            <div className="relative w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent rounded-3xl overflow-hidden">
              <img 
                src="/api/placeholder/600/600" 
                alt="AI Robot" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            {/* Floating AI Cards */}
            <div className="absolute -left-16 top-1/4">
              <div className="w-24 h-24 bg-gray-900 rounded-xl rotate-12"></div>
            </div>
            <div className="absolute -right-16 top-1/3">
              <div className="w-24 h-24 bg-gray-900 rounded-xl -rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-24 text-center">
          <p className="text-gray-400 mb-8">Trusted By More Than <span className="text-red-600">+90,999,000</span> Generate AI</p>
          <div className="flex justify-center space-x-12 opacity-50">
            <div className="w-24">Company 1</div>
            <div className="w-24">Company 2</div>
            <div className="w-24">Company 3</div>
            <div className="w-24">Company 4</div>
            <div className="w-24">Company 5</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AILandingPage;