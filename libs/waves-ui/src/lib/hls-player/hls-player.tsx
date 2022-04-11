import Hls, { HlsConfig } from 'hls.js';
import { RefObject, Component, createRef } from 'react';

/* eslint-disable-next-line */
export interface HlsPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  hlsConfig?: HlsConfig;
  src: string;
}

export class HlsPlayer extends Component<HlsPlayerProps> {
  hls: Hls | null;
  playerRef: RefObject<HTMLVideoElement>;

  constructor(props: HlsPlayerProps) {
    super(props);
    this.hls = null;
    this.playerRef = createRef<HTMLVideoElement>();
    this.initHlsPlayer = this.initHlsPlayer.bind(this);
  }

  componentDidMount() {
    this.initHlsPlayer();
  }

  componentDidUpdate(prevProps: HlsPlayerProps) {
    if (prevProps.src !== this.props.src) {
      this.initHlsPlayer();
    } else {
      this.toggleHlsPlayer();
    }
  }

  componentWillUnmount() {
    this.destroyHlsPlayer();
  }

  initHlsPlayer(props = this.props) {
    this.destroyHlsPlayer();

    this.hls = new Hls({
      enableWorker: false,
      ...props.hlsConfig
    });

    if (this.playerRef?.current != null) {
      this.hls?.attachMedia(this.playerRef.current);
    }

    this.hls?.on(Hls.Events.MEDIA_ATTACHED, () => {
      this.hls?.loadSource(this.props.src);

      this.hls?.on(Hls.Events.MANIFEST_PARSED, () => {
        if (this.props.autoPlay) {
          this.playerRef?.current?.play()
            .catch(() =>
              console.log(
                'Unable to autoplay prior to user interaction with the dom.'
              )
            );
        }
      });
    });

    this.hls?.on(Hls.Events.ERROR, (_event, data) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            this.hls?.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            this.hls?.recoverMediaError();
            break;
          default:
            this.initHlsPlayer();
            break;
        }
      }
    });
  }

  destroyHlsPlayer() {
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
  }

  toggleHlsPlayer() {
    if (this.props.autoPlay) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    this.playerRef?.current?.play();
  }

  pause() {
    this.playerRef?.current?.pause();
  }

  render() {
    const { hlsConfig, src, autoPlay, ...props } = this.props;

    if (Hls.isSupported()) {
      return <audio ref={this.playerRef} {...props} />;
    } else {
      return <audio ref={this.playerRef} src={src} autoPlay={autoPlay} {...props} />;
    }
  }
}

export default HlsPlayer;