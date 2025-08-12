export interface Song {
  id: string;
  title: string;
  artist: {
    name: string;
    image: string;
  };
  album: {
    name: string;
    image: string;
  };
  releaseDate: string;
  genre: string;
  previewUrl?: string;
  lyrics?: string;
}