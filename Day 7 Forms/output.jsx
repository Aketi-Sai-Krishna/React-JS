# React Forms Interview Questions (Top 15)

> These are the **most frequently asked React Forms interview questions** in companies like TCS, Accenture, Cognizant, Capgemini, Deloitte, Infosys, Wipro, as well as product companies such as Zoho, Freshworks, Razorpay, Swiggy, and Amazon.

---

# 🟢 Beginner Level (Top 5)

## 1. What is a form in React?

**What the interviewer checks:**

* Basic understanding of forms.

**Expected Answer:**

> A form in React is used to collect user input such as login details, registration information, search queries, or profile data. React typically manages form data using state through controlled components.

---

## 2. What is a Controlled Component?

**Expected Answer:**

> A Controlled Component is a form element whose value is controlled by React state using the `value` prop and updated with the `onChange` event. React becomes the single source of truth.

**Example**

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

---

## 3. Why do we use `onChange`?

**Expected Answer:**

> `onChange` is used to detect user input changes and update the React state so the UI stays synchronized with the data.

---

## 4. Why do we use `preventDefault()`?

**Expected Answer:**

> It prevents the browser's default form submission behavior, which reloads the page. In React, we usually handle form submission ourselves without refreshing the page.

---

## 5. What is the difference between `value` and `checked`?

**Expected Answer:**

| value                | checked                               |
| -------------------- | ------------------------------------- |
| Used for text inputs | Used for checkboxes and radio buttons |
| Stores text          | Stores boolean value                  |

---

# 🟡 Intermediate Level (Top 5)

## 1. Controlled Components vs Uncontrolled Components

**Expected Answer:**

| Controlled       | Uncontrolled          |
| ---------------- | --------------------- |
| Uses React state | Uses DOM              |
| Uses `value`     | Uses `defaultValue`   |
| Uses `onChange`  | Uses `ref`            |
| Easy validation  | Harder validation     |
| Recommended      | Used in special cases |

---

## 2. Why is React called the Single Source of Truth?

**Expected Answer:**

> Because the input value is stored in React state instead of the DOM. Every change updates the state, and the UI is rendered from that state.

---

## 3. How do you handle multiple inputs with one function?

**Expected Answer:**

Use the `name` attribute with computed property names.

```jsx
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
```

This allows a single function to update multiple fields.

---

## 4. How do you validate a form?

**Expected Answer:**

> Validation checks whether user input meets specific rules before submitting.

Examples:

* Required fields
* Email format
* Password length
* Phone number

Validation usually happens inside `handleSubmit()` before making an API call.

---

## 5. How do you reset a form after submission?

**Expected Answer:**

Reset the state back to its initial values.

```jsx
setForm({
  name: "",
  email: "",
  password: "",
});
```

---

# 🔴 Pro Level (Top 5)

## 1. Why do developers prefer Controlled Components over Uncontrolled Components?

**Expected Answer:**

> Controlled Components provide better control over user input, make validation easier, simplify error handling, enable conditional rendering, and integrate well with React's state management.

---

## 2. What are common mistakes developers make while handling forms?

**Expected Answer:**

* Forgetting `preventDefault()`
* Mutating state directly
* Missing `onChange`
* Missing `value`
* Not validating inputs
* Creating separate state for every field unnecessarily

---

## 3. How would you optimize a large form with many fields?

**Expected Answer:**

* Store related fields in one state object.
* Use a generic `handleChange`.
* Create reusable input components.
* Validate only when needed.
* Consider using libraries like **React Hook Form** for better performance.

---

## 4. Why is React Hook Form faster than using only `useState`?

**Expected Answer:**

> React Hook Form relies on uncontrolled inputs internally and minimizes unnecessary re-renders. It tracks field changes efficiently, making large forms more performant than updating React state on every keystroke.

---

## 5. Explain the complete flow of a React form from typing to API submission.

**Expected Answer:**

```text
User Types
      ↓
onChange Fires
      ↓
React State Updates
      ↓
Component Re-renders
      ↓
Validation Runs
      ↓
User Clicks Submit
      ↓
preventDefault()
      ↓
Validate Form
      ↓
Call API
      ↓
Receive Response
      ↓
Show Success/Error
      ↓
Reset Form (Optional)
```

---

# ⭐ Bonus Questions (Frequently Asked in Product Companies)

### 1. Why do we use the `name` attribute in forms?

**Answer:**
To identify which field changed so a single `handleChange` function can update the correct state property.

---

### 2. What are computed property names?

**Answer:**

```jsx
[e.target.name]: e.target.value
```

They allow dynamic object keys when updating state.

---

### 3. What is form validation?

**Answer:**
The process of checking whether user input is valid before submitting data to the server.

---

### 4. Where should validation happen?

**Answer:**

* **Client-side** for a better user experience.
* **Server-side** for security and data integrity.
* Production applications should use both.

---

### 5. Which form libraries have you used?

**Answer:**

* **React Hook Form** (most popular)
* Formik
* Final Form

React Hook Form is widely preferred because it offers excellent performance, simple validation, and fewer re-renders.

---

# ⭐ Most Important Interview Questions (Revise Before Any Interview)

If you have only 15 minutes to prepare, focus on these:

1. What is a Controlled Component?
2. Controlled vs Uncontrolled Components.
3. Why do we use `onChange`?
4. Why do we use `preventDefault()`?
5. How do you handle multiple inputs?
6. Why use computed property names (`[e.target.name]`)?
7. How do you validate a form?
8. How do you reset a form?
9. Common mistakes in React forms.
10. Why is React Hook Form preferred in large applications?

Mastering these questions will prepare you for the majority of React form discussions in both service-based and product-based company interviews.
