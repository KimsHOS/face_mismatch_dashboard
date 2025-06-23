// ImagePreview.jsx
import React, { useState } from 'react';

const ImagePreview = ({ src, alt, title, type, employeeId, onClick }) => {
  const [hasError, setHasError] = useState(false);

  // Handle image load error
  const handleImageError = () => {
    setHasError(true);
  };

  // Handle reload button click
  const handleReload = () => {
    setHasError(false); // Reset error state to try loading the image again
  };

  return (
    <div className="relative">
      {hasError ? (
        <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 border border-gray-300 rounded">
          <span className="text-sm text-red-500">Failed to load</span>
          <button
            className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleReload}
          >
            Reload
          </button>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          title={title}
          className="w-24 h-24 object-cover rounded cursor-pointer"
          onClick={onClick}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default ImagePreview;