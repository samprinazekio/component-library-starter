import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { Flashcard } from "./Flashcard";

afterEach(() => {
  cleanup();
});

describe("Flashcard", () => {
  it("shows the question initially", () => {
    render(
      <Flashcard>
        <Flashcard.Question>
          What is React?
        </Flashcard.Question>

        <Flashcard.Answer>
          A JavaScript library for building user interfaces.
        </Flashcard.Answer>
      </Flashcard>
    );

    expect(screen.getByText("What is React?")).toBeTruthy();
  });

  it("shows the answer when clicked", () => {
    render(
      <Flashcard>
        <Flashcard.Question>
          What is React?
        </Flashcard.Question>

        <Flashcard.Answer>
          A JavaScript library for building user interfaces.
        </Flashcard.Answer>
      </Flashcard>
    );

    const card = screen.getByRole("button");

    fireEvent.click(card);

    expect(
      screen.getByText(
        "A JavaScript library for building user interfaces."
      )
    ).toBeTruthy();
  });
});
