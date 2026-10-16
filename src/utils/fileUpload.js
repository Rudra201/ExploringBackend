import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDNERY_CLOUD_NAME,
  api_key: process.env.CLOUDNERY_API_KEY,
  api_secret: process.env.CLOUDNERY_API_SECRET,
});

const cloudnaryUpload = async (localfilePath) => {
  if (!localfilePath) return null;

  try {
    const responce = await cloudinary.uploader.upload(localfilePath, { resource_type: 'auto' });
    console.log('file has been uploaded sucessfully ', responce.url);
    return responce;
  } catch (error) {
    if (fs.existsSync(localfilePath)) fs.unlinkSync(localfilePath);
    return null;
  }
};

export default cloudnaryUpload;
