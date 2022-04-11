import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { getRadioPlaylist, Playlist, Radio } from "@waves/waves-data";
import ReactHowler from 'react-howler';
import dynamic from 'next/dynamic';
import { isIOS, isSafari } from 'react-device-detect';
import { HlsPlayerProps } from '@waves/waves-ui';
import useSWR from 'swr';
import { getPreviousRadio, getNextRadio, assetPath } from './helpers';

const HlsPlayer = dynamic<HlsPlayerProps>(() => import('@waves/waves-ui').then((lib) => lib.HlsPlayer), { ssr: false });

interface IMediaPlayerContext {
  radio: Radio | null;
  playlist: Playlist | null;
  load: (radio: Radio) => void;
  play: () => void;
  pause: () => void;
  previous: () => void;
  next: () => void;
}

const MediaPlayerContext = createContext<IMediaPlayerContext>({
  radio: null,
  playlist: null,
  load() {
    // Dummy
  },
  play() {
    // Dummy
  },
  pause() {
    // Dummy
  },
  previous() {
    // Dummy
  },
  next() {
    // Dummy
  }
});

export function MediaPlayerProvider({ children }: { children: React.ReactNode }) {
  const [radio, setRadio] = useState<Radio | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  const { data } = useSWR(radio?.title, () => getRadioPlaylist(radio), { refreshInterval: 5000, refreshWhenHidden: true });
  useEffect(() => setPlaylist(data), [data]);

  const contextValue = useMemo(() => ({
    radio,
    playlist,
    load(radio: Radio) {
      setRadio(radio);
    },
    play() {
      setPlaying(true);
    },
    pause() {
      setPlaying(false);
    },
    previous() {
      setRadio(getPreviousRadio(radio));
    },
    next() {
      setRadio(getNextRadio(radio));
    }
  }), [radio, playlist, setRadio]);

  const isNativeHlsSupported = isSafari || isIOS;

  return (
    <MediaPlayerContext.Provider value={contextValue}>
      {children}

      <ReactHowler
        src={radio ? radio.stream : '/'}
        preload={false}
        playing={playing && radio && (radio.player === 'howler' || isNativeHlsSupported)}
        html5={true}
      />

      { !isNativeHlsSupported && radio && radio.player === 'hls' &&
        <HlsPlayer
          src={radio.stream}
          autoPlay={playing}
          controls={false}
          width={0}
          height={0}
        />
      }

    </MediaPlayerContext.Provider>
  );
}

export function MediaPlayerConsumer({ children }) {
  return (
    <MediaPlayerContext.Consumer>
      {context => children(context)}
    </MediaPlayerContext.Consumer>
  );
}

export function useMediaPlayer() {
  const context: IMediaPlayerContext = useContext(MediaPlayerContext);

  return {
    ...context
  }
}