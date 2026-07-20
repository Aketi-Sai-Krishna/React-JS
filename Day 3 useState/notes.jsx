# 📘 React Day 6 Notes – State (`useState`)

### **Beginner → Pro Notes (Interview + Real Projects)**

> **80/20 Rule:** This single topic (`useState`) is used in almost every React application. Mastering it will make learning React much easier.

---

# 1. What is State?

## Definition

**State is a built-in React feature used to store data that can change over time.**

Whenever the state changes, React automatically updates (re-renders) the UI.

### Simple Definition

> **State is a variable that React watches. When its value changes, React updates the screen automatically.**

---

## Real-Life Examples

| Application   | State               |
| ------------- | ------------------- |
| Counter App   | Count value         |
| Login Form    | Username & Password |
| Shopping Cart | Cart Items          |
| Like Button   | Number of Likes     |
| Weather App   | Temperature         |
| Todo App      | Todo List           |
| E-commerce    | Selected Product    |

---

# 2. Why Do We Need State?

Suppose we use a normal JavaScript variable.

```javascript
let count = 0;

function increase() {
    count++;
}
```

The value changes internally.

```
0 → 1 → 2 → 3
```

But React **does not update the UI** because React doesn't track normal variables.

---

## React Needs Notification

React only updates the UI when it knows something has changed.

That's why React provides **State**.

Instead of changing variables directly, we tell React:

```
Hey React,
My data changed.
Please update the screen.
```

React immediately re-renders the component.

---

# 3. What is `useState`?

## Definition

`useState` is a **React Hook** that allows functional components to store and update state.

---

## Syntax

```javascript
const [state, setState] = useState(initialValue);
```

---

## Breakdown

```javascript
const [count, setCount] = useState(0);
```

| Part       | Meaning                       |
| ---------- | ----------------------------- |
| count      | Current state value           |
| setCount   | Function used to update state |
| useState() | React Hook                    |
| 0          | Initial value                 |

---

## Visualization

```
useState(0)

↓

Current Value

count = 0

↓

Update

setCount(5)

↓

count = 5

↓

React Re-renders
```

---

# 4. How State Works

```
User Clicks Button
        │
        ▼
setCount(count + 1)
        │
        ▼
State Changes
        │
        ▼
React Detects Change
        │
        ▼
Component Re-renders
        │
        ▼
UI Updates
```

---

# 5. Updating State

## Increase

```javascript
setCount(count + 1);
```

---

## Decrease

```javascript
setCount(count - 1);
```

---

## Reset

```javascript
setCount(0);
```

---

## Toggle Boolean

```javascript
const [isDark, setIsDark] = useState(false);

setIsDark(!isDark);
```

---

# 6. Never Update State Directly ❌

Wrong

```javascript
count++;
```

Wrong

```javascript
count = 10;
```

Wrong

```javascript
person.name = "Sai";
```

Wrong

```javascript
fruits.push("Apple");
```

---

Always use the setter function.

Correct

```javascript
setCount(count + 1);
```

---

# 7. State with Strings

```javascript
const [name, setName] = useState("Sai");
```

Update

```javascript
setName("Krishna");
```

---

# 8. State with Numbers

```javascript
const [age, setAge] = useState(25);
```

Update

```javascript
setAge(26);
```

---

# 9. State with Boolean

```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

Login

```javascript
setIsLoggedIn(true);
```

Logout

```javascript
setIsLoggedIn(false);
```

---

# 10. State with Objects

Objects are very common in React.

Example

```javascript
const [user, setUser] = useState({
    name: "Sai",
    age: 25,
    city: "Hyderabad"
});
```

---

## Updating an Object

Wrong

```javascript
user.age = 26;
```

Correct

```javascript
setUser({
    ...user,
    age: 26
});
```

---

## Why Spread Operator?

Current object

```javascript
{
name: "Sai",
age: 25,
city: "Hyderabad"
}
```

Without spread

```javascript
setUser({
age:26
})
```

Result

```javascript
{
age:26
}
```

Everything else disappears.

---

With spread

```javascript
setUser({
...user,
age:26
})
```

Result

```javascript
{
name:"Sai",
age:26,
city:"Hyderabad"
}
```

Only age changes.

---

# 11. State with Arrays

Example

```javascript
const [fruits, setFruits] = useState([
    "Apple",
    "Banana"
]);
```

---

## Add Item

```javascript
setFruits([
    ...fruits,
    "Mango"
]);
```

---

## Remove Item

```javascript
setFruits(
    fruits.filter(fruit => fruit !== "Banana")
);
```

---

## Update Item

```javascript
setFruits(
    fruits.map(fruit =>
        fruit === "Apple"
            ? "Orange"
            : fruit
    )
);
```

---

# 12. Why Can't We Use `push()`?

Wrong

```javascript
fruits.push("Mango");
```

Because

```
Old Array

