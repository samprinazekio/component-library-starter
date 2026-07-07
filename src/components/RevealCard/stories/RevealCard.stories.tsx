import type { Meta, StoryObj } from "@storybook/react";
import { RevealCard } from "../RevealCard";

const meta = {
  title: "Components/RevealCard",
  component: RevealCard,
} satisfies Meta<typeof RevealCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UIDesignNote: Story = {
  args: {
    title: "UI Design Note",
    hiddenText: "This card uses keyboard support and ARIA attributes so it can be opened with a mouse, Enter, or Space.",
  },
};
