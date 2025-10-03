import type { Todo } from "../App";

export default function ToDoItem({
  item,
  onToggle,
  onRemove,
}: {
  item: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => onToggle(item.id)}
        />
        {item.label}
      </label>
      <button onClick={() => onRemove(item.id)} aria-label={`remove ${item.label}`}></button>
    </li>
  );
}
