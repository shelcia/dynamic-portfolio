import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../pages/auth/HomePage";
import { MemoryRouter as Router } from "react-router-dom";
import { TemplateProvider } from "../context/TemplateContext";

afterEach(() => {
  cleanup();
});

describe("Testing Homepage Component", () => {
  // Testing the Rendring of Homepage
  test("Testing Rendering of Homepage correctly without crash", () => {
    render(
      <TemplateProvider>
        <Router>
          <HomePage />
        </Router>
      </TemplateProvider>
    );

    const component = screen.getByText("Dynamic Portfolio Builder", {
      exact: false,
    });
    expect(component).toBeInTheDocument();
  });

  // Testing the Click Functionality of Link  Get Started
  test("Testing Clickability of Get Started Link", () => {
    render(
      <TemplateProvider>
        <Router>
          <HomePage />
        </Router>
      </TemplateProvider>
    );
    const linkEl = screen.getByRole("link", { name: "Get Started" });
    expect(linkEl).toHaveAttribute("href", "/signup");
  });
});
