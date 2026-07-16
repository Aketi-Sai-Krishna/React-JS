# React Day 1 – Interview Questions & Answers (Definition-Level)

---

# 🟢 Beginner Level (Top 5)

## 1. What is React? Why is it called a library instead of a framework?

**Answer:**

> React is an open-source JavaScript library used to build fast, interactive, and reusable user interfaces, mainly for Single Page Applications (SPAs). It is called a library because it focuses only on the UI layer, unlike frameworks that provide a complete solution.

---

## 2. Why was React created? What problems does it solve?

**Answer:**

> React was created to simplify building dynamic user interfaces. It eliminates manual DOM manipulation by updating the UI automatically based on state changes, making applications easier to build, maintain, and scale.

---

## 3. What is a Single Page Application (SPA)? How is it different from an MPA?

**Answer:**

> A Single Page Application (SPA) loads a single HTML page initially and updates content dynamically without reloading the page. An MPA (Multi Page Application) loads a new HTML page from the server for every navigation.

---

## 4. What is the Virtual DOM? How is it different from the Real DOM?

**Answer:**

> The Virtual DOM is a lightweight copy of the Real DOM stored in memory by React. React compares the old and new Virtual DOMs to identify changes and updates only the necessary parts of the Real DOM.

---

## 5. Explain the complete React rendering flow from a state change until the UI is updated.

**Answer:**

```text
State Changes
      ↓
New Virtual DOM Created
      ↓
Compared with Old Virtual DOM
      ↓
Diffing Algorithm Finds Changes
      ↓
ReactDOM Updates Real DOM
      ↓
Browser Repaints Updated UI
```

---

# 🟡 Medium Level (Top 10)

## 1. How does React update the UI efficiently?

**Answer:**

> React creates a new Virtual DOM after a state change, compares it with the previous Virtual DOM using the Diffing Algorithm, and updates only the changed parts of the Real DOM.

---

## 2. What is the Diffing Algorithm?

**Answer:**

> The Diffing Algorithm is React's process of comparing the old Virtual DOM with the new Virtual DOM to identify the minimum changes required before updating the Real DOM.

---

## 3. What is Reconciliation?

**Answer:**

> Reconciliation is the process React uses to compare Virtual DOM trees, identify differences, and update the Real DOM efficiently.

---

## 4. Does React compare the Virtual DOM with the Real DOM?

**Answer:**

> No. React compares the old Virtual DOM with the new Virtual DOM. After finding the differences, ReactDOM updates the Real DOM.

---

## 5. Why is DOM manipulation considered expensive?

**Answer:**

> DOM manipulation is expensive because changes to the Real DOM may require the browser to recalculate styles, perform layout (reflow), repaint, and composite the page.

---

## 6. What is ReactDOM?

**Answer:**

> ReactDOM is the library that connects React with the browser. It renders React components into the Real DOM and updates the Real DOM after React completes the diffing process.

---

## 7. Declarative vs Imperative Programming

**Answer:**

**Imperative**

> Describes **how** to update the UI step by step.

**Declarative**

> Describes **what** the UI should look like, and React handles the updates automatically.

---

## 8. What is Component-Based Architecture?

**Answer:**

> Component-Based Architecture is a design approach where the UI is divided into small, reusable, independent components that can be combined to build complex applications.

---

## 9. What happens internally when React state changes?

**Answer:**

```text
State Changes
      ↓
React Creates New Virtual DOM
      ↓
Compares with Old Virtual DOM
      ↓
Diffing Algorithm
      ↓
ReactDOM Updates Real DOM
      ↓
Browser Displays Updated UI
```

---

## 10. Is React always faster than Vanilla JavaScript?

**Answer:**

> No. Direct DOM manipulation in Vanilla JavaScript can be faster for small applications. React becomes more efficient in large applications because it minimizes unnecessary DOM updates and improves maintainability.

---

# 🔴 FAANG / Hard Level (Top 10)

## 1. Why is React's Diffing Algorithm O(n) instead of O(n³)?

**Answer:**

> React assumes elements of different types produce different trees and uses keys to identify list items. These assumptions reduce the comparison complexity from O(n³) to O(n).

---

## 2. Why doesn't React directly update the Real DOM after every state change?

**Answer:**

> Updating the Real DOM frequently is expensive. React first updates the Virtual DOM, compares changes, and updates only the necessary parts of the Real DOM.

---

## 3. How does React decide which DOM nodes need to be updated?

**Answer:**

> React compares the old Virtual DOM with the new Virtual DOM using the Diffing Algorithm and updates only the nodes that have changed.

---

## 4. Does React recreate the entire Virtual DOM on every render?

**Answer:**

> React creates a new Virtual DOM representation for the current render and compares it with the previous one. Only the differences are applied to the Real DOM.

---

## 5. Why isn't the Virtual DOM React's biggest performance optimization?

**Answer:**

> React's main optimization comes from minimizing unnecessary Real DOM updates through efficient reconciliation and batching, not simply from having a Virtual DOM.

---

## 6. Can React exist without the Virtual DOM?

**Answer:**

> Yes. React's architecture is not strictly dependent on the Virtual DOM. Some React renderers use different rendering strategies depending on the target platform.

---

## 7. Why do companies use React even though Vanilla JavaScript can sometimes be faster?

**Answer:**

> React improves code reusability, maintainability, scalability, developer productivity, and efficiently manages UI updates in large applications.

---

## 8. What assumptions does React make during reconciliation?

**Answer:**

> React assumes that elements of different types produce different trees and that developers provide stable keys to identify list items.

---

## 9. Explain React's rendering process from a button click to browser paint.

**Answer:**

```text
Button Click
      ↓
State Updates
      ↓
New Virtual DOM
      ↓
Diffing Algorithm
      ↓
Reconciliation
      ↓
ReactDOM Updates Real DOM
      ↓
Browser Recalculates Layout
      ↓
Repaint
      ↓
Updated UI Displayed
```

---

## 10. How does React's component architecture help in large applications?

**Answer:**

> React divides the UI into reusable, independent components, making applications easier to develop, test, maintain, and scale while reducing code duplication.

---

# ⭐ 10 One-Line Definitions (Interview Revision)

| Question                | One-Line Answer                                                                 |
| ----------------------- | ------------------------------------------------------------------------------- |
| React                   | JavaScript library for building reusable user interfaces.                       |
| SPA                     | Loads one HTML page and updates content dynamically without full page reloads.  |
| DOM                     | Tree-like representation of an HTML document created by the browser.            |
| Real DOM                | The actual DOM rendered and managed by the browser.                             |
| Virtual DOM             | Lightweight copy of the Real DOM stored in memory by React.                     |
| Diffing                 | Process of comparing old and new Virtual DOM trees.                             |
| Reconciliation          | Process of updating the Real DOM based on diffing results.                      |
| ReactDOM                | Library that renders React components and updates the Real DOM.                 |
| Component               | Reusable, independent piece of UI.                                              |
| Declarative Programming | Describes **what** the UI should look like; React handles **how** to update it. |

These answers are concise, technically correct, and suitable for **freshers (0–2 years)** as well as **mid-level React interviews**, while also providing a foundation for answering follow-up questions in more advanced interviews.
