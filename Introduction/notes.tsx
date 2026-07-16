# 📘 React JS Notes – Day 1: Introduction to React

> **Interview Notes + GitHub Notes + Revision Notes**

---

# What is React?

## Definition

> **React is an open-source JavaScript library used for building fast, interactive, and reusable User Interfaces (UI), especially for Single Page Applications (SPAs).**

It was developed by **Meta (Facebook)** in 2013.

React focuses only on the **View Layer (UI)** of an application.

---

## Simple Definition

React is a JavaScript library that converts **data into UI**.

```
Data
   ↓
React
   ↓
User Interface (UI)
```

Example

```javascript
const name = "Sai Krishna";
```

React automatically displays

```
Hello Sai Krishna
```

If the data changes

```javascript
const name = "Rahul";
```

React automatically updates the UI.

---

# Why was React Created?

Before React, developers built dynamic websites using plain JavaScript.

Whenever data changed, developers had to manually update the DOM.

Example

```javascript
document.getElementById("count").innerText = count;
```

Imagine a shopping cart.

```
Cart Count

Total Price

Checkout Button

Discount

Taxes

Shipping
```

When one product is added, every related UI element needs updating manually.

As applications become larger, managing these updates becomes difficult and error-prone.

React was created to solve this problem.

---

## React's Main Goal

Instead of telling the browser

```
Update this button

Update this text

Update this div
```

Developers simply update the data (state).

```
State Changes
      ↓
React
      ↓
UI Updates Automatically
```

---

# Problems React Solves

React solves several problems found in traditional DOM manipulation.

### 1. Manual DOM Manipulation

Without React

```javascript
document.getElementById(...)

querySelector(...)

innerHTML

appendChild()
```

Developers manually update every element.

With React

```javascript
setState(...)
```

React updates the UI automatically.

---

### 2. Code Reusability

Without React

```
Copy Navbar

Copy Footer

Copy Button

Copy Card
```

Repeated code everywhere.

With React

```
Navbar Component

Footer Component

Button Component

Card Component
```

Reusable components reduce duplicate code.

---

### 3. Better Performance

React compares UI changes before updating the browser.

Instead of updating everything,

it updates only the parts that changed.

---

### 4. Easy Maintenance

Applications are divided into small components.

Instead of managing one huge file,

developers manage many small reusable components.

---

# What is a Library?

A **library** is a collection of reusable code that helps developers perform specific tasks.

React is a library because it only focuses on one thing:

```
Building User Interfaces (UI)
```

It does **not** include backend functionality, databases, authentication, or routing by default.

---

# React is NOT a Framework

Frameworks usually provide everything.

Example

```
Routing

Authentication

Backend

Database

State Management

Testing
```

React only provides UI functionality.

Additional features are added using separate libraries.

Example

```
React Router → Routing

Redux / Zustand → State Management

Axios → API Calls

React Query → Data Fetching
```

---

# What is a Single Page Application (SPA)?

## Definition

A **Single Page Application (SPA)** is a web application that loads a single HTML page initially and updates the content dynamically without reloading the entire page.

---

## Traditional Website (MPA)

```
Home
     ↓
Server
     ↓
HTML

Click Products

↓

Server

↓

New HTML

↓

Page Reload

↓

Click Cart

↓

Server

↓

Reload Again
```

Every navigation requests a new HTML page from the server.

---

## React Application (SPA)

```
Load index.html Once

↓

JavaScript Loads

↓

Navigate Home

↓

Navigate Products

↓

Navigate Cart

↓

No Page Reload
```

React changes only the content.

---

# SPA vs MPA

| SPA (Single Page Application) | MPA (Multi Page Application)  |
| ----------------------------- | ----------------------------- |
| One HTML page                 | Multiple HTML pages           |
| No full page reload           | Reloads every page            |
| Faster navigation             | Slower navigation             |
| Better User Experience        | Less interactive              |
| React, Angular, Vue           | Traditional PHP, JSP, ASP.NET |

---

# What is the DOM?

## Definition

**DOM (Document Object Model)** is a tree-like representation of an HTML document created by the browser.

It allows JavaScript to access and manipulate HTML elements.

Example HTML

```html
<body>
    <button>Submit</button>
</body>
```

Browser creates

```
Document

↓

HTML

↓

BODY

↓

BUTTON

↓

"Submit"
```

JavaScript accesses this tree.

```javascript
document.getElementById()

document.querySelector()

document.createElement()
```

---

# Why is DOM Manipulation Expensive?

Whenever the Real DOM changes,

the browser may need to:

```
Recalculate CSS Styles

↓

Recalculate Layout (Reflow)

↓

Repaint Pixels

↓

Composite Layers

↓

Display on Screen
```

These operations are computationally expensive, especially in large applications.

---

# What is the Real DOM?

