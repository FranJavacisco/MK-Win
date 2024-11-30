import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImagen from '../assets/hero.jpg'
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'

const AILandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 lg:p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <span className="text-xl font-bold">MK-Win</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-gray-300 transition-colors">Search</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Services</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Tools</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Features</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Sign Up
          </button>
          <button className="hidden md:block text-white hover:text-gray-300 transition-colors">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative max-w-7xl mx-auto px-4 pt-8 md:pt-12 pb-24">
        {/* Background text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-800 text-[120px] md:text-[200px] font-bold opacity-20 select-none whitespace-nowrap">
          Finish Him
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Custom Combat<br />Development
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              We unleash the power of your character, creating innovative and lethal combat systems designed to push your skills to the limit in the Mortal Kombat arena. We develop techniques that redefine combat, offering unpredictable challenges and deadly strategies in every fight.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl hover:from-red-700 hover:to-red-900 flex items-center space-x-2 group mx-auto lg:mx-0">
              <span>Custom Combat</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-12 mt-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-red-600">320M+</h3>
                <p className="text-gray-400">Business</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-red-600">590K+</h3>
                <p className="text-gray-400">Happy Client</p>
              </div>
            </div>
          </div>

          {/* Hero Image Section - Enhanced with 3D effects */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square max-w-[500px] mx-auto group perspective">
              {/* Ambient light effect */}
              <div className="absolute inset-0 bg-gradient-radial from-red-500/20 via-transparent to-transparent blur-2xl group-hover:scale-110 transition-transform duration-700"></div>

              {/* Hero image container with 3D effects */}
              <div className="relative z-10 transform group-hover:translate-z-10 group-hover:-translate-y-2 transition-all duration-500 preserve-3d">
                {/* Floating shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-red-500/10 blur-2xl rounded-full transform-gpu transition-all duration-500 group-hover:scale-110"></div>

                {/* Main image with effects */}
                <div className="relative rounded-full overflow-hidden transform-gpu transition-transform duration-500 group-hover:scale-105">
                  {/* Glowing border */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-blue-500/10 to-purple-500/20 animate-gradient"></div>

                  {/* Image */}
                  <img
                    src={heroImagen}
                    alt="AI Robot"
                    className="w-full h-full object-contain relative z-10 transform-gpu transition-all duration-500 animate-float"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(255,0,0,0.2))',
                    }}
                  />

                  {/* Overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 mix-blend-overlay"></div>
                </div>
              </div>

              {/* Floating elements with enhanced effects */}

              <div className="absolute -left-8 top-1/4 w-20 h-20 md:w-24 md:h-24 z-20">
                <img
                  src={feature1}  // Reemplaza con tu ruta de imagen
                  alt="Feature 1"
                  className="w-full h-full object-cover rounded-xl transform rotate-12 hover:rotate-0 
               transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/20 
               animate-float-slow"
                />
              </div>

              <div className="absolute -right-8 top-1/3 w-20 h-20 md:w-24 md:h-24 z-20">
                <img
                  src={feature2}  // Reemplaza con tu ruta de imagen
                  alt="Feature 2"
                  className="w-full h-full object-cover rounded-xl transform -rotate-12 hover:rotate-0 
               transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/20 
               animate-float-slower"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-gray-400 mb-8">
            Trusted By More Than <span className="text-red-600">+90,999,000</span> Generate AI
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50">
            <div className="w-16 md:w-24">Company 1</div>
            <div className="w-16 md:w-24">Company 2</div>
            <div className="w-16 md:w-24">Company 3</div>
            <div className="w-16 md:w-24">Company 4</div>
            <div className="w-16 md:w-24">Company 5</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AILandingPage;