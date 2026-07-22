# 📘 React Notes — Day 8: Conditional Rendering

### *(Interview Notes: Beginner → Pro)*

> **Definition:**
> Conditional Rendering is the process of displaying different UI elements based on a condition. React uses normal JavaScript conditions (`if`, `&&`, `?:`) to decide what should be rendered.

---

# 📖 Table of Contents

1. What is Conditional Rendering?
2. Why Do We Need It?
3. React Rendering Process
4. Methods of Conditional Rendering

   * if Statement
   * && Operator
   * Ternary Operator (`?:`)
   * Early Return
5. Best Practices
6. Common Mistakes
7. Real Project Examples
8. Performance Considerations
9. React Reconciliation & Conditional Rendering
10. Interview Questions & Answers
11. Cheat Sheet

---

# 1. What is Conditional Rendering?

Conditional Rendering means **rendering different UI depending on a condition.**

Just like JavaScript uses conditions to execute code, React uses conditions to render components.

```text
Condition = true
        ↓
 Render Component A

Condition = false
        ↓
 Render Component B
```

Example

```jsx
const isLoggedIn = true;

return (
  <h1>
    {isLoggedIn ? "Welcome" : "Please Login"}
  </h1>
);
```

Output

```
Welcome
```

---

# 2. Why Do We Need Conditional Rendering?

Almost every React application uses conditional rendering.

Examples

✅ Login Page

```text
Logged In?
      ↓
Dashboard

Not Logged In?
      ↓
Login Page
```

---

Loading Screen

```text
Loading...
```

---

Error Page

```text
Something went wrong.
```

---

Shopping Cart

```text
Cart Empty

OR

Show Products
```

---

Admin Panel

```text
Admin

↓

Extra Buttons
```

---

Without conditional rendering,

React would always display the same UI.

---

# 3. React Rendering Process

React checks the condition first.

```text
Condition

↓

true?

↓

Yes → Render JSX

No → Skip JSX / Render another JSX
```

React simply renders the JSX that evaluates to a valid value.

---

# 4. Methods of Conditional Rendering

React commonly uses four methods.

```text
1. if Statement

2. && Operator

3. Ternary Operator (? :)

4. Early Return
```

---

# 5. if Statement

### Definition

Use an `if` statement when you need complex logic or completely different UI.

Syntax

```jsx
if (condition) {
   return JSX;
}

return JSX;
```

Example

```jsx
function App() {

  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Dashboard</h1>;
  }

  return <h1>Login</h1>;

}
```

Flow

```text
isLoggedIn ?

↓

Yes

↓

Dashboard

↓

No

↓

Login
```

### When to Use

✔ Complex conditions

✔ Multiple if-else blocks

✔ Different layouts

✔ Multiple return statements

Example

```jsx
if (role === "Admin") {
   return <AdminPanel />;
}

if (role === "Manager") {
   return <ManagerPanel />;
}

return <UserPanel />;
```

---

## Advantages

✔ Easy to understand

✔ Good for complex UI

✔ Better readability

---

## Disadvantages

❌ Cannot be written directly inside JSX

Wrong

```jsx
return (
<div>

if(isAdmin){

<h1>Admin</h1>

}

</div>
)
```

Correct

```jsx
if(isAdmin){
   return <Admin/>
}

return <User/>
```

---

# 6. && Operator

### Definition

The `&&` operator renders something **only when the condition is true**.

Syntax

```jsx
condition && JSX
```

Example

```jsx
const isAdmin = true;

return (

<div>

<h1>Dashboard</h1>

{isAdmin && <button>Delete</button>}

</div>

);
```

Output

```text
Dashboard

Delete
```

If

```jsx
const isAdmin = false;
```

Output

```text
Dashboard
```

Nothing else is rendered.

---

### Flow

```text
Condition

↓

True?

↓

Yes

↓

Render JSX

↓

No

↓

Render Nothing
```

---

### Best Use Cases

Show

* Button
* Badge
* Icon
* Notification
* Loader

Example

```jsx
{loading && <Spinner />}
```

---

Advantages

✔ Short

✔ Clean

✔ Most commonly used

---

Disadvantages

No else condition.

Cannot write

```text
True → A

False → B
```

Use ternary instead.

---

# 7. Ternary Operator (? :)

Definition

The ternary operator chooses **one of two values**.

Syntax

```jsx
condition ? trueValue : falseValue
```

Example

```jsx
const isLoggedIn = true;

return (

<h1>

{isLoggedIn ? "Welcome" : "Login"}

</h1>

);
```

Output

```text
Welcome
```

---

Flow

```text
Condition

↓

True?

↓

Yes

↓

Render Left

↓

No

↓

Render Right
```

---

Example

```jsx
const marks = 80;

return (

<h2>

{marks >= 35 ? "Pass" : "Fail"}

</h2>

);
```

---

Advantages

✔ Very readable

✔ Perfect for two choices

✔ Used in almost every React project

---

Disadvantages

Nested ternaries become unreadable.

Bad

```jsx
condition1

?

condition2

?

A

:

B

:

condition3

?

C

:

D
```

