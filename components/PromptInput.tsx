
import React from 'react';
import MagicWandIcon from './icons/MagicWandIcon';

interface PromptInputProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  disabled: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({
  prompt,
  onPromptChange,
  onSubmit,
  isLoading,
  disabled,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (!disabled && !isLoading) {
        onSubmit();
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g., 'add a futuristic helmet to the person'"
        disabled={disabled || isLoading}
        className="w-full h-24 p-4 bg-gray-800/50 border border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 placeholder-gray-500 disabled:cursor-not-allowed"
      />
      <button
        onClick={onSubmit}
        disabled={disabled || isLoading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            <span>Generating...</span>
          </>
        ) : (
          <>
            <MagicWandIcon className="w-5 h-5" />
            <span>Apply Magic Edit</span>
          </>
        )}
      </button>
    </div>
  );
};

export default PromptInput;
