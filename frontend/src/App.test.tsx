import React from 'react';
import { render, screen } from '@testing-library/react';
// @ts-ignore
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import App from './App';

// @ts-ignore
expect.extend({ toBeInTheDocument });

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
