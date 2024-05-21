import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginPage from "../app/login/page";

describe("LoginPage", () => {
  test("renders the login form correctly", () => {
    render(<LoginPage />);

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument();
  });
});
