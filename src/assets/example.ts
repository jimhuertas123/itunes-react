

const xd = {
  "artistId": 582839620,
  "artistName": "Codyne & Prohibit",
  "artistViewUrl": "https://music.apple.com/us/artist/codyne/582839620?uo=4",
  "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8d/f6/f9/8df6f969-74b6-ebe5-7c9b-25616c58bf76/05cab725-512c-4e29-9557-5d3ceeef519e.jpg/100x100bb.jpg",
  "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8d/f6/f9/8df6f969-74b6-ebe5-7c9b-25616c58bf76/05cab725-512c-4e29-9557-5d3ceeef519e.jpg/30x30bb.jpg",
  "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8d/f6/f9/8df6f969-74b6-ebe5-7c9b-25616c58bf76/05cab725-512c-4e29-9557-5d3ceeef519e.jpg/60x60bb.jpg",
  "collectionArtistName": "Codyne",
  "collectionCensoredName": "Not the Suicideboys (Freestyle) - Single",
  "collectionExplicitness": "explicit",
  "collectionId": 1523059592,
  "collectionName": "Not the Suicideboys (Freestyle) - Single",
  "collectionPrice": 1.98,
  "collectionViewUrl": "https://music.apple.com/us/album/suicideboys-freestyle/1523059592?i=1523059595&uo=4",
  "contentAdvisoryRating": "Explicit",
  "country": "USA",
  "currency": "USD",
  "discCount": 1,
  "discNumber": 1,
  "isStreamable": true,
  "kind": "song",
  "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4c/08/82/4c08828b-843c-610e-a2d6-e4b5d3b8d01a/mzaf_1531764676535477477.plus.aac.p.m4a",
  "primaryGenreName": "Hip-Hop/Rap",
  "releaseDate": "2020-07-31T12:00:00Z",
  "trackCensoredName": "Suicideboys (Freestyle)",
  "trackCount": 2,
  "trackExplicitness": "explicit",
  "trackId": 1523059595,
  "trackName": "Suicideboys (Freestyle)",
  "trackNumber": 2,
  "trackPrice": 0.99,
  "trackTimeMillis": 172069,
  "trackViewUrl": "https://music.apple.com/us/album/suicideboys-freestyle/1523059592?i=1523059595&uo=4",
  "wrapperType": "track"
};

export const mockSong = {
  id: "123",
  title: "Fake Song Title",
  artist: {
    name: "John Doe",
    image: "https://placehold.co/150x150/png" // Imagen del artista
  },
  album: {
    name: "Greatest Hits",
    image: "https://placehold.co/300x300/png" // Portada del álbum
  },
  releaseDate: "2024-05-15",
  genre: "Pop",
  previewUrl: "https://p.scdn.co/mp3-preview/example", // opcional si quieres un audio preview
  lyrics: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
};

export type SongFake = typeof mockSong;