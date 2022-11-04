// @ts-nocheck
import { render, screen } from '@testing-library/react';
import React from 'react';
import AppRouter from './router/AppRouter';

test('renders learn react link', () => {
  render(<AppRouter />);
  const linkElement = screen.getByText(/Accueil/i);
  expect(linkElement).toBeInTheDocument();
});