The **Real DOM** is the actual DOM maintained by the browser.

It is what users see on the screen.

```
Browser

↓

Real DOM

↓

Visible UI
```

Any direct DOM manipulation affects this structure.

---

# What is the Virtual DOM?

## Definition

The **Virtual DOM** is a lightweight JavaScript representation (copy) of the Real DOM stored in memory by React.

React never updates the Real DOM directly.

Instead,

it first updates the Virtual DOM.

---

Example

Old UI

```
Apple

Banana

Orange
```

New UI

```
Apple

Mango

Orange
```

React compares

```
Banana

↓

Mango
```

Only this element changes.

Everything else remains unchanged.

---

# Diffing Algorithm

## Definition

The **Diffing Algorithm** is the process React uses to compare the old Virtual DOM with the new Virtual DOM.

It finds exactly what has changed.

```
Old Virtual DOM

↓

New Virtual DOM

↓

Compare

↓

Changed Elements Found
```

---

# ReactDOM

## Definition

**ReactDOM** is the library that connects React with the browser.

It renders React components into the Real DOM and updates the Real DOM whenever React detects changes.

Think of it as a bridge.

```
React

↓

Virtual DOM

↓

Diffing

↓

ReactDOM

↓

Real DOM

↓

Browser Screen
```

---

# Component-Based Architecture

## Definition

A **Component** is an independent, reusable piece of UI.

Examples

```
Navbar

Footer

Sidebar

Button

Product Card

Profile Card
```

Large applications are built by combining many small components.

Example

```
App

├── Navbar

├── Sidebar

├── Products

│      ├── ProductCard

│      ├── ProductCard

│      ├── ProductCard

├── Footer
```

---

## Advantages of Components

* Reusable
* Easy to Maintain
* Easy to Test
* Better Code Organization
* Scalable
* Independent Development

---

# Declarative vs Imperative Programming

## Imperative Programming

Developers describe **how** to update the UI.

Example

```javascript
const button = document.getElementById("btn");

button.innerText = "Loading...";

button.disabled = true;
```

You manually tell the browser every step.

---

## Declarative Programming

Developers describe **what** the UI should look like.

React handles the updates automatically.

```jsx
<button disabled={loading}>
    {loading ? "Loading..." : "Submit"}
</button>
```

If `loading` changes,

React updates the button automatically.

---

# Complete React Rendering Flow

```
User Action
       │
       ▼
State Changes
       │
       ▼
React Creates New Virtual DOM
       │
       ▼
Compares Old Virtual DOM
        with
New Virtual DOM
       │
       ▼
Diffing Algorithm
       │
       ▼
ReactDOM Updates Real DOM
       │
       ▼
Browser Repaints Changed Elements
       │
       ▼
Updated UI Displayed
```

---

# Advantages of React

* Fast UI updates using Virtual DOM
* Component-based architecture
* Reusable code
* Better maintainability
* Declarative programming model
* Large ecosystem
* Strong community support
* Easy integration with APIs
* Excellent developer experience
* Widely used in modern web applications

---

# Interview Definitions (Must Remember)

### React

> React is an open-source JavaScript library used to build reusable and interactive user interfaces, primarily for Single Page Applications.

---

### SPA

> A Single Page Application loads a single HTML page initially and updates content dynamically without performing a full page reload.

---

### DOM

> The Document Object Model is a tree-like representation of an HTML document created by the browser, allowing JavaScript to access and manipulate page elements.

---

### Virtual DOM

> The Virtual DOM is a lightweight copy of the Real DOM stored in memory. React compares the old and new Virtual DOMs to efficiently update only the changed parts of the Real DOM.

---

### Diffing Algorithm

> The Diffing Algorithm is React's process of comparing the old Virtual DOM with the new Virtual DOM to determine the minimum changes required in the Real DOM.

---

### ReactDOM

> ReactDOM is the library that renders React components into the browser's Real DOM and applies updates after React's diffing process.

---

### Component

> A Component is an independent, reusable piece of UI that can be combined with other components to build complex user interfaces.

---

### Declarative Programming

> Declarative programming describes **what** the UI should look like based on the current state, while React automatically handles **how** the DOM is updated.

---

# ⭐ Quick Revision (2-Minute Cheat Sheet)

```
React
↓
JavaScript Library for Building UI

↓

Uses Components

↓

State Changes

↓

Creates New Virtual DOM

↓

Compares with Old Virtual DOM (Diffing)

↓

ReactDOM Updates Real DOM

↓

Browser Displays Updated UI

↓

No Manual DOM Manipulation
```

These notes cover the **React fundamentals** you'll repeatedly use throughout your React journey. Understanding these concepts thoroughly will make topics like **JSX, Components, Props, State, Hooks, Reconciliation, Rendering, and Performance Optimization** much easier to learn.
