import { useEffect, useState } from "react";
import { type Song, type ITunesSongResponse, adaptITunesResponseToSong } from "../types";

export const useSongs = (query: string)=>{
    const [musicResponse, setMusicResponse] = useState<Array<Song>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataJson = await fetch('/data.json')
                .then(res => {
                    setLoading(true);
                    if (!res.ok) {
                    throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                
                await new Promise(resolve => setTimeout(resolve, 3000));
                if ('results' in dataJson) {
                    setLoading(false);
                    const songs: Array<Song> = dataJson.results.map((item: ITunesSongResponse) => adaptITunesResponseToSong(item));
                    setMusicResponse(songs);
                }
            } catch (error) {
                setLoading(false);
                setError(error as Error);
            }
        };
        fetchData();
    }, [query]);

  return { musicResponse, loading, error };
}