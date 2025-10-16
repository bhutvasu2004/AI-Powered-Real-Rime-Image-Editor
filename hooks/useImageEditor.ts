
import { useState, useCallback } from 'react';
import { ImageData } from '../types';
import { editImage } from '../services/geminiService';

export const useImageEditor = () => {
  const [originalImage, setOriginalImage] = useState<ImageData | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = useCallback((imageData: ImageData) => {
    setOriginalImage(imageData);
    setEditedImage(null); // Reset edited image on new upload
    setError(null);
  }, []);

  const handlePromptChange = useCallback((value: string) => {
    setPrompt(value);
  }, []);
  
  const resetEditor = useCallback(() => {
    setOriginalImage(null);
    setEditedImage(null);
    setPrompt('');
    setIsLoading(false);
    setError(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!originalImage || !prompt.trim()) {
      setError('Please upload an image and provide an editing prompt.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setEditedImage(null);

    try {
      const result = await editImage(originalImage, prompt);
      setEditedImage(result);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, prompt]);

  return {
    originalImage,
    editedImage,
    prompt,
    isLoading,
    error,
    handleImageUpload,
    handlePromptChange,
    handleSubmit,
    resetEditor,
  };
};
