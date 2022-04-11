import { render } from '@testing-library/react';
import { Radio } from '@waves/waves-data';

import RadioBadge from './radio-badge';

describe('RadioBadge', () => {
  const sampleRadio: Radio = {
    title: 'Test',
    logo: 'https://example.com/logo.png',
    stream: 'https://example.com/stream.m3u'
  };

  const sampleClickHandler: () => void = () => {
    // Dummy click handler
  }

  it('should render successfully', () => {
    const { baseElement } = render(<RadioBadge radio={sampleRadio} onClick={sampleClickHandler} />);
    expect(baseElement).toBeTruthy();
  });
});
