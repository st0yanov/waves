import { Radio } from '@waves/waves-data';
import Image from 'next/image';
import { assetPath } from '../../utils/helpers';
import styles from './radio-badge.module.scss';

/* eslint-disable-next-line */
export interface RadioBadgeProps {
  radio: Radio;
  onClick: () => void;
  active?: boolean;
}

export function RadioBadge({ radio, onClick, active = false }: RadioBadgeProps) {
  return (
    <div className={`${styles['radio-badge']} ${active ? styles.active : ''} group text-center cursor-pointer`} onClick={onClick}>
      <div className="w-16 h-16 mx-auto mb-1 relative shadow rounded-full group-hover:shadow-light dark:group-hover:shadow-dark dark:bg-gray-800">
        <Image src={assetPath(radio.logo)} alt={radio.title} className="rounded-full" layout="fill" objectFit="contain" unoptimized loader={({src}) => src} />
      </div>
      <span className="text-sm font-medium group-hover:text-blue-500 dark:group-hover:text-gray-100">{radio.title}</span>
    </div>
  );
}

export default RadioBadge;
