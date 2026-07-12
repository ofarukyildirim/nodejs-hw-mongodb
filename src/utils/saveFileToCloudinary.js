import { v2 as cloudinary } from 'cloudinary';

import { env } from './env.js';

cloudinary.config({
  cloud_name: env('CLOUDINARY_CLOUD_NAME'),
  api_key: env('CLOUDINARY_API_KEY'),
  api_secret: env('CLOUDINARY_API_SECRET'),
});

export const saveFileToCloudinary = async (file) => {
  const response = await cloudinary.uploader.upload(file.path);

  return response.secure_url;
};
