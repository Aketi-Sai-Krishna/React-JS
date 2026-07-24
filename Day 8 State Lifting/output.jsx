# 🎯 React Component Communication & Lifting State Up – Interview Answers

---

# 🟢 Beginner Level

## 1. What are props in React?

**Answer:**

Props (Properties) are read-only inputs that allow a parent component to pass data to a child component. They make components reusable because the same component can display different data based on the props it receives.

---

## 2. Why are props read-only?

**Answer:**

Props are read-only because the parent component owns the data. A child component should only use the data it receives and should never modify it. This ensures a predictable one-way data flow and makes applications easier to debug and maintain.

---

## 3. How does Parent → Child communication work?

**Answer:**

Parent-to-child communication is achieved using props. The parent passes data as props, and the child receives them as a `props` object (or through destructuring) and uses them to render the UI.

**Example:**

```jsx
<Profile name="Sai" />
```

The child receives:

```jsx
function Profile({ name }) {
  return <h1>{name}</h1>;
}
```

---

## 4. Can a child directly modify the parent's state?

**Answer:**

No. A child component cannot directly modify the parent's state. If the child needs to update the parent's state, the parent passes a callback function as a prop, and the child calls that function.

---

## 5. What is callback communication?

**Answer:**

Callback communication is the process of passing a function from the parent to the child as a prop. The child calls that function to send data or notify the parent about an event such as a button click or form submission.

---

# 🟡 Intermediate Level

## 1. Explain Child → Parent communication.

**Answer:**

Child-to-parent communication is achieved using callback functions.

The parent creates a function and passes it to the child as a prop. When an event occurs inside the child, it calls that function and passes the required data. The parent receives the data and decides how to update its state.

This follows React's one-way data flow because the child never changes the parent's state directly.

---

## 2. What is Lifting State Up?

**Answer:**

Lifting State Up is the process of moving state to the nearest common parent so multiple child components can share the same data.

Instead of storing duplicate state in different components, one parent owns the state and passes it to the children through props.

---

## 3. What is a Single Source of Truth?

**Answer:**

A Single Source of Truth means one component owns and manages a piece of state. Other components receive that state through props instead of maintaining duplicate copies.

This keeps the UI consistent and prevents synchronization issues.

---

## 4. When should you lift state?

**Answer:**

State should be lifted when:

* Two or more components need the same data.
* Sibling components need to stay synchronized.
* The parent needs to control or share the state.

If only one component uses the state, it should remain inside that component.

---

## 5. Difference between props and state?

**Answer:**

| Props                     | State                       |
| ------------------------- | --------------------------- |
| Passed by parent          | Managed inside a component  |
| Read-only                 | Can be updated              |
| Used for communication    | Used to store dynamic data  |
| Makes components reusable | Controls component behavior |

---

## 6. Why should state not be duplicated?

**Answer:**

Duplicating state can lead to inconsistent UI because different components may hold different values.

Instead, keep one source of truth in the parent and share it with other components using props.

---

## 7. Explain callback props with an example.

**Answer:**

The parent passes a function to the child.

When the child needs to notify the parent, it calls that function.

For example, in a login form, the child sends the entered username and password to the parent by calling a callback function passed through props.

---

## 8. Explain the Temperature Converter example.

**Answer:**

The Temperature Converter demonstrates Lifting State Up.

The temperature state is stored in the parent component.

The input component updates the state using a callback function, while the result component receives the same state as props and calculates the Fahrenheit value.

This ensures both components stay synchronized using a single source of truth.

---

## 9. Explain sibling communication.

**Answer:**

Sibling components cannot communicate directly.

Instead:

1. One sibling sends data to the parent using a callback.
2. The parent updates its state.
3. The parent passes the updated state to the other sibling through props.

This is achieved by Lifting State Up.

---

## 10. What happens after `setState()` is called?

**Answer:**

When `setState()` (or a state setter like `setCount`) is called:

1. React schedules a state update.
2. The component re-renders.
3. The updated state is used during rendering.
4. The UI reflects the latest state.

---

# 🔴 Advanced Level

## 1. Explain React's One-Way Data Flow.

**Answer:**

React follows one-way data flow, meaning data always moves from parent to child through props.

If a child needs to communicate with the parent, it does so by calling a callback function provided by the parent.

This predictable flow makes applications easier to understand, debug, and maintain.

---

## 2. Why does React recommend Lifting State Up?

**Answer:**

React recommends Lifting State Up because shared state should have one owner.

Keeping the state in the nearest common parent avoids duplicate state, keeps sibling components synchronized, and creates a single source of truth.

---

## 3. How does Lifting State Up prevent inconsistent UI?

**Answer:**

When multiple components share the same state from a common parent, they always receive the latest value through props.

Since there is only one source of truth, all components remain synchronized, preventing inconsistent or outdated UI.

---

## 4. When would you use Context API instead of Lifting State Up?

**Answer:**

Lifting State Up works well when a few related components need shared state.

However, if the same data must be passed through many levels of components (prop drilling), Context API is a better choice because it allows deeply nested components to access shared data without passing props through every intermediate component.

---

## 5. Explain the complete lifecycle of Parent → Child → Parent communication.

**Answer:**

The lifecycle is:

1. The parent creates a state and a callback function.
2. The parent passes state and the callback function to the child through props.
3. The child receives them.
4. A user interacts with the child (for example, clicks a button or types in an input).
5. The child calls the callback function and passes data as an argument.
6. The parent receives the data and updates its state.
7. React re-renders the parent.
8. The updated state is passed back to the child through props.
9. The UI displays the latest data.

This cycle is the foundation of React's component communication model.

---

# ⭐ Interview Summary (30-Second Answer)

> **React follows one-way data flow. Parents pass data to children using props. If a child needs to communicate with the parent, the parent passes a callback function as a prop, and the child calls that function with the required data. When multiple components need the same state, we lift the state to their nearest common parent to create a single source of truth. This keeps the UI synchronized, avoids duplicate state, and makes the application easier to maintain.**

This concise explanation is suitable for interviews ranging from junior to mid-level React roles.
