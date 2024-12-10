import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Day1 from "@/components/Day1";

describe("Day1", () => {
  it("renders", () => {
    render(<Day1 />);
  });
});
