# Kartu Kata - AI Agent Instructions

## Project Overview
Kartu Kata is an interactive card game web app for generating conversation starters using AI. Built with Next.js 16 App Router, it offers two modes: casual questions for friends and deep-talk prompts for couples. The app features glassmorphism UI with 3D card flip animations.

## Architecture & Key Patterns

### Server-Client Boundaries
- **Server Actions**: Question selection is strictly server-side ([src/lib/questions.ts](../src/lib/questions.ts)). All functions marked with `"use server"` directive handle random question selection
- **Client Components**: UI interactions use `"use client"` ([src/app/page.tsx](../src/app/page.tsx), [src/components/GameCard.tsx](../src/components/GameCard.tsx))
- **Question Storage**: Questions stored in JSON files at [src/db/friends.json](../src/db/friends.json) and [src/db/couples.json](../src/db/couples.json)

### State Management Pattern
Uses React's `useState` for local component state:
- Landing page: `gameMode` state tracks mode selection (`"friends"` | `"couples"` | `null`)
- GameCard: `isFlipped`, `question`, and `loading` states manage card interaction flow
- No global state library - keep it simple with component-level state

### Animation System (Framer Motion)
- **Page transitions**: `<AnimatePresence mode="wait">` for smooth mode switching
- **Card flip**: `rotateY` transform with spring physics (`stiffness: 200, damping: 25`)
- **Preserve 3D**: Critical CSS property `transformStyle: "preserve-3d"` enables card depth
- **Pattern**: Always wrap dynamic content in `<motion.div>` with `initial`, `animate`, `exit` props
- **Performance**: Use `useReducedMotion()` hook to detect accessibility preferences and disable/simplify animations
- **GPU Acceleration**: All animations use `transform` and `opacity` only (GPU-accelerated properties)
- **Will-change**: Applied strategically only during active animations to optimize repaints

## Styling Conventions

### Tailwind v4 + Custom Utilities
Located in [src/app/globals.css](../src/app/globals.css):
- `.glass-card`: Glassmorphism effect with backdrop blur - primary interactive surface pattern
- `.bg-gradient-friends`: Lime-to-green gradient for friends mode
- `.bg-gradient-couples`: Pink-to-rose gradient for couples mode
- `.gpu-accelerate`, `.preserve-3d`, `.backface-hidden`: Performance optimization classes for 3D transforms
- **Never use `@apply`**: Tailwind v4 incompatible - use vanilla CSS in `@layer utilities` instead
- **CSS Transitions**: Specify individual properties instead of `transition: all` for better performance

### Design System
- **Background**: Dark radial gradient from purple to black (`#2e1065` to `#000000`)
- **Decorative orbs**: Fixed position blurred circles for depth (`blur-[120px]`)
- **Fonts**: Geist Sans (primary) and Geist Mono from `next/font/google`
- **Color modes**: Lime/green = friends, pink/rose = couples (consistent across all components)

## Environment Setup

No environment variables required. Questions are loaded from local JSON files.

## Development Workflows

### Start Development
```bash
npm run dev  # Runs on http://localhost:3000
```

### Build & Production
```bash
npm run build  # Type checks + builds
npm start      # Serves production build
npm run lint   # ESLint check
```

### React Compiler
Enabled in [next.config.ts](../next.config.ts) (`reactCompiler: true`) - avoid manual memoization unless necessary.

## Component Structure

### Page Flow
1. **Landing** ([src/app/page.tsx](../src/app/page.tsx)): Mode selection with animated cards
2. **GameCard** ([src/components/GameCard.tsx](../src/components/GameCard.tsx)): Flip card interaction + AI generation
3. **Back navigation**: `onBack()` callback resets to landing

### GameCard Behavior
- **Click unflipped card**: Triggers flip + random question selection from JSON
- **Loading state**: Shows spinner while fetching question
- **Flipped state**: Displays question with "Pertanyaan Lain" button
- **Reset**: Clicking button flips card back to unflipped state (stops propagation)

## Utility Functions

### cn() Helper
Located in [src/lib/utils.ts](../src/lib/utils.ts):
```typescript
cn(...inputs: ClassValue[])  // Merges Tailwind classes with clsx + tailwind-merge
```
Use for conditional className combinations. Example:
```tsx
className={cn("base-class", isActive && "active-class", customClass)}
```

## Question System

### Question Selection
- Questions stored in JSON format at [src/db/friends.json](../src/db/friends.json) and [src/db/couples.json](../src/db/couples.json)
- Server action `generateQuestion()` in [src/lib/questions.ts](../src/lib/questions.ts) randomly selects from pool
- Each mode has 200+ unique questions to ensure variety
- Random selection uses `Math.random()` for unpredictable experience

### Adding New Questions
1. Open appropriate JSON file (`friends.json` or `couples.json`)
2. Add question to `questions` array
3. Ensure questions are unique and match mode's tone
4. Friends mode: casual, fun, Indonesian slang
5. Couples mode: deep, romantic, introspective

## Performance Optimizations

### Event Handler Patterns
- Use `useCallback` for event handlers to prevent unnecessary re-renders
- Memoize expensive computations with `useMemo` when needed
- React Compiler handles most optimizations automatically

### Animation Best Practices
- Always check `useReducedMotion()` before applying complex animations
- Use `willChange: "transform"` only during active animations, reset to `"auto"` when idle
- Prefer `transform` and `opacity` for animations (GPU-accelerated)
- Keep spring physics values moderate: `stiffness: 200, damping: 25` balances smoothness and performance

### Reduced Motion Support
Pattern in all animated components:
```tsx
const shouldReduceMotion = useReducedMotion();
transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.4 }}
```

## Common Patterns

### Adding New Game Modes
1. Update type union: `"friends" | "couples"` → `"friends" | "couples" | "newmode"`
2. Add mode button in [src/app/page.tsx](../src/app/page.tsx) with unique gradient
3. Create matching gradient in [src/app/globals.css](../src/app/globals.css)
4. Create new JSON file in [src/db/](../src/db/) with questions array
5. Add logic in [src/lib/questions.ts](../src/lib/questions.ts) to import and handle new mode

### Modifying Animations
- Adjust spring physics: Modify `stiffness` (responsiveness) and `damping` (bounciness)
- Card flip duration: Change `duration` in `transition` prop
- Background animations: Use `animate-pulse` class or custom keyframes

## Testing Checklist
- Test card flip animation on mobile (touch events)
- Check loading states don't get stuck
- Validate error messages appear in Indonesian
- Test back navigation clears card state properly
- Verify questions are randomized on each click
- Ensure no duplicate questions appear consecutively
