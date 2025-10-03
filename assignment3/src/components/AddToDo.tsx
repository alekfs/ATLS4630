import { useState } from "react";

export default function AddToDo({ onAdd }: { onAdd: (label: string) => void }) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="new to do"
      />
      <button type="submit">add</button>
    </form>
  );
}
