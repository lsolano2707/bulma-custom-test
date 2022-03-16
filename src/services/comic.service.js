import axios from 'axios';

const getLastComic = () => axios.get('/api/info.0.json');

const getComicById = (comicId) => axios.get(`/api/${comicId}/info.0.json`);

export default {
  getLastComic,
  getComicById,
};
