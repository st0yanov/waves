import { render } from '@testing-library/react';

import PlaybackRow from './playback-row';

describe('PlaybackRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlaybackRow playback={{artist: '', title: '', cover: ''}} />);
    expect(baseElement).toBeTruthy();
  });
});
