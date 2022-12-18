import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeLayout from "../components/layout/HomeLayout";
import { MemoryRouter as Router } from "react-router-dom";
import { TemplateProvider } from "../context/TemplateContext";

afterEach(() => {
  cleanup();
});

describe("Testing HomeLayout Component", () => {
  // Testing the Rendring of HomeLayout
  test("Testing Rendering of HomeLayout correctly without crash", () => {
    render(
      <TemplateProvider>
        <Router>
          <HomeLayout />
        </Router>
      </TemplateProvider>
    );

    const component = screen.getByText("This is an open source project", {
      exact: false,
    });
    expect(component).toBeInTheDocument();
  });

  // Testing the Click Functionality of Link  Contribute to Github
  test("Testing the Click Functionality of Link  Contribute to Github", () => {
    render(
      <TemplateProvider>
        <Router>
          <HomeLayout />
        </Router>
      </TemplateProvider>
    );
    const linkEl = screen.getByRole("link", { name: "Contribute on Github" });
    expect(linkEl).toHaveAttribute(
      "href",
      "https://github.com/shelcia/dynamic-portfolio"
    );
  });

  // Testing the Click Functionality of Link  Lookup on Behance
  test("Testing the Click Functionality of Link  Lookup on Behance", () => {
    render(
      <TemplateProvider>
        <Router>
          <HomeLayout />
        </Router>
      </TemplateProvider>
    );
    const linkEl = screen.getByRole("link", { name: "Lookup on Behance" });
    expect(linkEl).toHaveAttribute(
      "href",
      "https://www.behance.net/shelcia/projects"
    );
  });
});
