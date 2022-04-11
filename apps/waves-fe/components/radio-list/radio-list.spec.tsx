import { render } from '@testing-library/react';

import RadioList from './radio-list';

import radioDefinitions from '../../data/radios.json';

describe('RadioList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioList radios={radioDefinitions} />);
    expect(baseElement).toBeTruthy();
  });
});
