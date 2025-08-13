import type { Song } from "./Song";

export type ITunesSongResponse = {
  resultCount: number;
  results: ITunesResults[]
}

export interface ITunesResults {
    artistId: number;
    artistName: string;
    artistViewUrl: string;
    artworkUrl100: string;
    artworkUrl30: string;
    artworkUrl60: string;
    collectionArtistName: string;
    collectionCensoredName: string;
    collectionExplicitness: string;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    collectionViewUrl: string;
    contentAdvisoryRating: string;
    country: string;
    currency: string;
    discCount: number;
    discNumber: number;
    isStreamable: boolean;
    kind: string;
    previewUrl: string;
    primaryGenreName: string;
    releaseDate: string;
    trackCensoredName: string;
    trackCount: number;
    trackExplicitness: string;
    trackId: number;
    trackName: string;
    trackNumber: number;
    trackPrice: number;
    trackTimeMillis: number;
    trackViewUrl: string;
    wrapperType: string;
};
 
export function adaptITunesResponseToSong(response: ITunesResults): Song {
  return {
    id: response.trackId.toString(),
    title: response.trackName,
    artist: {
      name: response.artistName,
      image: response.artworkUrl100,
    },
    album: {
      name: response.collectionName,
      image: response.artworkUrl100,
    },
    releaseDate: response.releaseDate,
    genre: response.primaryGenreName,
    previewUrl: response.previewUrl,
  };
}


