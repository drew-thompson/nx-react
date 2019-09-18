import React from 'react';
import { render, cleanup } from 'react-testing-library';

import AutumnFeaturePumpkins from './autumn-feature-pumpkins';

describe(' AutumnFeaturePumpkins', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<AutumnFeaturePumpkins />);
    expect(baseElement).toBeTruthy();
  });
});
