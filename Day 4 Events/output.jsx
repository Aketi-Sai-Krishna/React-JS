# React Day 6 – Interview Questions & Answers

---

# ⭐ Beginner Level (5 Questions)

## 1. What are events in React?

**Answer:**

Events are user actions that React can respond to, such as:

* Clicking a button
* Typing in an input
* Submitting a form
* Pressing a key
* Moving the mouse

React uses event handlers to execute code when these actions occur.

Example:

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

---

## 2. What is an event handler?

**Answer:**

An event handler is a JavaScript function that executes when an event occurs.

Example:

```jsx
function handleClick() {
  alert("Button clicked");
}

<button onClick={handleClick}>
  Click
</button>
```

---

## 3. Why does React use `onClick` instead of `onclick`?

**Answer:**

React follows **camelCase** naming for event attributes.

HTML:

```html
<button onclick="clickMe()">
```

React:

```jsx
<button onClick={clickMe}>
```

Because JSX is JavaScript, React uses JavaScript naming conventions.

---

## 4. Why should you pass a function reference (`onClick={handle}`) instead of calling it (`onClick={handle()}`)?

**Answer:**

### Correct

```jsx
<button onClick={handle}>
```

The function runs **only when the button is clicked**.

### Wrong

```jsx
<button onClick={handle()}>
```

The function executes immediately while rendering the component.

---

## 5. What is the purpose of `e.preventDefault()` in form submissions?

**Answer:**

`preventDefault()` stops the browser's default behavior.

Without it:

* Form submits
* Page refreshes

With it:

* Page does not refresh
* React handles the form submission

Example:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  console.log("Submitted");
}
```

---

# ⭐⭐ Intermediate Level (10 Questions)

---

## 1. Explain the difference between `onClick` and `onDoubleClick`.

**Answer:**

| onClick                 | onDoubleClick             |
| ----------------------- | ------------------------- |
| Fires once when clicked | Fires when double-clicked |
| Used most often         | Used less frequently      |
| Executes immediately    | Requires two clicks       |

Example:

```jsx
<button onClick={save}>
Save
</button>

<button onDoubleClick={deleteItem}>
Delete
</button>
```

---

## 2. What is the React Synthetic Event?

**Answer:**

A **Synthetic Event** is React's wrapper around the browser's native event.

It provides:

* Same behavior across all browsers
* Consistent API
* Better performance through React's event system

Example:

```jsx
function handleClick(e) {
  console.log(e.type);
}
```

`e` is a Synthetic Event.

---

## 3. How do you access the value of an input field?

**Answer:**

Using:

```jsx
e.target.value
```

Example:

```jsx
function handleChange(e) {
  console.log(e.target.value);
}

<input onChange={handleChange} />
```

---

## 4. What is the difference between `event.target` and `event.currentTarget`?

**Answer:**

### `event.target`

The element that actually triggered the event.

### `event.currentTarget`

The element where the event handler is attached.

Example:

```jsx
<div onClick={handleClick}>
    <button>Click</button>
</div>
```

If the button is clicked:

```jsx
event.target
```

returns

```
button
```

But

```jsx
event.currentTarget
```

returns

```
div
```

---

## 5. How do you detect the Enter key in an input?

**Answer:**

Using:

```jsx
onKeyDown
```

Example:

```jsx
function handleKey(e) {
    if (e.key === "Enter") {
        console.log("Enter pressed");
    }
}

<input onKeyDown={handleKey} />
```

---

## 6. Why is `onChange` commonly used with controlled components?

**Answer:**

Controlled components store input values in React state.

`onChange` updates the state whenever the user types.

Example:

```jsx
const [name, setName] = useState("");

<input
value={name}
onChange={(e) => setName(e.target.value)}
/>
```

This keeps the UI and state synchronized.

---

## 7. How do you pass arguments to an event handler?

**Answer:**

Use an arrow function.

Correct:

```jsx
<button onClick={() => greet("Sai")}>
```

Function:

```jsx
function greet(name) {
    alert(name);
}
```

Do not write:

```jsx
<button onClick={greet("Sai")}>
```

because it executes immediately during rendering.

---

## 8. What happens if you omit `preventDefault()` in a React form?

**Answer:**

The browser performs its default action:

* Submits the form
* Refreshes the page
* React state may be lost

Example:

```jsx
<form onSubmit={handleSubmit}>
```

Without:

```jsx
e.preventDefault();
```

the page reloads after submission.

---

## 9. When would you use `onKeyDown` instead of `onKeyUp`?

**Answer:**

### Use `onKeyDown`

When you want to respond immediately as the key is pressed.

Examples:

* Detect Enter
* Keyboard shortcuts
* Game controls
* Prevent certain key presses

### Use `onKeyUp`

When you want to react after the key is released.

Examples:

* Validate input after typing
* Trigger search after the user finishes pressing a key

---

## 10. Name five commonly used mouse events in React.

**Answer:**

1.

```jsx
onClick
```

Fires when clicked.

---

2.

```jsx
onDoubleClick
```

Fires on double click.

---

3.

```jsx
onMouseEnter
```

Fires when the mouse enters an element.

---

4.

```jsx
onMouseLeave
```

Fires when the mouse leaves an element.

---

5.

```jsx
onMouseMove
```

Fires continuously while moving the mouse over an element.

---

# 💡 Quick Interview Revision (1-Minute)

| Question                    | Short Answer                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------ |
| What are events?            | User interactions like click, input, keyboard, mouse actions.                        |
| Event handler?              | Function that runs when an event occurs.                                             |
| `onClick` vs `onclick`      | React uses `onClick` (camelCase).                                                    |
| `handle` vs `handle()`      | `handle` passes a reference; `handle()` executes immediately.                        |
| `preventDefault()`          | Stops the browser's default action (e.g., page refresh on form submit).              |
| Synthetic Event             | React's cross-browser wrapper around native events.                                  |
| Input value                 | `e.target.value`                                                                     |
| `target` vs `currentTarget` | `target` = actual clicked element, `currentTarget` = element with the event handler. |
| Detect Enter                | `if (e.key === "Enter")` inside `onKeyDown`.                                         |
| Pass arguments              | `onClick={() => handle(arg)}`                                                        |
| Controlled component        | Input value is controlled by React state using `value` and `onChange`.               |
| Common mouse events         | `onClick`, `onDoubleClick`, `onMouseEnter`, `onMouseLeave`, `onMouseMove`.           |

These questions are among the most commonly asked in React interviews for freshers and developers with 1–3 years of experience. Once you're comfortable with them, you'll be well prepared for the event-handling portion of most React technical interviews.
