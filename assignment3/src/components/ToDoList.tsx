import ToDoItem from "./TodoItem";
import type { Todo } from "../App";

export default function ToDoList({
  todos,
  onToggle,
  onRemove,
}: {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <section aria-label="to do items">
      <ul>
        {todos.map((t) => (
          <ToDoItem key={t.id} item={t} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </ul>
    </section>
  );
}
