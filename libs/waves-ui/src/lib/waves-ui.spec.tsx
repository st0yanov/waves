import { render } from '@testing-library/react';

import WavesUi from './waves-ui';

describe('WavesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WavesUi />);
    expect(baseElement).toBeTruthy();
  });
});
