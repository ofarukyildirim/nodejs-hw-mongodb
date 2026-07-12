import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

import { UPLOAD_DIR } from '../constants/index.js';

export const saveFileToUploadDir = async (file) => {
  const ext = path.extname(file.originalname);
  const fileName = `${randomUUID()}${ext}`;

  await fs.rename(file.path, path.join(UPLOAD_DIR, fileName));

  return `${UPLOAD_DIR}/${fileName}`;
};
