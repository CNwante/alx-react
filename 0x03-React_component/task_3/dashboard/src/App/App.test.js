import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders without crashing', () => {
    render(<App />);
    const divAppElement = screen.getByTestId('App');
    expect(divAppElement).toBeInTheDocument();
  });

  test('contains the Notifications component', () => {
    render(<App />);
    const notifications = screen.getByTestId('Notifications');
    expect(notifications).toBeInTheDocument();
  });

  test('contains the Header component with the correct title', () => {
    render(<App />);

    // Find the main header by using getAllByRole and then filtering
    const headings = screen.getAllByRole('heading');

    // Check if the main header with text 'School dashboard' exists
    const mainHeader = headings.find((heading) =>
      heading.textContent === 'School dashboard'
    );
    expect(mainHeader).toBeInTheDocument();
  });

  test('renders the BodySectionWithMarginBottom components correctly', () => {
    render(<App />);

    // Check for specific headings introduced by BodySectionWithMarginBottom
    expect(screen.getByText('Log in to continue')).toBeInTheDocument();
    expect(screen.getByText('News from the School')).toBeInTheDocument();
  });

  test('contains the Footer component', () => {
    render(<App />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  describe('when isLoggedIn is false', () => {
    test('renders the Login component and not CourseList', () => {
      render(<App isLoggedIn={false} />);
      const login = screen.getByTestId('Login');
      expect(login).toBeInTheDocument();
      expect(screen.queryByTestId('CourseList')).not.toBeInTheDocument();
    });
  });

  describe('when isLoggedIn is true', () => {
    test('renders the CourseList component and not Login', () => {
      render(<App isLoggedIn={true} />);
      const courseList = screen.getByTestId('CourseList');
      expect(courseList).toBeInTheDocument();
      expect(screen.queryByTestId('Login')).not.toBeInTheDocument();
    });
  });

  test('calls logOut and shows alert on Control + h keypress', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App logOut={logOutMock} />);
    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
  });
});
