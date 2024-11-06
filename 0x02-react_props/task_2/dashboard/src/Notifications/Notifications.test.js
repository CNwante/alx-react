import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders Notifications without crashing', () => {
    render(<Notifications />);
  });

  test('renders NotificationItem elements', () => {
    render(<Notifications />);
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems).toHaveLength(3);
  });

  test('renders the correct notification text', () => {
    render(<Notifications />);
    const notificationText = screen.getByText(/Here is the list of notifications/i);
    expect(notificationText).toHaveTextContent('Here is the list of notifications');
  })
});
