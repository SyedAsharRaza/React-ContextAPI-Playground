# React Context API Practice

A clean, hands-on mini-project built to practice global state management in React using `createContext` and `useContext`.

## What This Project Demonstrates
- **Context Creation:** Setting up a shared context (`MyContext`) to avoid prop drilling.
- **State Provider:** Wrapping child components in `ParentComponent` to expose state (`name`) and its updater function (`setName`).
- **State Consumption:** Accessing and updating shared state directly inside `ChildComponent` via `useContext`.

## Project Structure
```text
src/
├── MyContext.ts          # Creates and exports the shared React context
├── ParentComponent.tsx   # Holds state and wraps children with MyContext.Provider
├── ChildComponent.tsx    # Consumes context data and triggers state updates
├── App.tsx               # Root component connecting Parent and Child
└── App.css               # Component styling
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/SyedAsharRaza/React-ContextAPI-Playground
   cd React-ContextAPI-Playground
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
