import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzY0MTUwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-[0.15]" />
      
      <div className="container mx-auto px-6 py-20 text-center relative">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-75 blur"></div>
          <img
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            className="relative w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-gray-800"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text mb-6">
            Software Development Engineer in Test
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Passionate about quality assurance and test automation. Specialized in building scalable test frameworks using Selenium, TestNG, and JUnit. Experienced in API testing and performance testing.
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/csharath10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-gray-200 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sharcharla10/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-gray-200 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:csharath10@gmail.com"
              className="p-3 bg-gray-800 text-gray-200 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <a 
            href="#projects"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl font-semibold inline-block"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;