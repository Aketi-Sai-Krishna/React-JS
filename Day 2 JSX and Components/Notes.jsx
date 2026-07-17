# React Mastery Roadmap

# Day 2 — JSX (JavaScript XML)

> **Goal:** Learn how React uses JSX to describe the UI and how JavaScript can be embedded inside HTML-like syntax.

---

# 1. What is JSX?

## Definition

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

Instead of creating UI using JavaScript objects manually, JSX makes the code easier to read and write.

### Without JSX

```javascript
const element = React.createElement(
  "h1",
  null,
  "Hello React"
);
```

### With JSX

```jsx
const element = <h1>Hello React</h1>;
```

Both produce the same result.

---

# JSX is NOT HTML

Although JSX looks like HTML, it is actually JavaScript.

Example

```jsx
const name = "Sai Krishna";

const element = <h1>Hello {name}</h1>;
```

Output

```
Hello Sai Krishna
```

The value inside `{}` is JavaScript.

---

# JSX Compilation

JSX is converted into JavaScript during compilation.

```jsx
<h1>Hello</h1>
```

becomes

```javascript
React.createElement(
    "h1",
    {},
    "Hello"
);
```

Modern React uses

```javascript
jsx("h1", {
    children: "Hello"
});
```

React finally creates a **Virtual DOM Object**.

---

# 2. JSX Rules

---

## Rule 1 — Return only one Parent Element

❌ Wrong

```jsx
<h1>Hello</h1>
<p>React</p>
```

✅ Correct

```jsx
<div>
    <h1>Hello</h1>
    <p>React</p>
</div>
```

or

```jsx
<>
    <h1>Hello</h1>
    <p>React</p>
</>
```

---

## Rule 2 — Close every Tag

Wrong

```jsx
<img>
```

Correct

```jsx
<img />
```

Wrong

```jsx
<input>
```

Correct

```jsx
<input />
```

---

## Rule 3 — Use camelCase Attributes

Wrong

```jsx
<div class="box"></div>
```

Correct

```jsx
<div className="box"></div>
```

---

Wrong

```jsx
<label for="name">
```

Correct

```jsx
<label htmlFor="name">
```

---

## Rule 4 — Inline Styles use Object

Wrong

```jsx
<div style="color:red">
```

Correct

```jsx
<div
    style={{
        color: "red",
        backgroundColor: "black"
    }}
>
```

Notice the double braces

```jsx
style={{}}
```

---

## Rule 5 — Comments

Wrong

```html
<!-- Comment -->
```

Correct

```jsx
{/* This is a JSX comment */}
```

---

# 3. JSX Expressions

## Definition

An **Expression** is anything that produces a value.

JSX allows JavaScript expressions inside `{}`.

---

## Variables

```jsx
const name = "React";

<h1>{name}</h1>
```

Output

```
React
```

---

## Numbers

```jsx
<p>{100}</p>
```

Output

```
100
```

---

## Arithmetic

```jsx
<p>{20 + 30}</p>
```

Output

```
50
```

---

## Boolean

```jsx
<p>{true}</p>
```

Output

Nothing is rendered.

---

## Ternary Operator

```jsx
const isLoggedIn = true;

<h1>{isLoggedIn ? "Welcome" : "Login"}</h1>
```

Output

```
Welcome
```

---

## Arrays

```jsx
const arr = [1,2,3];

<p>{arr}</p>
```

Output

```
123
```

---

## Objects

```jsx
const obj = {
    name: "Sai"
};

<p>{obj}</p>
```

Output

```
Error
```

Objects cannot be rendered directly.

---

# 4. Curly Braces `{}`

## Definition

Curly braces allow JavaScript inside JSX.

Anything inside `{}` is treated as JavaScript.

---

### Variable

```jsx
const age = 24;

<p>{age}</p>
```

---

### Function Call

```jsx
function greet() {
    return "Hello";
}

<h1>{greet()}</h1>
```

---

### Math

```jsx
<p>{10 * 5}</p>
```

---

### Template Literal

```jsx
const name = "Sai";

<h1>{`Hello ${name}`}</h1>
```

---

### Optional Chaining

```jsx
const user = {
    profile: {
        name: "Sai"
    }
};

<p>{user.profile?.name}</p>
```

---

# 5. React Fragments

## Definition

A Fragment lets us group multiple elements without creating an extra HTML element.

---

Without Fragment

```jsx
<div>
    <Header />
    <Footer />
</div>
```

Produces

```html
<div>
   ...
</div>
```

---

Using Fragment

```jsx
<>
    <Header />
    <Footer />
</>
```

No extra DOM node is created.

---

Equivalent

```jsx
<React.Fragment>
    ...
</React.Fragment>
```

---

# 6. Rendering HTML

React renders JSX into HTML.

```jsx
const element = (
    <div>
        <h1>Hello</h1>
        <p>Learning React</p>
    </div>
);
```

Browser

```html
<div>
    <h1>Hello</h1>
    <p>Learning React</p>
</div>
```

---

# 7. Rendering Variables

```jsx
const firstName = "Sai";
const lastName = "Krishna";

<h1>{firstName} {lastName}</h1>
```

Output

```
Sai Krishna
```

---

Another Example

```jsx
const marks = 90;

<p>Marks : {marks}</p>
```

---

# 8. Rendering Functions

Functions can return values that JSX renders.

```jsx
function getName() {
    return "Sai Krishna";
}

<h1>{getName()}</h1>
```

---

Example

```jsx
function getYear() {
    return new Date().getFullYear();
}

<p>{getYear()}</p>
```

