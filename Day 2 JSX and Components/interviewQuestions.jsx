# React Day 2 & Day 3 Interview Questions

## (JSX + Components)

These are based on **real interview patterns** from startups, product-based companies (Zoho, Freshworks, Razorpay, Swiggy, Flipkart), MNCs (TCS, Accenture, Deloitte), and FAANG-level companies (Google, Meta, Amazon, Microsoft).

---

# 🟢 Beginner Level (Top 5)

These are asked almost every React interview.

## 1. What is JSX? Why do we use it?

> Tests: React basics

---

## 2. Is JSX HTML? Explain the difference.

> Tests: Understanding of JSX compilation

---

## 3. What are the rules of JSX?

> Tests:

* One parent element
* Closing tags
* className
* htmlFor
* camelCase

---

## 4. What can be written inside curly braces `{}` in JSX?

> Tests:

* Variables
* Expressions
* Function calls
* Ternary operators

---

## 5. What is the difference between a React Element and a React Component?

> One of the most common beginner interview questions.

---

# 🟡 Intermediate Level (Top 10)

These are asked in companies hiring React Developers with **1–4 years experience**.

---

## 1. What happens behind the scenes when JSX is compiled?

---

## 2. Why can't JSX return multiple sibling elements without wrapping them?

---

## 3. What is React Fragment?

When should you use it instead of a `<div>`?

---

## 4. What is the difference between

```jsx
<Component />
```

and

```javascript
Component()
```

---

## 5. What is the difference between Functional Components and Class Components?

---

## 6. Why should component names start with a capital letter?

---

## 7. Explain the React Component Tree.

---

## 8. What is the difference between default export and named export?

---

## 9. What is the difference between these imports?

```javascript
import Header from "./Header";
```

vs

```javascript
import { Header } from "./Header";
```

---

## 10. Can a component return `null`?

When is it useful?

---

# 🔴 Pro / FAANG Level (Top 10)

These questions test **how React actually works internally**, not just syntax.

---

## 1. Explain how JSX becomes a React Element.

Follow-up:

What does Babel generate?

---

## 2. What exactly is a React Element internally?

Is it an HTML element?

---

## 3. Why are React Elements immutable?

Why is immutability important?

---

## 4. Why does React require one parent element in JSX?

Explain from the Virtual DOM perspective.

---

## 5. What is the difference between a React Element, Component, and DOM Node?

This is one of the most frequently asked conceptual questions.

---

## 6. What happens when React renders

```jsx
<App />
```

Explain every step until the browser displays the UI.

---

## 7. Why is React based on components instead of templates?

What problem do components solve?

---

## 8. Why are Functional Components just JavaScript functions?

How does React know they are components?

---

## 9. What is the difference between rendering HTML and rendering Components?

Example

```jsx
<div></div>
```

vs

```jsx
<Card />
```

How does React treat each one internally?

---

## 10. Explain the complete rendering pipeline of React.

Expected explanation:

```
JSX

↓

Babel

↓

React.createElement()

↓

React Element

↓

Virtual DOM

↓

Fiber Tree

↓

Reconciliation

↓

Diffing

↓

DOM Updates

↓

Browser Paint
```

---

# ⭐ Bonus Practical Coding Questions (Frequently Asked)

These are commonly asked in live coding rounds.

### 1.

Create a reusable `UserCard` component using JSX.

---

### 2.

Create a `Navbar` component and render it inside `App`.

---

### 3.

Render an array of names using JSX.

---

### 4.

Display a welcome message based on a boolean variable.

Example:

```
Welcome Sai
```

Else

```
Please Login
```

---

### 5.

Create three nested components:

```
App

↓

Dashboard

↓

Profile

↓

UserInfo
```

---

### 6.

Convert this HTML into JSX.

```html
<div class="container">
    <label for="name">Name</label>
    <input type="text">
</div>
```

---

### 7.

Create a layout using only React Fragments (no extra `<div>`).

---

### 8.

Split a page into four reusable components:

* Navbar
* Sidebar
* Main
* Footer

---

### 9.

Export a component using both:

* Default Export
* Named Export

Then import both correctly.

---

### 10.

Build the following component tree.

```
App

├── Header

├── Hero

├── Services

│      ├── Card

│      ├── Card

│      └── Card

└── Footer
```

---

# 🎯 Most Important Questions (Revise Before Every Interview)

If you have only **30 minutes** before an interview, revise these first:

1. What is JSX?
2. JSX vs HTML
3. JSX Rules
4. Curly Braces in JSX
5. React Fragment vs `<div>`
6. React Element vs Component
7. Functional Components
8. Nested Components & Component Tree
9. Default Export vs Named Export
10. JSX → Babel → React Element → Virtual DOM → Fiber → DOM (complete rendering flow)

These 10 concepts account for a large share of React fundamentals asked in frontend interviews and provide a strong foundation before moving on to **Props**, which is typically the next major interview topic.
