import Login from "./Login";
import { render, screen } from "@testing-library/react";

describe("Login component", () => {
  test("renders a div with the class Login-body", () => {
    render(<Login />);
    const bodyElement = screen.getByRole("main");
    expect(bodyElement).toHaveClass("Login-body");
  });
});
