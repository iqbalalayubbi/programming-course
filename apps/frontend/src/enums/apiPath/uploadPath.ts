const BASE_URL = import.meta.env.VITE_BASE_API;

const uploadPath = {
  photo: BASE_URL + '/upload/photo',
  video: BASE_URL + '/upload/video',
};

export { uploadPath };
