import axios from 'axios';

const KEY = 'AIzaSyDOc-Ar5u2ixJRTVS_krqwHjhPdL2lJXqU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
