import { useEffect, useState } from "react";
import { type ArtistInfo } from "../types";
import { fetchArtist } from "../services/artistService";


export const useArtists = (artistIds: Array<string>) => {
    const [artists, setArtists] = useState<Array<ArtistInfo> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await Promise.all(
                    artistIds.map((artistId) => fetchArtist(artistId))
                );
                const dataJson: Array<ArtistInfo> = data.filter(
                    (artist): artist is ArtistInfo => artist !== null
                );
                setArtists(dataJson);
            } catch (error) {
                setError(error as Error);
                setArtists([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();



    }, [artistIds]);

    return { artists, loading, error };
}