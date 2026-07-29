# Component Library

A custom React component library built during the Open Avenues Foundation Build Project.

## Technologies

- React
- TypeScript
- Storybook
- Vitest
- React Testing Library

## Components

### Button

A reusable button component with multiple variants:

- Primary
- Secondary
- Warning
- Disabled

Props:

- label
- variant
- disabled
- onClick

### RevealCard

An accessible component that reveals hidden content.

Accessibility features:

- Keyboard support (Enter and Space)
- aria-expanded
- aria-controls

### Flashcard

A compound component built using the compound component pattern.

Example:

```tsx
<Flashcard>
  <Flashcard.Question>
    What is a compound component?
  </Flashcard.Question>

  <Flashcard.Answer>
    A pattern where related components work together.
  </Flashcard.Answer>
</Flashcard>
```

Features:

- Click to flip
- Keyboard support
- Compound component architecture

## Testing

The Flashcard component is tested using:

- Vitest
- React Testing Library

Tests verify:

- The question appears initially
- Clicking the card reveals the answer

Run tests:

```bash
npm test
```

## Storybook

Launch Storybook:

```bash
npm run storybook
```

## Key Learnings

Throughout this project I learned:

- React component design
- Storybook documentation
- Accessibility best practices
- Compound components
- Automated testing
- AI-assisted development workflows
