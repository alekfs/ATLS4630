# Write Up

Write Up for Assignment 3 - Tinking in React

Mock Up: https://www.figma.com/design/4Fii3yX46i8rxUt7djas7Q/Thinking-in-React--Mock-up?node-id=0-1&t=Hpjixc36OpaZHePV-1 

## Step 1: Break the UI into a component hierarchy
App
    - Header
    - TodoList
        - TodoItem
    - AddToDo
The App component is the head of the hierarchy with all components linked to it. App also contains the ToDo prop that is explained in Step 2. ToDoList.tsx is the over arching component for the to do list which then includes the ToDoItem compoenent in it. AddToDo is the final component, at the bottom of the page to add items.

- **App** – root component, manages all state  
- **Header** – title of the list  
- **TodoList** – wraps and displays all items  
- **TodoItem** – single item with checkbox + remove button  
- **AddTodoForm** – input + add button at the bottom  

Each piece handles one clear function, following *Thinking in React* principles of modular and reusable UI blocks.

---

## Step 2: Static Version
The first version was built **without state or interactivity**.  
- Todos rendered from a static array inside `App.tsx`.  
- “Add” and “Remove” buttons were placeholders.  
- Checkboxes were read-only.  
- Only layout and spacing matched the mockup.  

This confirmed the visual structure before adding functionality.

---

## Step 3: Minimal but Complete UI State  

Core interactive parts:
- ✅ To-do items list  
- ➕ Adding new items  
- ☑️ Marking items as done  
- ❌ Removing items  

| Feature | Changes over time | Passed via props | Derived from props/state | Needs state |
|----------|------------------|------------------|---------------------------|--------------|
| To-do items | ✅ | ❌ | ❌ | ✅ |
| Add form text | ✅ | ❌ | ❌ | ✅ |
| Mark done | ✅ | ❌ | ❌ | ✅ |
| Remove item | ✅ | ❌ | ❌ | ✅ |

**Minimal state:**  
```ts
{ id: number; label: string; done: boolean }
```
## Step 4: Identify Where Each Piece of State Should Live  

Following *Thinking in React*, each piece of state should be owned by the **closest common ancestor** of the components that use it.  

- The **App** component holds the array of todos because both `TodoList` and `AddTodoForm` need to access or modify it.  
- The **AddTodoForm** component has its own local `text` state, since it only needs to track what the user types before adding a new item.  

This design keeps `App` as the single source of truth for all todos, ensuring that updates are predictable and all children stay in sync.

---

##Step 5: Add Inverse Data Flow  

To make data flow back up, callback functions are passed from parent to child:  

- `handleAdd(label)` → adds a new todo object to the list.  
- `handleToggle(id)` → flips a todo’s `done` value.  
- `handleRemove(id)` → removes a todo entirely.  

These functions live in **App.tsx**, but are handed down to children via props:  
- `AddTodoForm` calls `handleAdd()` when the form is submitted.  
- `TodoItem` calls `handleToggle()` when a checkbox changes.  
- `TodoItem` calls `handleRemove()` when the red remove button is clicked.  

This pattern ensures **unidirectional data flow**:  
data goes down via props → actions bubble up via callbacks.  

The parent (`App`) updates its state, causing all children to re-render with the latest data — the React way.
