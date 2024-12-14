import { useMentorManagement } from '@/stores';
import { Flex } from 'antd';
import React, { useState } from 'react';

const UploadThumbnail: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { setNewCourseData, newCourseData } = useMentorManagement();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setNewCourseData({ ...newCourseData, selectedImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full p-2 border rounded-lg bg-white">
      {imagePreview && (
        <div className="relative mb-4 h-48 overflow-hidden w-full">
          <img
            src={imagePreview}
            alt="Preview"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      )}
      <label className="block mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="file-upload"
        />
        <Flex
          align="center"
          justify="center"
          className="w-full h-12 border border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="text-gray-600">Select Image</span>
        </Flex>
      </label>
    </div>
  );
};

export { UploadThumbnail };
