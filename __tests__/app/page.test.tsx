import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("contains 'Day 1' text", () => {
    render(<Home />);
    expect(within(screen.getByText("Day 1"))).toBeDefined();
  });
});
