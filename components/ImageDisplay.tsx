
import React from 'react';
import { ImageData } from '../types';
import Loader from './Loader';

interface ImageDisplayProps {
  originalImage: ImageData | null;
  editedImage: string | null;
  isLoading: boolean;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalImage, editedImage, isLoading }) => {
  if (!originalImage) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900/50 rounded-xl border border-gray-700">
        <p className="text-gray-500">Upload an image to see it here</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-center text-gray-400">Original</h3>
        <div className="aspect-square w-full bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
          <img
            src={`data:${originalImage.mimeType};base64,${originalImage.base64}`}
            alt="Original"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-center text-gray-400">Edited</h3>
        <div className="relative aspect-square w-full bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
          {isLoading && <Loader />}
          {editedImage ? (
            <img
              src={editedImage}
              alt="Edited"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Your edited image will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
