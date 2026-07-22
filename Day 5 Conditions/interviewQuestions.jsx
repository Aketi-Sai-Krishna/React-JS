---

# Interview Questions

### Beginner (5)

1. What is conditional rendering in React?
2. Why do we use conditional rendering?
3. What are the four common ways to conditionally render UI?
4. When should you use `&&`?
5. What is the ternary operator?

---

### Intermediate (10)

1. Difference between `if` and ternary?
2. When is Early Return preferred?
3. Why shouldn't you overuse nested ternaries?
4. Why can `count && <Component />` render `0`?
5. When should you use `null` in React?
6. How do you render a loading spinner conditionally?
7. How do you render an error message?
8. What is the difference between hiding a component and unmounting it?
9. Can you use `if` directly inside JSX? Why or why not?
10. How do you conditionally render lists?

---

### Advanced / Pro (5)

1. How does conditional rendering affect component mounting and unmounting?
2. How does React reconcile UI changes when conditions change?
3. What performance considerations exist with conditional rendering?
4. How can conditional rendering be combined with lazy loading and `React.Suspense`?
5. What are best practices for maintaining readability in components with many conditions?

---

# Practice Problems

### Beginner (5)

1. Show `"Welcome"` if `isLoggedIn` is `true`, otherwise `"Please Login"`.
2. Show a **Logout** button only when `isLoggedIn` is `true`.
3. Display `"Pass"` if `marks >= 35`, otherwise `"Fail"`.
4. Show `"Adult"` if `age >= 18`, otherwise `"Minor"`.
5. Show `"Available"` only when `inStock` is `true`.

---

### Intermediate (10)

1. Show a loading message while `loading` is `true`, otherwise show a list of users.
2. Show an error message only if `error` exists.
3. Display `"Admin Panel"` only for admin users.
4. Use an early return to display `"No Products Found"` when the product list is empty.
5. Show a profile picture if available, otherwise display a default avatar.
6. Display `"Online"` or `"Offline"` based on user status.
7. Render a discount badge only when `discount > 0`.
8. Show `"Premium Content"` only for premium users.
9. Display a shopping cart message when the cart is empty; otherwise render the cart items.
10. Conditionally render different navigation menus for logged-in and guest users.

---

### Pro (5)

1. Build a login/logout page using conditional rendering.
2. Create a dashboard with **loading**, **error**, **empty**, and **success** states using early returns.
3. Implement role-based rendering for **Admin**, **Manager**, **Employee**, and **Guest**.
4. Build a notification panel that conditionally displays unread messages, loading state, or a "No Notifications" message.
5. Create a reusable `<ProtectedRoute>` component that renders protected content only for authenticated users.

---

## 📌 Day 8 Summary

* **Conditional Rendering** decides what UI React displays based on conditions.
* Use **`if`** for complex logic or completely different UIs.
* Use **`&&`** to show something only when a condition is true.
* Use **`? :` (ternary)** when choosing between two outputs.
* Use **Early Return** for loading, error, authentication, or empty-state screens to keep components clean.
* Avoid deeply nested ternaries, and remember that `0 && <Component />` renders `0`, so prefer explicit conditions like `count > 0`.
