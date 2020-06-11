import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'

expect.extend({ toBeInTheDocument })

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
