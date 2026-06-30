# Design Tokens

These tokens are intentionally small and readable for teaching a frontend component library with Storybook.

Import `index.css` once at the app or Storybook root, then use the tokens in component CSS:

```css
.button {
  background: var(--color-primary);
  padding: var(--space-2) var(--space-4);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-md);
}
```

Token groups:

- `colors.css` includes primitive colors and semantic color aliases.
- `spacing.css` includes a small spacing scale based on `rem`.
- `typography.css` includes font families, sizes, weights, and line heights.
