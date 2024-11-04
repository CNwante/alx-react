import Footer from "./Footer";
import {render, screen} from '@testing-library/react';

describe('Footer component', () => {
  test('renders a div with the class App-footer', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('App-footer');
  });
});
