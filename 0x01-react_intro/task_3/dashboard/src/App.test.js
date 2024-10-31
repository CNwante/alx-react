import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('renders a div with the class App-header', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toHaveClass('App-header');
});

test('renders a div with the class App-body', () => {
  render(<App />);
  const bodyElement = screen.getByRole('main');
  expect(bodyElement).toHaveClass('App-body');
});

test('renders a div with the class App-footer', () => {
  render(<App />);
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toHaveClass('App-footer');
});
