# 📘 React Forms (Interview Notes)

> **Level:** Beginner → Pro
> **Goal:** Master React Forms used in 90% of real-world applications.

---

# React Forms

A **form** is used to collect input from users.

Common examples:

* Login Form
* Signup Form
* Contact Form
* Search Bar
* Profile Update
* Checkout Form

Unlike HTML, React prefers **Controlled Components**, where React manages the form data through state.

---

# Controlled Components ⭐⭐⭐⭐⭐ (Most Important)

## Definition

A **Controlled Component** is a form element whose value is controlled by **React State**.

React becomes the **Single Source of Truth**.

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

### Flow

```
User Types
     ↓
onChange Event
     ↓
setState()
     ↓
React State Updates
     ↓
Component Re-renders
     ↓
Input Displays New Value
```

---

## Why Controlled Components?

* React always knows the current value.
* Easy validation.
* Easy form reset.
* Easy API submission.
* Easy error handling.
* Predictable behavior.

---

# Single Source of Truth

React state should be the only place that stores the input value.

```jsx
value={name}
```

means

```
Input Value = React State
```

Not

```
Input Value = Browser
```

---

# onChange Event

Every time the user types, React updates the state.

```jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

`e.target.value` contains the current input value.

Example:

```
Typing:

S
Sa
Sai
```

Console:

```
S
Sa
Sai
```

---

# Form Submission

```jsx
function handleSubmit(e) {
  e.preventDefault();

  console.log("Submitted");
}
```

```jsx
<form onSubmit={handleSubmit}>
  <button>Submit</button>
</form>
```

---

# Why use preventDefault()?

Normally:

```
Submit
   ↓
Browser Reloads Page
   ↓
React State Lost
```

Using

```jsx
e.preventDefault();
```

prevents page refresh.

---

# Handling Multiple Inputs ⭐⭐⭐⭐⭐

Instead of

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [city, setCity] = useState("");
```

Use one object

```jsx
const [form, setForm] = useState({
  name: "",
  email: "",
  city: "",
});
```

---

## Generic handleChange()

```jsx
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
```

Input

```jsx
<input
  name="email"
  value={form.email}
  onChange={handleChange}
/>
```

Typing

```
abc@gmail.com
```

State becomes

```jsx
{
  name: "",
  email: "abc@gmail.com",
  city: ""
}
```

---

# Why use []?

```jsx
[e.target.name]
```

This is called a **Computed Property Name**.

Example

```jsx
const key = "email";

const obj = {
  [key]: "abc@gmail.com",
};
```

Result

```jsx
{
  email: "abc@gmail.com"
}
```

Without brackets

```jsx
{
  key: "abc@gmail.com"
}
```

Wrong.

---

# Validation ⭐⭐⭐⭐⭐

Validation checks whether user input is valid before submission.

Common validations

* Required field
* Email format
* Password length
* Confirm Password
* Phone number
* Minimum age

---

## Required Validation

```jsx
if (name.trim() === "") {
  alert("Name is required");
}
```

---

## Email Validation

```jsx
if (!email.includes("@")) {
  alert("Invalid Email");
}
```

---

## Password Validation

```jsx
if (password.length < 8) {
  alert("Password must contain at least 8 characters");
}
```

---

## Validation Flow

```
Submit
   ↓
Check Fields
   ↓
Any Errors?
   ↓
Yes → Show Error
No → Submit Data
```

---

# Reset Form

```jsx
setForm({
  name: "",
  email: "",
  city: "",
});
```

Useful after successful submission.

---

# Checkbox

Checkbox uses

```
checked
```

instead of

```
value
```

Example

```jsx
const [agree, setAgree] = useState(false);

<input
  type="checkbox"
  checked={agree}
  onChange={(e) => setAgree(e.target.checked)}
/>
```

---

# Radio Button

```jsx
const [gender, setGender] = useState("");

<input
  type="radio"
  value="Male"
  checked={gender === "Male"}
  onChange={(e) => setGender(e.target.value)}
/>
```

---

# Select Dropdown

```jsx
const [country, setCountry] = useState("");

<select
  value={country}
  onChange={(e) => setCountry(e.target.value)}
>
  <option value="">Select</option>
  <option value="India">India</option>
  <option value="USA">USA</option>
</select>
```

---

# Textarea

```jsx
const [message, setMessage] = useState("");

<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
```

Works exactly like an input.

---

# Controlled vs Uncontrolled Components ⭐⭐⭐⭐⭐

