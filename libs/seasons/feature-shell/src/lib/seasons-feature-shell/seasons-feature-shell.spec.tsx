import React from 'react';
import { render, cleanup } from 'react-testing-library';

import SeasonsFeatureShell from './seasons-feature-shell';

describe(' SeasonsFeatureShell', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<SeasonsFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
