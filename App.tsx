
import React from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import PromptInput from './components/PromptInput';
import ImageDisplay from './components/ImageDisplay';
import { useImageEditor } from './hooks/useImageEditor';

const App: React.FC = () => {
  const {
    originalImage,
    editedImage,
    prompt,
    isLoading,
    error,
    handleImageUpload,
    handlePromptChange,
    handleSubmit,
    resetEditor,
  } = useImageEditor();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Controls */}
          <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 flex flex-col gap-6 sticky top-8">
            <div>
              <label className="text-lg font-semibold mb-2 block text-gray-300">1. Upload Image</label>
              {!originalImage ? (
                <ImageUpload onImageUpload={handleImageUpload} disabled={isLoading} />
              ) : (
                 <div className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg border border-gray-600">
                    <img src={`data:${originalImage.mimeType};base64,${originalImage.base64}`} alt="Thumbnail" className="w-16 h-16 rounded-md object-cover"/>
                    <div className="flex-grow">
                        <p className="font-semibold text-white truncate">{originalImage.name}</p>
                        <p className="text-sm text-gray-400">{originalImage.mimeType}</p>
                    </div>
                    <button onClick={resetEditor} disabled={isLoading} className="px-3 py-1.5 text-sm font-medium text-pink-400 bg-pink-900/40 rounded-md hover:bg-pink-900/60 disabled:opacity-50 disabled:cursor-not-allowed">
                        Change
                    </button>
                 </div>
              )}
            </div>
            
            <div>
                <label className="text-lg font-semibold mb-2 block text-gray-300">2. Describe Your Edit</label>
                <PromptInput
                  prompt={prompt}
                  onPromptChange={handlePromptChange}
                  onSubmit={handleSubmit}
                  isLoading={isLoading}
                  disabled={!originalImage}
                />
            </div>
             {error && (
                <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg text-sm">
                    <strong>Error:</strong> {error}
                </div>
            )}
          </div>

          {/* Right Column: Image Display */}
          <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50">
            <ImageDisplay 
              originalImage={originalImage}
              editedImage={editedImage}
              isLoading={isLoading}
            />
          </div>

        </div>
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>Powered by Google Gemini. Not for commercial use.</p>
      </footer>
    </div>
  );
};

export default App;
