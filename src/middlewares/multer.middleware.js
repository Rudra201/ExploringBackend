import fs from 'node:fs';
import multer from 'multer';

const uploadDirectory = 'uploads/';
fs.mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
  // Specify the folder where files should be saved
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

export const upload = multer({ storage });