| Controlled       | Uncontrolled      |
| ---------------- | ----------------- |
| Uses React State | Uses DOM          |
| Uses value       | Uses defaultValue |
| Uses onChange    | Uses ref          |
| Easy Validation  | Harder Validation |
| Predictable      | Less Predictable  |
| Recommended      | Rarely Used       |

---

# Form State Best Practices

✅ Group related fields in one object.

```jsx
const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
});
```

---

## Keep State Minimal

Don't store derived values.

Bad

```jsx
const [fullName, setFullName] = useState("");
```

Good

```jsx
const fullName = `${firstName} ${lastName}`;
```

---

# Common Mistakes

❌ Forgetting

```jsx
value={state}
```

---

❌ Forgetting

```jsx
onChange
```

---

❌ Mutating state

Wrong

```jsx
form.name = "Sai";
```

Correct

```jsx
setForm({
  ...form,
  name: "Sai",
});
```

---

❌ Forgetting

```jsx
preventDefault()
```

---

❌ Not validating before submission

---

# Real Project Flow

```
User Opens Form
        ↓
React Initializes State
        ↓
User Types
        ↓
onChange Updates State
        ↓
Validation Runs
        ↓
Display Errors (if any)
        ↓
Submit Form
        ↓
API Request
        ↓
Success/Error Response
        ↓
Reset Form or Show Message
```

---

# Performance Tips

### ✅ Use one `handleChange` for multiple fields.

```jsx
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
```

---

### ✅ Keep validation inside `handleSubmit`.

Avoid validating every field unless required.

---

### ✅ Store only necessary data.

---

### ✅ Reset after successful submission.

---

### ✅ Use reusable input components in large forms.

---

# Interview Questions

## Beginner

### 1. What is a form in React?

A component used to collect user input.

---

### 2. What is a Controlled Component?

A form element whose value is controlled by React state.

---

### 3. Why do we use `onChange`?

To update React state whenever the user changes the input.

---

### 4. Why use `preventDefault()`?

To stop the browser's default form submission and page reload.

---

### 5. What is the difference between `value` and `checked`?

* `value` is used for text-based inputs.
* `checked` is used for checkboxes and radio buttons.

---

# Intermediate

### Difference between Controlled and Uncontrolled Components?

Controlled uses React state.

Uncontrolled uses the DOM.

---

### Why is React called the Single Source of Truth?

Because the input value always comes from React state.

---

### Why use one state object?

To simplify managing multiple related fields.

---

### Why use Computed Property Names?

To dynamically update the correct field using its `name`.

---

### How do you validate forms?

Check user input before submission and show errors if invalid.

---

### How do you reset a form?

Reset the state to its initial values.

---

### Why avoid mutating state?

React detects changes through new state objects. Mutating state can prevent proper re-rendering.

---

### How do you handle checkboxes?

Use the `checked` prop and `e.target.checked`.

---

### How do you handle dropdowns?

Use the `value` prop and `onChange`.

---

### What are common mistakes?

* Forgetting `value`
* Forgetting `onChange`
* Forgetting `preventDefault()`
* Mutating state
* Skipping validation

---

# Pro-Level Concepts

## Custom Hook for Forms

```jsx
function useForm(initialValues) {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return { form, handleChange, setForm };
}
```

---

## Client-side vs Server-side Validation

| Client-side     | Server-side           |
| --------------- | --------------------- |
| Runs in browser | Runs on server        |
| Fast feedback   | More secure           |
| Better UX       | Required for security |

Both should be used in production applications.

---

## Form Libraries

For large applications, developers often use:

* **React Hook Form** (Most popular for performance)
* **Formik**
* **Final Form**

These libraries simplify validation, reduce boilerplate, and integrate well with schema validators like **Yup** or **Zod**.

---

# Quick Revision (1 Minute)

* Forms collect user input.
* Controlled Components use React state.
* `value` controls text inputs.
* `checked` controls checkboxes/radios.
* `onChange` updates state.
* `onSubmit` handles form submission.
* `preventDefault()` stops page reload.
* Store related fields in one state object.
* Use computed property names (`[e.target.name]`) for dynamic updates.
* Validate before submitting.
* Never mutate state directly.
* Reset the form after successful submission.
* React Hook Form is the most common library for managing complex forms in production.

---

# Key Takeaways

* **Controlled Components** are the standard approach for React forms.
* **React State** should be the single source of truth.
* A **generic `handleChange`** with computed property names is the preferred pattern for multiple inputs.
* **Validation** should occur before form submission.
* Understanding forms is essential for building authentication, search, profile, and CRUD features in real-world React applications.
