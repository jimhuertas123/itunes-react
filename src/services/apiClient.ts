const USE_FAKE_API = import.meta.env.VITE_USE_FAKE_API === 'true';
const FAKE_API_URL = import.meta.env.VITE_DEVELOP_API;
const REAL_ITUNES_API = import.meta.env.VITE_ITUNES_API;
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '5000');

export const iTunesApi = USE_FAKE_API 
  ? `${FAKE_API_URL}/api/search` 
  : REAL_ITUNES_API;

console.log(`🎵 Using ${USE_FAKE_API ? 'FAKE' : 'REAL'} API:`, iTunesApi);

export const apiConfig = {
  timeout: API_TIMEOUT,
  useFakeApi: USE_FAKE_API,
  fakeApiUrl: FAKE_API_URL,
  realApiUrl: REAL_ITUNES_API
};