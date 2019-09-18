import React from 'react';
import { render, cleanup } from 'react-testing-library';

import AutumnFeatureShell from './autumn-feature-shell';

describe(' AutumnFeatureShell', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<AutumnFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
