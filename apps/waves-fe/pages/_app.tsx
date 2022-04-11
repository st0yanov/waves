import { AppProps } from 'next/app';
import Head from 'next/head';
import { MediaPlayerProvider, MediaPlayerConsumer } from '../utils/media-player';
import dynamic from 'next/dynamic';
import './styles.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { assetPath } from '../utils/helpers';

const MediaSession = dynamic(() => import('@mebtte/react-media-session'), { ssr: false });

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        { process.env.NODE_ENV === 'production' &&
          <meta httpEquiv='Content-Security-Policy' content="upgrade-insecure-requests" />
        }
      </Head>
      <div className="app">
        <main>
          <DefaultSeo {...SEO} />
          <MediaPlayerProvider>
            <Component {...pageProps} />
            <MediaPlayerConsumer>
              {({radio, playlist, play, pause, previous, next}) => {
                return (
                  playlist ? <MediaSession
                    title={playlist.currentPlayback.title}
                    artist={playlist.currentPlayback.artist}
                    artwork={[
                      {
                        src: playlist.currentPlayback.cover.startsWith('http') ? playlist.currentPlayback.cover : assetPath(playlist.currentPlayback.cover),
                        sizes: '96x96,128x128,192x192,256x256,384x384,512x512',
                        type: 'image/jpeg',
                      },
                    ]}
                    onPlay={play}
                    onPause={pause}
                    onPreviousTrack={previous}
                    onNextTrack={next}
                  /> : (radio && <MediaSession
                    title='Радио'
                    artist={radio.title}
                    artwork={[
                      {
                        src: assetPath(radio.logo),
                        sizes: '96x96,128x128,192x192,256x256,384x384,512x512',
                        type: 'image/jpeg',
                      },
                    ]}
                    onPlay={play}
                    onPause={pause}
                    onPreviousTrack={previous}
                    onNextTrack={next}
                  />)
                );
              }}
            </MediaPlayerConsumer>
          </MediaPlayerProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
