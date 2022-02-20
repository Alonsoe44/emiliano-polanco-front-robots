import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavegationBar from "./NavegationBar";

describe("Given a NavegationBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should display links with 'Home' 'Museum' and 'Create' as text", () => {
      render(
        <BrowserRouter>
          <NavegationBar />
        </BrowserRouter>
      );

      const navigationHome = screen.getByRole("link", { name: "Home" });
      const navigationMuseum = screen.getByRole("link", { name: "Museum" });
      const navigationCreate = screen.getByRole("link", {
        name: "Create",
      });

      expect(navigationHome).toBeInTheDocument();
      expect(navigationMuseum).toBeInTheDocument();
      expect(navigationCreate).toBeInTheDocument();
    });
  });
});
