import type { Song } from "../types/Song";
import { adaptITunesResponseToSong, type ITunesResults, type ITunesSongResponse } from "../types";
import { apiConfig, iTunesApi } from "./apiClient";

const cachedQuery = new Map<string, { songs: Song[]; timestamp: number }>();
const CACHE_TTL = 3 * 60 * 60 * 1000;


//cached version
export async function fetchSongs(query: string): Promise<Song[]> {

    try {
        const healthRes = await fetch(iTunesApi);
        if (!healthRes.ok) {
            throw new Error(`iTunes API health check failed with status: ${healthRes.status}`);
        }
    } catch (error) {
        throw new Error(`Unable to reach iTunes API: ${error}`);
    }

    //cache size is 5, remove the oldest entry, but not the empty query ""
    const cache = cachedQuery.get(query);
    const now = Date.now();

    if (cache && (now - cache.timestamp < CACHE_TTL)) {
        return cache.songs;
    }

    const songs = await fetchItunesAPISongs(query);
    cachedQuery.set(query, { songs, timestamp: now });

    if (cachedQuery.size > 5) {
        let oldestKey: string | undefined;
        let oldestTimestamp = Infinity;
        for (const [key, value] of cachedQuery.entries()) {
            if (key !== "" && value.timestamp < oldestTimestamp) {
                oldestTimestamp = value.timestamp;
                oldestKey = key;
            }
        }
        if (oldestKey !== undefined) {
            cachedQuery.delete(oldestKey);
        }
    }

    console.log(cachedQuery);
    return songs;
}

export async function fetchItunesAPISongs(query: string): Promise<Array<Song>> {
    try {
        const res = await fetch(`${iTunesApi}?term=${query}&media=music&deploy=${apiConfig.useDeployApi ? 'true' : 'false'}`);
        if (!res.ok) throw new Error('Network response was not ok');
        const dataJson = await res.json() as ITunesSongResponse;

        return dataJson.results.map((item: ITunesResults) => adaptITunesResponseToSong(item));

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}