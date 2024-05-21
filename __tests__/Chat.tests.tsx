import React from "react";
import Chat from "@/app/components/chat/Chat";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders chat component", () => {
  const { container } = render(<Chat />);
  expect(container).toMatchSnapshot();
});
