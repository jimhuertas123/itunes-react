import { normalizeArtist, type ArtistInfo, type SpotifyArtistResponse } from "../types";
import { iTunesApi } from "./apiClient";

const cachedArtist = new Map<string, { artist: ArtistInfo | null; timestamp: number }>();
const CACHE_TTL = 3 * 60 * 60 * 1000;

//cached version
export async function fetchArtist(artist: string): Promise<ArtistInfo | null> {

    try { 
        const healthRes = await fetch(`${iTunesApi}/health`);
        if (!healthRes.ok) {
            throw new Error(`iTunes API health check failed with status: ${healthRes.status}`);
        }
    } catch (error) {
        throw new Error(`Unable to reach iTunes API: ${error}`);
    }

    //cache size is 25, remove the oldest entry
    const cache = cachedArtist.get(artist);
    const now = Date.now();

    if (cache && (now - cache.timestamp < CACHE_TTL)) {
        return cache.artist;
    }

    const result = await fetchItunesAPIArtist(artist);

    cachedArtist.set(artist, { artist: result, timestamp: now });

    if (cachedArtist.size > 25) {
        let oldestKey: string | undefined;
        let oldestTimestamp = Infinity;
        for (const [key, value] of cachedArtist.entries()) {
            if (value.timestamp < oldestTimestamp) {
                oldestTimestamp = value.timestamp;
                oldestKey = key;
            }
        }
        if (oldestKey !== undefined) {
            cachedArtist.delete(oldestKey);
        }
    }

    console.log(cachedArtist);
    return result;
}

export async function fetchItunesAPIArtist(id: string): Promise<ArtistInfo | null> {
    try {

        const res = await fetch(`${iTunesApi}/artist?id=${id}`);
        
        res
        if (!res.ok) throw new Error('Network response was not ok');

        const dataJson = await res.json() as SpotifyArtistResponse;
        const normalizeData = normalizeArtist(dataJson);
        
        return normalizeData;

    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}