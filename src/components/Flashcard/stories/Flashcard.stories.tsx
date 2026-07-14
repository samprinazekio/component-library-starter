import type { Meta, StoryObj } from "@storybook/react";
import { Flashcard } from "../Flashcard";

const meta = {
  title: "Components/Flashcard",
  component: Flashcard,
} satisfies Meta<typeof Flashcard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReactConcept: Story = {
  render: () => (
    <Flashcard>
      <Flashcard.Question>
        What is a compound component?
      </Flashcard.Question>

      <Flashcard.Answer>
        A pattern where related components work together through a parent component.
      </Flashcard.Answer>
    </Flashcard>
  ),
};