↓

Modified

↓

Same Array Reference
```

React may not detect the change correctly.

---

Correct

```javascript
setFruits([
...fruits,
"Mango"
]);
```

React gets a **new array reference**.

---

# 13. Multiple States

Instead of

```javascript
const [user, setUser] = useState({
name:"",
age:"",
city:""
});
```

Sometimes better

```javascript
const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [city, setCity] = useState("");
```

Each state is independent.

---

# 14. Choosing State Structure

Use a **single object** when the values belong together (e.g., a user profile or form).

```javascript
const [user, setUser] = useState({
  name: "",
  age: 0,
  city: ""
});
```

Use **multiple state variables** when values are unrelated.

```javascript
const [theme, setTheme] = useState("light");
const [count, setCount] = useState(0);
```

---

# 15. State is Immutable

## Definition

**State should never be modified directly. Instead, create a new value and update the state using the setter function.**

---

Wrong

```javascript
user.name = "Sai";
```

Correct

```javascript
setUser({
...user,
name:"Sai"
});
```

---

# 16. Functional State Updates ⭐⭐⭐⭐⭐

When the next state depends on the previous state, use the callback form.

```javascript
setCount(prevCount => prevCount + 1);
```

This is the preferred approach in many real-world scenarios because it always uses the latest state value.

---

# 17. Common Data Types in State

```javascript
// Number
const [count, setCount] = useState(0);

// String
const [name, setName] = useState("");

// Boolean
const [isOpen, setIsOpen] = useState(false);

// Array
const [items, setItems] = useState([]);

// Object
const [user, setUser] = useState({});
```

---

# 18. Common Mistakes

❌ Updating state directly

```javascript
count++;
```

---

❌ Using `push()`

```javascript
items.push(item);
```

---

❌ Changing objects directly

```javascript
user.name="Sai";
```

---

❌ Forgetting the spread operator

```javascript
setUser({
age:26
});
```

---

❌ Assuming state updates immediately

```javascript
setCount(count + 1);
console.log(count); // Still the old value in this render
```

React schedules state updates, so don't expect the variable to change immediately after calling the setter.

---

# 19. Best Practices

✅ Use meaningful names.

```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

---

✅ Never mutate state.

---

✅ Use functional updates when based on previous state.

```javascript
setCount(prev => prev + 1);
```

---

✅ Keep state as small as possible.

Store only the data needed to render the UI.

---

✅ Group related values together.

---

# 20. Where is `useState` Used?

* Counter Apps
* Todo Apps
* Login Forms
* Signup Forms
* Shopping Cart
* Dark/Light Theme
* Image Sliders
* Search Filters
* Like Buttons
* Pagination
* Accordions
* Modals
* Tabs
* Dashboards
* E-commerce Applications
* Chat Applications

---

# 21. Interview Questions

### Q1. What is State?

**Answer:**
State is data managed by React that can change over time. When it changes, React re-renders the component.

---

### Q2. What is `useState`?

**Answer:**
`useState` is a React Hook that allows functional components to store and update state.

---

### Q3. Why can't we update state directly?

**Answer:**
React detects changes through the state setter function. Direct mutation doesn't reliably notify React and can lead to incorrect UI updates.

---

### Q4. What is the spread operator used for in state updates?

**Answer:**
It creates a new copy of an object or array while preserving existing values, allowing safe immutable updates.

---

### Q5. Difference between props and state?

| Props              | State                        |
| ------------------ | ---------------------------- |
| Passed from parent | Managed inside the component |
| Read-only          | Can be updated               |
| External data      | Internal data                |
| Parent controls it | Component controls it        |

---

# 22. One-Line Cheat Sheet

| Concept           | Remember                                     |
| ----------------- | -------------------------------------------- |
| State             | Data that changes over time                  |
| `useState`        | Hook for managing state                      |
| Setter Function   | Updates state and triggers re-render         |
| Objects           | Update using the spread operator             |
| Arrays            | Create a new array instead of mutating       |
| Booleans          | Toggle with `!value`                         |
| Functional Update | Use when new state depends on previous state |
| Re-render         | React updates the UI when state changes      |

---

# 🎯 Final Summary

```
State
│
├── Stores changing data
├── Managed using useState()
├── Triggers UI re-render
├── Never mutate directly
├── Update using setter function
├── Objects → Use spread (...)
├── Arrays → Create new arrays
├── Supports numbers, strings, booleans, arrays, and objects
└── One of the most frequently used React features in real-world applications
```

## 💡 Pro Tip

A simple mental model is:

> **State is your component's memory.**
> **`setState` (e.g., `setCount`) tells React that the memory changed, so React redraws the UI.**

If you remember that one idea, most `useState` behavior becomes much easier to understand and predict.