---

# JSX Rendering Flow

```
JSX

↓

JavaScript

↓

React Element

↓

Virtual DOM

↓

Real DOM

↓

Browser
```

---

# Practice Project — Profile Card

## Folder Structure

```
src

│

├── App.jsx

├── main.jsx

└── index.css
```

---

## App.jsx

```jsx
function App() {

    const user = {
        name: "Sai Krishna",
        role: "Frontend Developer",
        company: "Curately AI",
        location: "Hyderabad"
    };

    return (
        <div className="card">

            <h1>{user.name}</h1>

            <p>{user.role}</p>

            <p>{user.company}</p>

            <p>{user.location}</p>

        </div>
    );
}

export default App;
```

---

## Learning Outcome

After completing Day 2, you should know:

* ✅ What JSX is
* ✅ JSX rules
* ✅ Expressions in JSX
* ✅ Curly braces
* ✅ Fragments
* ✅ Rendering HTML
* ✅ Rendering variables
* ✅ Rendering functions
* ✅ Build a Profile Card

---

---

# React Mastery Roadmap

# Day 3 — Components

> **Goal:** Learn how React applications are built using reusable components.

---

# 1. What is a Component?

## Definition

A **Component** is a reusable JavaScript function that returns JSX.

Think of components as **LEGO blocks**.

Small blocks combine to build large applications.

---

Example

```jsx
function Header() {
    return <h1>Welcome</h1>;
}
```

Usage

```jsx
<Header />
```

---

# Why Components?

Without Components

```
App.jsx

1500 lines

Everything mixed together
```

---

With Components

```
App

│

├── Navbar

├── Sidebar

├── Dashboard

├── Footer
```

Reusable

Readable

Maintainable

---

# 2. Functional Components

Modern React uses Functional Components.

---

Regular Function

```jsx
function Header() {
    return <h1>Header</h1>;
}
```

---

Arrow Function

```jsx
const Header = () => {
    return <h1>Header</h1>;
};
```

---

Short Form

```jsx
const Header = () => (
    <h1>Header</h1>
);
```

---

# Naming Rule

Always use PascalCase.

Correct

```jsx
UserCard
```

Wrong

```jsx
userCard
```

Lowercase names are treated as HTML elements.

---

# 3. Nested Components

Components can render other components.

```jsx
function Header() {
    return <h1>Header</h1>;
}

function Footer() {
    return <h1>Footer</h1>;
}

function App() {
    return (
        <>
            <Header />
            <Footer />
        </>
    );
}
```

---

# 4. Component Tree

Every React application forms a tree.

```
App

├── Navbar

├── Sidebar

├── Main

│      ├── Card

│      ├── Card

│      └── Card

└── Footer
```

Everything begins from

```jsx
<App />
```

---

# 5. Export

To use a component in another file, export it.

### Default Export

```jsx
function Navbar() {
    return <h1>Navbar</h1>;
}

export default Navbar;
```

Only one default export per file.

---

### Named Export

```jsx
export function Navbar() {
    return <h1>Navbar</h1>;
}
```

Multiple named exports are allowed.

---

# 6. Import

### Import Default Export

```jsx
import Navbar from "./Navbar";
```

The imported name can be changed.

```jsx
import Header from "./Navbar";
```

---

### Import Named Export

```jsx
import { Navbar } from "./Navbar";
```

The name must match unless aliased.

```jsx
import { Navbar as Header } from "./Navbar";
```

---

# Default vs Named Export

| Feature       | Default Export | Named Export       |
| ------------- | -------------- | ------------------ |
| Per file      | One            | Multiple           |
| Import braces | ❌              | ✅                  |
| Rename freely | ✅              | ❌ (unless aliased) |

---

# Practice Project

## Folder Structure

```
src

│

├── components

│      ├── Navbar.jsx

│      ├── Sidebar.jsx

│      ├── Card.jsx

│      └── Footer.jsx

│

├── App.jsx

└── main.jsx
```

---

### Navbar.jsx

```jsx
function Navbar() {
    return <nav>Navbar</nav>;
}

export default Navbar;
```

---

### Sidebar.jsx

```jsx
function Sidebar() {
    return <aside>Sidebar</aside>;
}

export default Sidebar;
```

---

### Card.jsx

```jsx
function Card() {
    return (
        <div>
            <h2>React Card</h2>
            <p>Learning Components</p>
        </div>
    );
}

export default Card;
```

---

### Footer.jsx

```jsx
function Footer() {
    return <footer>Footer</footer>;
}

export default Footer;
```

---

### App.jsx

```jsx
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Card />
            <Footer />
        </>
    );
}

export default App;
```

---

# React Component Flow

```
main.jsx

↓

<App />

↓

Navbar
Sidebar
Card
Footer

↓

JSX

↓

Virtual DOM

↓

Real DOM
```

---

# Day 3 Summary

* ✅ A component is a reusable JavaScript function that returns JSX.
* ✅ Modern React primarily uses **Functional Components**.
* ✅ Components can be nested to build complex UIs.
* ✅ React applications form a **Component Tree** with `App` at the root.
* ✅ Use `export` to make components available to other files.
* ✅ Use `import` to reuse exported components.
* ✅ Understand the difference between **default** and **named** exports.
* ✅ Build a simple layout with `Navbar`, `Sidebar`, `Card`, and `Footer`.

These two days establish the foundation for everything else in React. Once you're comfortable with JSX and components, the next step is **Props (Day 4 & Day 5)**, where you'll learn how data flows between components.
