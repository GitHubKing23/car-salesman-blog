import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders header', () => {
  render(<App />);
  const headings = screen.getAllByText(/Jeff'sCarBlog/i);
  expect(headings.length).toBeGreaterThan(0);
});
