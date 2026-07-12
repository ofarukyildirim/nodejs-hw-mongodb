import multer from 'multer';
import { TEMP_UPLOAD_DIR } from '../constants/index.js';

export const upload = multer({
  dest: TEMP_UPLOAD_DIR,
});
