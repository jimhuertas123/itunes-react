const USE_DEVELOP_API = import.meta.env.VITE_DEVELOP_API === 'true';
const ITUNES_API_URL = import.meta.env.VITE_ITUNES_API;
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '5000');


export const iTunesApi = ITUNES_API_URL

console.log(`🎵 Using ${USE_DEVELOP_API ? 'FAKE' : 'REAL'} API:`, iTunesApi);

export const apiConfig = {
  timeout: API_TIMEOUT,
  useDeployApi: USE_DEVELOP_API,
  realApiUrl: ITUNES_API_URL
};