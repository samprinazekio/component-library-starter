import { useState } from "react";
import "./RevealCard.css";

export interface RevealCardProps {
  title: string;
  hiddenText: string;
}

export function RevealCard({ title, hiddenText }: RevealCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCard() {
    setIsOpen(!isOpen);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  }

  return (
    <div className="reveal-card">
      <button
        className="reveal-card-button"
        onClick={toggleCard}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls="reveal-card-content"
      >
        ✨ {title}
      </button>

      {isOpen && (
        <div id="reveal-card-content" className="reveal-card-content">
          {hiddenText}
        </div>
      )}
    </div>
  );
}
