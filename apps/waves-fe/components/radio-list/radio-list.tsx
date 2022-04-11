import './radio-list.module.scss';
import RadioBadge from '../radio-badge/radio-badge';
import { Radio } from '@waves/waves-data';
import { useState } from 'react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface RadioListProps {
  radios: Radio[]
}

export function RadioList({ radios }: RadioListProps) {
  const [activeRadio, setActiveRadio] = useState(null);

  const handleRadioSelection = (radio: Radio) => {
    setActiveRadio(radio);
  };

  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      {
        radios.map((value, index) => {
          return (
            <Link href={`/radio/${value.slug}`} key={index}>
              <a>
                <RadioBadge radio={value} onClick={() => handleRadioSelection(value)} active={activeRadio === value} />
              </a>
            </Link>
          );
        })
      }
    </div>
  );
}

export default RadioList;
