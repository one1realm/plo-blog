import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

type MockProps = {
  "data-testid": string;
};

vi.mock("@/components/Day1", () => {
  return {
    default: ({ "data-testid": dataTestId }: MockProps) => (
      <div data-testid={dataTestId}>Bros</div>
    ),
  };
});

describe("Home", () => {
  it("contains 'Day 1' text", () => {
    render(<Home />);
    expect(screen.getByTestId("day-1")).toBeInTheDocument();
  });
});
