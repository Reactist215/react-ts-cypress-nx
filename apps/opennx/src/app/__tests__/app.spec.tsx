import React from 'react';
import { render } from '@testing-library/react';

import App from './../../app/app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });
});