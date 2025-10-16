
import React from 'react';
import MagicWandIcon from './icons/MagicWandIcon';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 text-center border-b border-gray-700/50">
      <div className="flex items-center justify-center gap-3">
        <div className="p-2 bg-purple-600/20 rounded-lg">
          <MagicWandIcon className="w-8 h-8 text-purple-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Gemini Real-Time Image Editor
        </h1>
      </div>
      <p className="text-gray-400 mt-2">
        Upload an image and describe the changes you want to see.
      </p>
    </header>
  );
};

export default Header;
