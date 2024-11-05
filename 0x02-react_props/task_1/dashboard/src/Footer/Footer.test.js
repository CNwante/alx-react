import Footer from "./Footer";
import {render, screen} from '@testing-library/react';

describe('Footer component', () => {
  beforeEach(() => {
    render (<Footer />);
  });

  test('renders a div with the class App-footer', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('App-footer');
  });

  test('renders the text “Copyright”', () => {
    const copyrightText = screen.getByText(/Copyright/);
    expect(copyrightText).toBeInTheDocument();
  })
});
