import Header from './Header';
import {render, screen} from '@testing-library/react';


describe('Header component', () => {
  test('renders a div with the class App-header', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('App-header');
  });

});
