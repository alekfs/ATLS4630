// App.tsx
import React, { useState } from "react";
import { usePrevious } from "./usePrevious";
import { useDebouncedState } from "./useDebouncedState";
import { useTypewriter } from "./useTypewriter";
import "./App.css";

export default function App() {
  // usePrevious
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  // useDebouncedState
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useDebouncedState("", 500);

  const handleDebouncedInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const next = e.target.value;
    setInputValue(next); // immediate
    setDebouncedValue(next); // debounced
  };
  // useTypewriter
  const [typewriterInput, setTypewriterInput] = useState(
    "Type something..."
  );
  const typedText = useTypewriter(typewriterInput, 100, 400);

  return (
    <div className="app">
      <header className="app-header">
        <h1>usePrevious useDebouncedState, and useTypewriter</h1>
      </header>

      <main className="cards">
        {/* usePrevious */}
        <section className="card">
          <h2>usePrevious</h2>
          <p className="card-description">
            Track what a value was on the previous render.
          </p>
          <div className="value-row">
            <span className="label">Current count</span>
            <span className="value">{count}</span>
          </div>
          <div className="value-row">
            <span className="label">Previous count</span>
            <span className="value">
              {previousCount !== undefined ? previousCount : "— (none yet)"}
            </span>
          </div>
          <div className="button-row">
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </section>

        {/* useDebouncedState */}
        <section className="card">
          <h2>useDebouncedState</h2>
          <p className="card-description">
            The debounced value updates 500ms after you stop typing.
          </p>
          <input
            className="text-input"
            type="text"
            value={inputValue}
            onChange={handleDebouncedInputChange}
            placeholder="Type something..."
          />
          <div className="value-row">
            <span className="label">Immediate</span>
            <span className="value mono">{inputValue || "␣"}</span>
          </div>
          <div className="value-row">
            <span className="label">Debounced</span>
            <span className="value mono">{debouncedValue || "␣"}</span>
          </div>
        </section>

        {/* useTypewriter */}
        <section className="card">
          <h2>useTypewriter</h2>
          <p className="card-description">
            Types the text out one character at a time.
          </p>
          <input
            className="text-input"
            type="text"
            value={typewriterInput}
            onChange={(e) => setTypewriterInput(e.target.value)}
            placeholder="Enter text to type out..."
          />
          <div className="typewriter-output">
            <code>{typedText}</code>
          </div>
        </section>
      </main>
    </div>
  );
}