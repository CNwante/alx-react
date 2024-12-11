import Footer from "./Footer";
import {render, screen} from '@testing-library/react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { uiReducer } from "../reducers/uiReducer";

const store = createStore(uiReducer);

describe('Footer component', () => {
  beforeEach(() => {
    render (
      <Provider store={store}>
            <Footer />
      </Provider>
  );
  });

  test('renders element with the role contentinfo', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the text “Copyright”', () => {
    const copyrightText = screen.getByText(/Copyright/);
    expect(copyrightText).toBeInTheDocument();
  });
});
