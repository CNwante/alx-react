import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders Notifications without crashing', () => {
    render(<Notifications displayDrawer={true} />);
  });

  test('renders NotificationItem elements when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems).toHaveLength(3);
  });

  test('renders the correct notification text when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationText = screen.getByText(/Here is the list of notifications/i);
    expect(notificationText).toHaveTextContent('Here is the list of notifications');
  });

  test('displays the menu item when displayDrawer is true or false', () => {
    render(<Notifications displayDrawer={true || false}  />);
    const menuItem = screen.getByText(/Your notifications/i);
    expect(menuItem).toBeInTheDocument();
  });

  test('does not display Notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const notificationsDiv = screen.queryByTestId('Notifications');
    expect(notificationsDiv).not.toBeInTheDocument();
  });

  test('displays Notifications when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationsDiv = screen.getByTestId('Notifications');
    expect(notificationsDiv).toBeInTheDocument();
  });
});
