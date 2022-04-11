export interface Radio {
  slug: string;
  title: string;
  logo: string;
  stream: string;
  player: string;
  playlist: { [key: string]: string };
}

export interface Playback {
  artist: string;
  title: string;
  cover: string;
}

export type Playlist = {
  currentPlayback: Playback,
  previousPlayback: Playback,
}