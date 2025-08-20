export type SpotifyArtistResponse = {
    external_urls: {
        spotify: string
    },
    followers: {
        href: null,
        total: number
    },
    genres: Array<string>,
    href: string,
    id: string,
    images: [
        {
            height: 640;
            url: string;
            width: 640;
        },
        {
            height: 300;
            url: string;
            width: 300;
        },
        {
            height: 64;
            url: string;
            width: 64;
        }
    ],
    name: string,
    popularity: number,
    type: string,
    uri: string
}

export type ArtistInfo = {
    name: string;
    id: string;
    imageUrl: string;
    url_profile: string
    gender: Array<string>;
    followers: number;
    popularity: number;
}


export function normalizeArtist(artist: SpotifyArtistResponse): ArtistInfo{
    return {
        name: artist.name,
        id: artist.id,
        imageUrl: artist.images[2].url,
        url_profile: artist.external_urls.spotify,
        gender: artist.genres.map( genre => ( genre )),
        followers: artist.followers.total,
        popularity: artist.popularity,
    }
}