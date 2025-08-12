import { useEffect, useState } from "react";
import { type Song } from "../types";
import { fetchSongs } from "../services/songService";


export const useSongs = (query: string) => {
    const [musicResponse, setMusicResponse] = useState<Array<Song>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const dataJson = await fetchSongs(query);
                await new Promise(resolve => setTimeout(resolve, 3000));
                setMusicResponse(dataJson);

            } catch (error) {
                setError(error as Error);
                setMusicResponse([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [query]);

    return { musicResponse, loading, error };
}