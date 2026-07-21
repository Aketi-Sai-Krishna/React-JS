Excellent. Since you've already completed JavaScript thoroughly, we'll learn **React Events** by connecting them with what you already know from JavaScript.

---

# 📅 React Day 6 – Events

**Topics:**

1. Click Events
2. Input Events
3. Submit Events
4. Keyboard Events
5. Mouse Events

> Goal: By the end of today, you'll be able to build forms, buttons, search bars, login pages, and interactive UIs.

---

# What are Events?

Imagine your app is sleeping 😴.

Whenever the user does something—

* Clicks a button
* Types in an input
* Presses Enter
* Moves the mouse

React wakes up and says:

> "Aha! The user performed an event."

That action is called an **Event**.

---

# JavaScript vs React

### JavaScript

```html
<button id="btn">Click</button>

<script>
document.getElementById("btn").addEventListener("click",function(){
    alert("Hello");
})
</script>
```

---

### React

```jsx
function App(){

function handleClick(){
    alert("Hello");
}

return(
<button onClick={handleClick}>
Click Me
</button>
)

}
```

Notice

No

```js
document.getElementById()
```

No

```js
addEventListener()
```

React handles everything for us.

---

# Event Naming

React uses **camelCase**

Instead of

```html
onclick
```

React uses

```jsx
onClick
```

Examples

```jsx
onClick

onChange

onSubmit

onKeyDown

onMouseEnter
```

---

# Event Handler

An event handler is simply a function.

```jsx
function sayHello(){
console.log("Hello")
}

<button onClick={sayHello}>
Click
</button>
```

When clicked

```
Hello
```

---

# Passing Function Correctly

Correct

```jsx
<button onClick={sayHello}>
```

Wrong

```jsx
<button onClick={sayHello()}>
```

Why?

Because

```jsx
sayHello()
```

executes immediately during rendering.

Instead

```jsx
sayHello
```

passes the function reference.

---

# 1. Click Events

Most common event.

Example

```jsx
function App(){

function handleClick(){
alert("Button Clicked")
}

return(
<button onClick={handleClick}>
Click
</button>
)

}
```

---

## Multiple Buttons

```jsx
function App(){

function increase(){
console.log("Increase")
}

function decrease(){
console.log("Decrease")
}

return(
<>
<button onClick={increase}>+</button>

<button onClick={decrease}>-</button>
</>
)

}
```

---

## Passing Arguments

Wrong

```jsx
<button onClick={showName("Sai")}>
```

Correct

```jsx
<button onClick={()=>showName("Sai")}>
```

Example

```jsx
function showName(name){
alert(name)
}

<button onClick={()=>showName("Sai")}>
Show
</button>
```

---

# Event Object

React automatically provides an event object.

```jsx
function handleClick(event){
console.log(event)
}

<button onClick={handleClick}>
Click
</button>
```

---

Useful properties

```jsx
event.target

event.type

event.currentTarget
```

---

Example

```jsx
function handleClick(e){

console.log(e.type)

}
```

Output

```
click
```

---

# 2. Input Events

React mostly uses

```jsx
onChange
```

Example

```jsx
function App(){

function handleChange(e){

console.log(e.target.value)

}

return(

<input
onChange={handleChange}
/>

)

}
```

If user types

```
Hello
```

Console

```
H

He

Hel

Hell

Hello
```

---

## Save Input

```jsx
const [name,setName]=useState("");
```

```jsx
<input
value={name}
onChange={(e)=>setName(e.target.value)}
/>
```

Display

```jsx
<h2>{name}</h2>
```

Live output.

---

# 3. Submit Events

Used for forms.

Without React

Browser refreshes.

React prevents refresh.

Example

```jsx
function handleSubmit(e){

e.preventDefault();

alert("Submitted");

}
```

```jsx
<form onSubmit={handleSubmit}>

<input/>

<button>

Submit

</button>

</form>
```

---

Why

```jsx
preventDefault()
```

Because HTML forms refresh the page.

React apps don't need refresh.

---

# 4. Keyboard Events

Useful events

```
onKeyDown

onKeyUp
```

---

Example

```jsx
function handleKey(e){

console.log(e.key)

}
```

```jsx
<input
onKeyDown={handleKey}
/>
```

Press

```
A
```

Output

```
a
```

Press

```
Enter
```

Output

```
Enter
```

---

Detect Enter

```jsx
function handleKey(e){

if(e.key==="Enter"){

alert("Searching...")

}

}
```

```jsx
<input
onKeyDown={handleKey}
/>
```

---

Useful Keys

```
Enter

Escape

Backspace

ArrowUp

ArrowDown

Tab
```

---

# 5. Mouse Events

React supports many mouse events.

Most used

```
onClick

onDoubleClick

onMouseEnter

onMouseLeave

onMouseMove
```

---

## Mouse Enter

```jsx
function App(){

function enter(){

console.log("Mouse Enter")

}

return(

<div

onMouseEnter={enter}

>

Hover Me

</div>

)

}
```

---

## Mouse Leave

```jsx
<div

onMouseLeave={()=>console.log("Bye")}

>

Hover

</div>
```

---

## Double Click

```jsx
<button

onDoubleClick={()=>alert("Double Click")}

>

Delete

</button>
```

---

## Mouse Move

```jsx
function move(e){

console.log(e.clientX)

console.log(e.clientY)

}
```

```jsx
<div
onMouseMove={move}
style={{
height:"300px"
}}
>
Move Mouse
</div>
```

Outputs mouse coordinates.

---

# Event Flow

User

↓

Clicks Button

↓

React receives event

↓

Runs Event Handler

↓

Updates State (optional)

↓

React Re-renders UI

---

# Common Mistakes

### ❌ Calling the function immediately

```jsx
<button onClick={handle()}>
```

✅ Correct

```jsx
<button onClick={handle}>
```

---

### ❌ Forgetting preventDefault

```jsx
<form onSubmit={submit}>
```

Browser refreshes.

✅

```jsx
function submit(e){

e.preventDefault()

}
```

---

### ❌ Using `onclick`

```jsx
<button onclick={handle}>
```

❌ Wrong

React uses

```jsx
onClick
```

---

# Real Project Examples

### Like Button

```jsx
<button onClick={likePost}>
Like ❤️
</button>
```

---

### Search Bar

```jsx
<input
onChange={search}
/>
```

---

### Login Form

```jsx
<form
onSubmit={login}
>
```

---

### Chat App

```jsx
<input
onKeyDown={sendMessage}
/>
```

---

### Dropdown

```jsx
onMouseEnter
```

Open menu

```jsx
onMouseLeave
```

Close menu

---

---

# Mini Projects

1. Button click counter
2. Live character counter
3. Live search input
4. Login form with `preventDefault()`
5. Press Enter to submit a message
6. Mouse position tracker
7. Hover color changer
8. Double-click to delete confirmation
9. Simple calculator keypad using buttons
10. Todo input with keyboard support

Completing these projects will give you practical experience with almost every event you'll use in day-to-day React development.
