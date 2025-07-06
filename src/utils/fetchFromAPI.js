import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '9c261b375bmshde519f6104267eap1fb94fjsnfc1fef5475ad',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
