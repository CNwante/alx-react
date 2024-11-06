import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    // Render the App component before each test
    render(<App />);
  });

  test('renders without crashing', () => {
    const divAppElement = screen.getByTestId('App');
    expect(divAppElement).toBeInTheDocument();
  });

  test('contains the Notifications component', () => {
    const Notifications = screen.getByTestId('Notifications');
    expect(Notifications).toBeInTheDocument();
  });

  test('contains the Header component', () => {
    const Header = screen.getByRole('heading');
    expect(Header).toBeInTheDocument();
  });

  test('contains the Login component', () => {
    const Login = screen.getByRole('main');
    expect(Login).toBeInTheDocument();
  });

  test('contains the Footer component', () => {
    const Footer = screen.getByRole('contentinfo');
    expect(Footer).toBeInTheDocument();
  })
});
