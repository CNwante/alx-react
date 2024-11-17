import Login from "./Login";
import { render, screen } from "@testing-library/react";

describe("Login component", () => {
  beforeEach(() => {
    render(<Login />);
  });

  test('renders Login component without crashing', () => {
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });

  test('renders 2 input fields and 2 label tags in Login component', () => {
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    const emailInput = screen.getByRole('textbox', {name: /email/i});
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
