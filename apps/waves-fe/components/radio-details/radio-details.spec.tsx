import { render } from '@testing-library/react';

import RadioDetails from './radio-details';

import radioDefinitions from '../../data/radios.json';

describe('RadioDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioDetails radio={radioDefinitions[0]} />);
    expect(baseElement).toBeTruthy();
  });
});
