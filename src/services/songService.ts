import type { Song } from "../types/Song";
import { adaptITunesResponseToSong, type ITunesSongResponse } from "../types";
import { iTunesApi } from "./apiClient";

export async function fetchSongs(query: string): Promise<Array<Song>> {
    try {
        query;
        const res = await fetch(`${iTunesApi}?term=${query}?media=music`);
        if (!res.ok) throw new Error('Network response was not ok');
        const dataJson = await res.json();
        if ('results' in dataJson) {
            return dataJson.results.map((item: ITunesSongResponse) => adaptITunesResponseToSong(item));
        }
        return [];
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}