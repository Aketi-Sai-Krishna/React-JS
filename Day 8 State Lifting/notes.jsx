# 📘 React Lifting State Up & Component Communication Notes

> **Beginner → Pro | Interview Notes | GitHub Ready**

---

# 📖 What is Component Communication?

In React, components often need to exchange information.

There are **three common communication patterns**:

```
Parent → Child
Child → Parent
Sibling ↔ Sibling (via Parent)
```

React follows **One-Way Data Flow**, meaning data always flows **from Parent to Child**.

---

# 1️⃣ Parent → Child Communication

## Definition

Parent components send data to child components using **props**.

```
Parent
   │
 props
   ▼
Child
```

### Example

```jsx
function App() {
  const username = "Sai Krishna";

  return <Profile username={username} />;
}

function Profile(props) {
  return <h1>{props.username}</h1>;
}
```

### React internally creates

```js
props = {
  username: "Sai Krishna"
}
```

### Output

```
Sai Krishna
```

---

## Why do we use Props?

Props allow us to make components reusable.

Without props:

```jsx
function Profile() {
  return <h1>Sai Krishna</h1>;
}
```

Only one name can be displayed.

With props:

```jsx
<Profile username="Sai" />
<Profile username="Rahul" />
<Profile username="Priya" />
```

Output

```
Sai

Rahul

Priya
```

One component → Multiple outputs.

---

## Important Rules

✔ Props are Read Only.

❌ Never modify props.

```jsx
props.username = "John"; // Wrong
```

The parent owns the data.

---

# 2️⃣ Child → Parent Communication

## Problem

Props only allow data to flow

```
Parent
   │
   ▼
Child
```

But what if the child wants to tell the parent something?

Example:

* Button Click
* Form Submit
* Search Input
* Add to Cart
* Login

React solves this using **Callback Functions**.

---

## Callback Props

Parent creates a function.

```jsx
function App() {

    function receiveMessage(message){
        console.log(message);
    }

    return (
        <Child send={receiveMessage}/>
    );
}
```

Parent passes the function as a prop.

```
send = receiveMessage
```

Child receives it.

```jsx
function Child({send}){

    return (
        <button
            onClick={() =>
                send("Hello Parent")
            }
        >
            Send
        </button>
    );
}
```

---

## Workflow

```
Parent creates function

↓

Passes function as prop

↓

Child receives function

↓

Button Click

↓

Child calls function

↓

Parent executes function

↓

Parent updates state (if needed)

↓

React Re-renders
```

---

## Remember

The child **does not change the parent directly**.

Instead,

The child **calls the parent's function**.

---

## Real Life Example

Restaurant

```
Customer

↓

Waiter (Child)

↓

Kitchen Manager (Parent)
```

The waiter doesn't cook the food.

The waiter informs the kitchen.

The kitchen decides what to do.

Same idea in React.

---

# Parent → Child vs Child → Parent

| Parent → Child    | Child → Parent          |
| ----------------- | ----------------------- |
| Uses Props        | Uses Callback Function  |
| Parent sends data | Child sends events/data |
| Parent owns data  | Parent still owns data  |
| One-way flow      | Child requests Parent   |

---

# 3️⃣ Lifting State Up

## Definition

> **Move shared state to the nearest common parent so multiple child components can access the same data.**

---

## Why do we need it?

Imagine

```
App

├── SearchBox

└── ProductList
```

SearchBox needs

```
searchText
```

ProductList also needs

```
searchText
```

If SearchBox owns the state,

ProductList cannot access it.

Wrong

```
SearchBox

searchText
```

---

## Correct

Move state to App.

```
        App
         │
 searchText
     │
─────┼─────
│           │
▼           ▼

SearchBox  ProductList
```

Now both children use the same state.

---

# Temperature Converter Example

```
          App
     temperature

      /         \

TempInput     Result
```

Parent owns

```jsx
const [temperature, setTemperature] = useState("");
```

