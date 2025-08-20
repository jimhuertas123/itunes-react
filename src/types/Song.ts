export interface Song {
  id: string;
  title: string;
  rating: number;
  artists: Array<{
    id: string;
    name: string;
  }>;
  album: {
    name: string;
    type_album: string;
    image: string;
    avatarImage: string;
  };
  releaseDate: string;
  previewUrl?: string;
  link_to_song: string
  explicit: boolean;
  is_playable: boolean;
}