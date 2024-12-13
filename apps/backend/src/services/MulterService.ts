import multer, { Multer, StorageEngine } from 'multer';
import path from 'path';

class MulterService {
  private dirName: string;
  private storage: StorageEngine;
  private upload: Multer;

  public constructor(dirName: string) {
    this.dirName = dirName;
    this.storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, `src/uploads/${this.dirName}/`);
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Menyimpan file dengan nama unik
      },
    });
    this.upload = multer({ storage: this.storage });
  }

  public singleUpload(inputName: string) {
    return this.upload.single(inputName);
  }
}

export { MulterService };