Better

```jsx
if(condition){

...

}
```

---

# 8. Early Return

### Definition

Return immediately if a condition is met, preventing the rest of the component from rendering.

Example

```jsx
function Dashboard(){

if(!user){

return <Login/>

}

return <Home/>

}
```

Flow

```text
Component

↓

User Exists?

↓

No

↓

Return Login

↓

STOP

↓

Yes

↓

Continue Rendering
```

---

Advantages

✔ Cleaner code

✔ Less nesting

✔ Easier debugging

✔ Used in production applications

---

Common Usage

Loading

```jsx
if(loading){

return <Loading/>

}
```

---

Error

```jsx
if(error){

return <Error/>

}
```

---

Empty Data

```jsx
if(users.length===0){

return <NoUsers/>

}
```

---

# 9. Which One Should You Use?

| Situation                  | Best Choice  |
| -------------------------- | ------------ |
| Complex Logic              | if           |
| Loading Screen             | Early Return |
| Error Screen               | Early Return |
| Show One Component         | &&           |
| Show One of Two Components | Ternary      |
| Multiple Conditions        | if           |

---

# 10. Comparison Table

| Feature          | if | && | ?: | Early Return |
| ---------------- | -- | -- | -- | ------------ |
| Complex Logic    | ✅  | ❌  | ❌  | ✅            |
| Else Condition   | ✅  | ❌  | ✅  | ✅            |
| Inside JSX       | ❌  | ✅  | ✅  | ❌            |
| Most Readable    | ✅  | ✅  | ✅  | ✅            |
| Best for Loading | ❌  | ❌  | ❌  | ✅            |

---

# 11. Common Mistakes

## Mistake 1

Rendering 0 accidentally

Wrong

```jsx
const count = 0;

return (

<div>

{count && <Messages/>}

</div>

)
```

Output

```
0
```

Correct

```jsx
{count > 0 && <Messages/>}
```

---

## Mistake 2

Using && when an else condition is required.

Wrong

```jsx
{isAdmin && "Admin"}
```

Need

```text
Admin

or

User
```

Correct

```jsx
{isAdmin ? "Admin" : "User"}
```

---

## Mistake 3

Nested ternaries

```jsx
a ? b ? c : d : e
```

Avoid this.

---

## Mistake 4

Returning undefined

Wrong

```jsx
if(user){

return;

}
```

Always return JSX or `null`.

Correct

```jsx
return null;
```

---

# 12. Real Project Examples

## Authentication

```jsx
if (!user) {

return <Login />

}

return <Dashboard />
```

---

## Loading

```jsx
if (loading) {

return <Spinner />

}
```

---

## Error

```jsx
if (error) {

return <ErrorPage />

}
```

---

## Empty State

```jsx
if (products.length === 0) {

return <EmptyCart />

}
```

---

## Premium User

```jsx
{isPremium && <PremiumFeatures />}
```

---

## Admin Role

```jsx
{role === "Admin"

?

<AdminPanel />

:

<UserPanel />

}
```

---

# 13. Performance Notes (Interview)

### Does React render both sides of a ternary?

No.

```jsx
condition

?

<A/>

:

<B/>
```

Only the chosen branch is rendered.

---

### Does && render the component when false?

No.

It evaluates to

```jsx
false
```

React ignores `false`, `null`, and `undefined` in rendering.

---

### Does React destroy components?

If a rendered component disappears because the condition becomes false, React **unmounts** it and removes it from the DOM.

Example

```jsx
{show && <Profile />}
```

`show = true`

```
Profile Mounted
```

`show = false`

```
Profile Unmounted
```

---

# 14. React Reconciliation

React compares the previous UI with the new UI (Virtual DOM).

Example

Before

```jsx
<Login/>
```

After

```jsx
<Dashboard/>
```

React detects the difference and updates **only the changed part**, instead of re-rendering the entire page.

This efficient update process is called **Reconciliation**.

---

# 🎯 React Interview Cheat Sheet

| Method       | Syntax                             | Best Use Case                      |
| ------------ | ---------------------------------- | ---------------------------------- |
| `if`         | `if (condition) return <A />;`     | Complex logic, multiple branches   |
| `&&`         | `{condition && <A />}`             | Show/hide a single element         |
| `?:`         | `{condition ? <A /> : <B />}`      | Choose between two UI states       |
| Early Return | `if (loading) return <Loading />;` | Loading, error, auth, empty states |

---

# ⭐ Key Takeaways

* React uses **JavaScript conditions** to decide what to render.
* Use **`if`** for complex or multi-branch logic.
* Use **`&&`** to conditionally show a single element.
* Use **Ternary (`?:`)** when you need exactly two possible outputs.
* Use **Early Return** to handle loading, authentication, errors, and empty states cleanly.
* Avoid nested ternaries—they hurt readability.
* Remember the `0 && <Component />` pitfall; use explicit comparisons like `count > 0`.
* React updates the UI efficiently through **Virtual DOM** and **Reconciliation**, rendering only what changes.
* **Early Return** is considered the cleanest pattern in production React applications and is commonly expected in interviews.
