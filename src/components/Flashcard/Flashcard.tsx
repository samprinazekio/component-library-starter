import { ReactNode, useState, KeyboardEvent } from "react";
import "./Flashcard.css";

interface FlashcardProps {
  children: ReactNode;
}

interface CompoundFlashcardComponent {
  ({ children }: FlashcardProps): ReactNode;
  Question: ({ children }: FlashcardProps) => ReactNode;
  Answer: ({ children }: FlashcardProps) => ReactNode;
}

const Flashcard: CompoundFlashcardComponent = ({ children }) => {
  const [flipped, setFlipped] = useState(false);

  const childrenArray = Array.isArray(children) ? children : [children];

  const question = childrenArray[0];
  const answer = childrenArray[1];

  const toggleCard = () => {
    setFlipped(!flipped);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  };

  return (
    <button
      className="flashcard"
      onClick={toggleCard}
      onKeyDown={handleKeyDown}
      aria-pressed={flipped}
    >
      {flipped ? answer : question}
    </button>
  );
};

Flashcard.Question = ({ children }) => (
  <div className="flashcard-question">{children}</div>
);

Flashcard.Answer = ({ children }) => (
  <div className="flashcard-answer">{children}</div>
);

export { Flashcard };
