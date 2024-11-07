import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';


describe('CourseListRow component', () => {
  test('rensers a single header cell with colspan=2 isHeader=true textSecondCell=null', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Header Text" />);
  });


  const thElement = screen.getByRole('columnheader');
  expect(thElement).toBeInTheDocument();
  expect(thElement).toHaveAttribute('colSpan', '2');

  test('renders two cells when textSecondCell is present', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);

    const thElements = screen.getAllByRole('columnheader');
    expect(thElements).toHaveLength(2);
  });

  test('renders two data cells when isHeader is false', () => {
    render(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);

    const tdElement = screen.getAllByRole('cell');
    expect(tdElement).toHaveLength(2);
  });
});
