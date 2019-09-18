import React from 'react';
import { render, cleanup } from 'react-testing-library';

import AutumnFeatureBlankets from './autumn-feature-blankets';

describe(' AutumnFeatureBlankets', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<AutumnFeatureBlankets />);
    expect(baseElement).toBeTruthy();
  });
});
