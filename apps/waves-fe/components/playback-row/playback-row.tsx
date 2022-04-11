import { Playback } from '@waves/waves-data';
import Image from 'next/image';
import { assetPath } from '../../utils/helpers';
import './playback-row.module.scss';

/* eslint-disable-next-line */
export interface PlaybackRowProps {
  playback: Playback;
  children?: React.ReactNode;
}

export function PlaybackRow({ playback, children }: PlaybackRowProps) {
  const playbackName = `${playback.artist} - ${playback.title}`;

  return (
    <div className="flex items-center justify-between gap-x-3">
      <div className="flex items-center">
        <div className="w-16 h-16 relative shadow">
          <Image src={playback.cover.startsWith('http') ? playback.cover : assetPath(playback.cover)} alt={playbackName} layout="fill" objectFit="contain" unoptimized loader={({src}) => src} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-md ml-2">{playback.title}</span>
          <span className="text-sm text-gray-500 ml-2">{playback.artist}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export default PlaybackRow;
