import fs from 'node:fs/promises';

export const createDirIfNotExists = async (path) => {
  try {
    await fs.access(path);
  } catch {
    await fs.mkdir(path, {
      recursive: true,
    });
  }
};
