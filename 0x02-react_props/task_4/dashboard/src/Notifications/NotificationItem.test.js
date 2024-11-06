import React from 'react';
import { render, screen } from '@testing-library/react';
import { getLatestNotification } from "../utils/utils";
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  test('renders NotificationItem without crashing', () => {
    render(<NotificationItem type="default" value="Test notification" />);
    const listItem = screen.getByText('Test notification');
    expect(listItem).toBeInTheDocument();
  });

  test('renders correct html with type and value props', () => {
    render(<NotificationItem type="default" value="New course available" />);
    const listItem = screen.getByText('New course available');
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
  });

  test('renders correct html from type="urgent" value="New..." props', () => {
    render(<NotificationItem type="urgent" value="New resume available" />);
    const listItem = screen.getByText("New resume available");
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute("data-notification-type", "urgent");
  });

  test('renders correct html from html="<strong></strong>" props', () => {
    render(<NotificationItem html={getLatestNotification()} />);
    const htmlContent = screen.getByTestId("notification-html");
    expect(htmlContent).toBeInTheDocument();
    expect(htmlContent).toContainHTML("<strong>Urgent requirement</strong>");
    expect(htmlContent.closest("li")).toHaveAttribute("data-urgent", "true");
  });
});
