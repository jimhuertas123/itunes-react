import fs from 'fs';
import path from 'path';
import type { ITunesResults, ITunesSongResponse } from '../types';

const USE_REAL_API = process.env.USE_REAL_API === 'true';

type Response = {
    req: {
        query: { 
            term?: string; 
            limit?: number | undefined; 
            media?: string
        };
    }
    res: { 
        json: (
            arg0: { resultCount: number; results: ITunesResults[];}
        ) => any
    }
}

export default async function handler({req, res}: Response ) {
  const { term = '', limit = 50, media = 'music' } = req.query;

  if (USE_REAL_API) {
    const apiUrl = `https://itunes.apple.com/search?term=${term}&limit=${limit}&media=${media}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    return res.json(data);

  } else {

    const dataPath = path.join(process.cwd(), 'public', 'data.json');
    const musicData: ITunesSongResponse = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    let filteredResults = musicData.results;
    if (term) {
      const searchTerm = String(term).toLowerCase();
      filteredResults = musicData.results.filter(item =>
        item.trackName?.toLowerCase().includes(searchTerm) ||
        item.artistName?.toLowerCase().includes(searchTerm) ||
        item.collectionName?.toLowerCase().includes(searchTerm) ||
        item.primaryGenreName?.toLowerCase().includes(searchTerm)
      );
    }

    const limitNum = parseInt(String(limit));
    if (limitNum > 0) {
      filteredResults = filteredResults.slice(0, limitNum);
    }

    return res.json({
      resultCount: filteredResults.length,
      results: filteredResults
    });
  }
}