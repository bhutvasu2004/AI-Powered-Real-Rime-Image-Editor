
import React, { useRef, useState, useCallback } from 'react';
import { ImageData } from '../types';
import UploadIcon from './icons/UploadIcon';

interface ImageUploadProps {
  onImageUpload: (imageData: ImageData) => void;
  disabled: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, disabled }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1];
      if (base64String) {
        onImageUpload({
          base64: base64String,
          mimeType: file.type,
          name: file.name,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setIsDragging(true);
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  }, [disabled]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`relative p-6 border-2 border-dashed rounded-xl transition-colors duration-300 text-center cursor-pointer ${
        disabled
          ? 'bg-gray-800/50 border-gray-700 cursor-not-allowed'
          : isDragging
          ? 'bg-purple-900/30 border-purple-500'
          : 'bg-gray-800/50 border-gray-600 hover:border-purple-500 hover:bg-gray-800'
      }`}
      onClick={disabled ? undefined : handleClick}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
        disabled={disabled}
      />
      <div className="flex flex-col items-center justify-center text-gray-400">
        <UploadIcon className="w-12 h-12 mb-3 text-gray-500" />
        <p className="font-semibold text-gray-300">
          <span className="text-purple-400">Click to upload</span> or drag and drop
        </p>
        <p className="text-sm">PNG, JPG or WEBP</p>
      </div>
    </div>
  );
};

export default ImageUpload;
