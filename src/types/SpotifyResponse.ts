import type { Song } from "./Song";

export type SpotifyResponse = {
  tracks: SpotifyResponseContent
};

export type SpotifyResponseContent = {
  href: string;
  items: Array<SpotifyTrack>;
  limit: number;
  next: string;
  offset: number;
  previus: unknown;
  total: number;
};

export type SpotifyTrack = {
  album: SpotifyAlbumInfo;
  artists: Array<SpotifyArtistInfo>;
  available_markets: Array<string>;
  disc_number: number,
  duration_ms: number,
  explicit: boolean;
  external_ids: {
      isrc: string;
  };
  external_urls: {
      spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type SpotifyArtistInfo = {
  external_urls: {
      spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;      
}

export type SpotifyAlbumInfo = {
  album_type: string;
  artists: Array<{
    external_urls: {spotify: string};
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }>;
  available_markets: Array<string>;
  external_urls: string;
  href: string;
  id: string;
  images: [
    {
      height: 640;
      url: string
      width: 640
    },
    {
      height: 300,
      url: string
      width: 300
    },
    {
      height: 64,
      url: string
      width: 64
    }
  ],
  is_playable: boolean;
  name: string;
  release_date: string,
  release_date_precision: string,
  total_tracks: number,
  type: string,
  uri: string
}


export function normalizeToTypeSong(item: SpotifyTrack): Song{
  return {
    id: item.id,
    title: item.name,
    rating: item.popularity,
    artists: item.artists.map(artist => ({id: artist.id, name: artist.name})),
    album: {
      name: item.album.name,
      type_album: item.album.type,
      image: item.album.images[1].url,
      avatarImage: item.album.images[2].url
    },
    releaseDate: item.album.release_date,
    previewUrl: item.preview_url,
    link_to_song: item.external_urls.spotify,
    explicit: item.explicit,
    is_playable: item.is_playable,
  }
}