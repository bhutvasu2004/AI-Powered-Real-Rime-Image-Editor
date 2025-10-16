
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl z-10">
      <div className="w-16 h-16 border-4 border-t-purple-500 border-gray-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-300 font-semibold">Generating Image...</p>
      <p className="mt-1 text-sm text-gray-400">This may take a moment.</p>
    </div>
  );
};

export default Loader;