Parent passes

```jsx
<TempInput
    temperature={temperature}
    setTemperature={setTemperature}
/>

<Result
    temperature={temperature}
/>
```

TempInput updates

```
setTemperature(25)
```

Parent updates state

```
temperature = 25
```

React re-renders

Both components receive

```
25
```

Result calculates

```
77°F
```

---

# Complete Workflow

```
User Types

↓

TempInput

↓

setTemperature()

↓

Parent Updates State

↓

React Re-renders

↓

TempInput

↓

Result

↓

Updated UI
```

---

# Real Project Example

Amazon

```
App

├── Navbar

├── Product

└── Cart
```

User clicks

```
Add to Cart
```

inside Product.

Product cannot update Cart directly.

Instead

```
Product

↓

addToCart()

↓

Parent Updates Cart

↓

Navbar Updates

↓

Cart Updates
```

This is Lifting State Up.

---

# When Should You Lift State?

Lift the state when:

✔ Two or more components need the same data.

✔ Multiple components should stay synchronized.

✔ Parent needs to control child data.

Do NOT lift state if only one component uses it.

---

# React Data Flow

```
Parent

↓

Props

↓

Child

↓

Callback Function

↓

Parent

↓

State Updates

↓

React Re-renders

↓

Updated Props

↓

Child
```

---

# Benefits of Lifting State Up

✅ Single Source of Truth

Only one component owns the data.

---

✅ Better Synchronization

All components always display the latest value.

---

✅ Easier Debugging

One place manages the state.

---

✅ Better Maintainability

Cleaner architecture.

---

✅ Reusable Components

Components become independent and reusable.

---

# Single Source of Truth

Instead of

```
SearchBox

searchText

ProductList

searchText
```

Use

```
App

searchText
```

One state

Many components.

---

# Why Split Components?

Instead of

```
App.jsx

1000 Lines
```

Split into

```
App

├── Navbar

├── SearchBar

├── ProductList

├── ProductCard

├── Footer
```

Benefits

✔ Easy to read

✔ Easy to maintain

✔ Easy to debug

✔ Reusable

✔ Team-friendly

✔ Improves scalability

---

# Common Mistakes

❌ Modifying props

```jsx
props.name = "Sai";
```

---

❌ Storing duplicate state

```jsx
SearchBox

searchText
```

and

```jsx
ProductList

searchText
```

---

❌ Child directly modifying Parent state

Not possible.

Always use callback functions.

---

❌ Lifting every state

Only lift state when multiple components need it.

---

# Interview Definition

### What are Props?

> Props are read-only inputs passed from a parent component to a child component. They allow components to receive data and become reusable.

---

### What is Child-to-Parent Communication?

> Child-to-parent communication is achieved by passing a callback function from the parent as a prop. The child calls that function to notify the parent or send data.

---

### What is Lifting State Up?

> Lifting State Up is the process of moving state to the nearest common parent component so multiple child components can share and stay synchronized with the same data.

---

### Why do we lift state?

> We lift state to create a single source of truth, avoid duplicate state, synchronize sibling components, and make state management easier.

---

### What is a Single Source of Truth?

> A single source of truth means one component owns and manages a piece of state, while other components receive it through props.

---

# Interview Tips

### Remember These Three Rules

### Rule 1

If Parent wants to send data

```
Props
```

---

### Rule 2

If Child wants to send data

```
Callback Function
```

---

### Rule 3

If multiple components need the same data

```
Lift State Up
```

---

# Quick Revision

```
Parent → Child
      Props

Child → Parent
      Callback Function

Multiple Children
      Lift State Up

One Owner
      Single Source of Truth

State Changes
      React Re-renders

Updated State
      Updated UI
```

---

# 🎯 One-Line Summary

> **Props send data down, callback functions send events up, and Lifting State Up keeps shared state in the nearest common parent so every component stays synchronized.** 🚀
