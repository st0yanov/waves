import { Playback, Playlist, Radio } from './waves-data';

const getMetacastPlaylist = async (radio: Radio): Promise<Playlist> => {
    const response = await fetch(radio.playlist.url);
    const data = await response.json();

    const currentPlayback: Playback = {
        artist: data.nowplaying[0].artist,
        title: data.nowplaying[0].title,
        cover: data.nowplaying[0].imageUrl ? data.nowplaying[0].imageUrl : radio.logo,
    }

    const previousPlayback: Playback = {
        artist: data.nowplaying[1].artist,
        title: data.nowplaying[1].title,
        cover: data.nowplaying[1].imageUrl ? data.nowplaying[1].imageUrl : radio.logo,
    }

    return {
        currentPlayback,
        previousPlayback,
    }
};

const getWebradPlaylist = async (radio: Radio): Promise<Playlist> => {
    const response = await fetch(radio.playlist.url);
    const data = await response.json();

    const currentPlayback: Playback = {
        artist: data.result[0].track_artist,
        title: data.result[0].track_title,
        cover: data.result[0].track_image ? data.result[0].track_image : radio.logo,
    }

    const previousPlayback: Playback = {
        artist: data.result[1].track_artist,
        title: data.result[1].track_title,
        cover: data.result[1].track_image ? data.result[1].track_image : radio.logo,
    }

    return {
        currentPlayback,
        previousPlayback,
    }
};

const getTheVoicePlaylist = async (radio: Radio): Promise<Playlist> => {
    const response = await fetch(radio.playlist.url);
    const data = await response.json();

    if (data.songs.prev === undefined) {
        return null;
    }

    let cover: string;

    if (data.songs.prev.youtube) {
        cover = data.songs.prev.youtube.startsWith('/') ? `https://thevoice.bg${data.songs.prev.youtube}` : data.songs.prev.youtube;
    } else {
        cover = radio.logo;
    }

    const currentPlayback: Playback = {
        artist: data.songs.prev.performer,
        title: data.songs.prev.song,
        cover: cover,
    }

    return {
        currentPlayback,
        previousPlayback: null,
    }
};

const getRadioPlaylist = async (radio: Radio): Promise<Playlist> | null => {
    if (!radio) {
        return null;
    }

    switch (radio.playlist.strategy) {
        case 'metacast':
            return await getMetacastPlaylist(radio);
        case 'webrad':
            return await getWebradPlaylist(radio);
        case 'thevoice':
            return await getTheVoicePlaylist(radio);
        default:
            return null;
    }
}

export { getRadioPlaylist };