import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "../app/login/page";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "../app/hooks/AuthHook";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../app/hooks/AuthHook", () => ({
  useLoginMutation: jest.fn(),
}));

describe("LoginPage", () => {
  const mockPush = jest.fn();
  const mockMutate = jest.fn();
  const mockUseLoginMutation = {
    mutate: mockMutate,
    pending: false,
    error: null,
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useLoginMutation as jest.Mock).mockReturnValue(mockUseLoginMutation);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the login page component", () => {
    const { container } = render(<LoginPage />);
    expect(container).toBeInTheDocument();
  });
});
