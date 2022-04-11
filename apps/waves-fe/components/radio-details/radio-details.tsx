import { Radio, Playlist } from '@waves/waves-data';
import { Badge, Alert, Button } from '@waves/waves-ui';
import PlaybackRow from '../playback-row/playback-row';
import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '../../utils/helpers';
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline';

import './radio-details.module.scss';

/* eslint-disable-next-line */
export interface RadioDetailsProps {
  radio: Radio;
  playlist?: Playlist;
}

export function RadioDetails({ radio, playlist }: RadioDetailsProps) {
  return (
    <div className="w-full max-w-lg rounded-2xl p-5 m-5 bg-white dark:bg-gray-900 dark:text-gray-400 shadow-lg divide-y">
      <div className="flex items-center justify-center mb-3">
        <div className="w-16 h-16 mr-2 relative">
          <Image src={assetPath(radio.logo)} alt={radio.title} layout="fill" objectFit="contain" unoptimized loader={({src}) => src} />
        </div>
        <Alert variant="success">
          Вие слушате радио <span className="font-bold inline">{radio.title}</span>
        </Alert>
      </div>

      { playlist && playlist.currentPlayback && 
        <div className="flex flex-col mb-6 dark:border-gray-400">
          <span className="text-xl font-light text-center my-3 dark:text-gray-200">В момента звучи:</span>

          <PlaybackRow playback={playlist.currentPlayback}>
            <Badge variant="danger" ping>НА ЖИВО</Badge>
          </PlaybackRow>
        </div>
      }

      { playlist && playlist.previousPlayback &&
        <div className="flex flex-col mb-6 dark:border-gray-400">
          <span className="text-xl font-light text-center my-3 dark:text-gray-200">Предишна песен:</span>

          <PlaybackRow playback={playlist.previousPlayback} />
        </div>
      }

      <Link href="/">
        <a><Button color="gray" icon={<ChevronDoubleLeftIcon className="w-4 h-4 mr-2" />} rounded>Обратно</Button></a>
      </Link>
    </div>
  );
}

export default RadioDetails;
