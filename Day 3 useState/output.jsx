## 1. Counter

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
```

---

# 2. Counter with Increment, Decrement & Reset

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => setCount(count - 1)}>-</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
```

---

# 3. Counter Step (+5 / -5)

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 5)}>+5</button>

      <button onClick={() => setCount(count - 5)}>-5</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
```

---

# 4. Like Button

```jsx
import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>❤️ {likes} Likes</h2>

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>
    </div>
  );
}

export default App;
```

---

# 5. Toggle Button

```jsx
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setDark(!dark)}>
        Toggle
      </button>
    </div>
  );
}

export default App;
```

---

# 6. Show / Hide Text

```jsx
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <h2>Welcome to React!</h2>}

    </div>
  );
}

export default App;
```

---

# 7. Name Display

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>

    </div>
  );
}

export default App;
```

---

# 8. Character Counter

```jsx
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Characters : {text.length}</h3>

    </div>
  );
}

export default App;
```

---

# 9. Password Toggle

```jsx
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>

      <input
        type={show ? "text" : "password"}
        placeholder="Password"
      />

      <br />

      <label>
        <input
          type="checkbox"
          checked={show}
          onChange={() => setShow(!show)}
        />

        Show Password

      </label>

    </div>
  );
}

export default App;
```

---

# 10. Age Calculator

```jsx
import { useState } from "react";

function App() {
  const [age, setAge] = useState(18);

  return (
    <div>

      <h1>Age : {age}</h1>

      <button onClick={() => setAge(age + 1)}>
        Increase
      </button>

      <button onClick={() => setAge(age - 1)}>
        Decrease
      </button>

    </div>
  );
}

export default App;
```

---

# 11. Fruit List

```jsx
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);

  return (
    <div>

      <button
        onClick={() =>
          setFruits([...fruits, "Mango"])
        }
      >
        Add Mango
      </button>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
```

---

# 12. Todo List

```jsx
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo.trim()) return;

    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div>

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
```

---

# 13. Delete Todo

```jsx
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo.trim()) return;

    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>

        {todos.map((item, index) => (
          <li key={index}>

            {item}

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;
```

---

# 14. Mark Todo Completed

```jsx
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo.trim()) return;

    setTodos([
      ...todos,
      {
        text: todo,
        completed: false,
      },
    ]);

    setTodo("");
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((item, i) =>
        i === index
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  };

  return (
    <div>

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>

        {todos.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: item.completed
                ? "line-through"
                : "none",
              cursor: "pointer",
            }}
          >
            {item.text}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;
```

---

# 15. Shopping Cart

```jsx
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>

      <button onClick={() => addItem("Laptop")}>
        Add Laptop
      </button>

      <button onClick={() => addItem("Phone")}>
        Add Phone
      </button>

      <button onClick={() => addItem("Mouse")}>
        Add Mouse
      </button>

      <ul>

        {cart.map((item, index) => (
          <li key={index}>

            {item}

            <button onClick={() => removeItem(index)}>
              Remove
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;
```

---

# 16. Dynamic Student List

```jsx
import { useState } from "react";

function App() {
  const [student, setStudent] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (!student.trim()) return;

    setStudents([...students, student]);
    setStudent("");
  };

  return (
    <div>

      <input
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      />

      <button onClick={addStudent}>
        Add
      </button>

      <ul>
        {students.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
```

---

# 17. Favorite Movies

```jsx
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const addMovie = () => {
    if (!movie.trim()) return;

    setMovies([...movies, movie]);
    setMovie("");
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div>

      <input
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />

      <button onClick={addMovie}>
        Add Movie
      </button>

      <ul>

        {movies.map((item, index) => (
          <li key={index}>

            {item}

            <button onClick={() => deleteMovie(index)}>
              Delete
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;
```

---

# 18. Random Number Generator

```jsx
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);

  const generate = () => {
    const random = Math.floor(Math.random() * 100);

    setNumbers([...numbers, random]);
  };

  return (
    <div>

      <button onClick={generate}>
        Generate
      </button>

      <ul>

        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}

      </ul>

    </div>
  );
}

export default App;
```

---

# 19. Notes App

```jsx
import { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (!note.trim()) return;

    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>
        Add Note
      </button>

      <ul>

        {notes.map((item, index) => (
          <li key={index}>

            {item}

            <button onClick={() => deleteNote(index)}>
              Delete
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;
```

---

# 20. Image Gallery

```jsx
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);

  const addImage = () => {
    if (!url.trim()) return;

    setImages([...images, url]);
    setUrl("");
  };

  return (
    <div>

      <input
        placeholder="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={addImage}>
        Add Image
      </button>

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="gallery"
          width="200"
        />
      ))}

    </div>
  );
}

export default App;
```
## 21. User Profile

```jsx
import { useState } from "react";

function App() {
  const [user] = useState({
    name: "Sai",
    age: 25,
    city: "Hyderabad",
  });

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.city}</h2>
    </div>
  );
}

export default App;
```

---

# 22. Edit Profile

```jsx
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Sai",
    age: 25,
    city: "Hyderabad",
  });

  return (
    <div>
      <input
        placeholder="Name"
        value={user.name}
        onChange={(e) =>
          setUser({ ...user, name: e.target.value })
        }
      />

      <input
        placeholder="Age"
        value={user.age}
        onChange={(e) =>
          setUser({ ...user, age: e.target.value })
        }
      />

      <input
        placeholder="City"
        value={user.city}
        onChange={(e) =>
          setUser({ ...user, city: e.target.value })
        }
      />

      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <h3>{user.city}</h3>
    </div>
  );
}

export default App;
```

---

# 23. Login Form

```jsx
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <h3>{form.email}</h3>
      <h3>{form.password}</h3>
    </div>
  );
}

export default App;
```

---

# 24. Product Card

```jsx
import { useState } from "react";

function App() {
  const [product, setProduct] = useState({
    title: "Laptop",
    price: 50000,
    rating: 4.5,
  });

  return (
    <div>
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      <h2>{product.rating}</h2>

      <button
        onClick={() =>
          setProduct({
            ...product,
            price: product.price + 5000,
          })
        }
      >
        Increase Price
      </button>
    </div>
  );
}

export default App;
```

---

# 25. Employee Card

```jsx
import { useState } from "react";

function App() {
  const [employee, setEmployee] = useState({
    name: "Sai",
    salary: 40000,
    department: "IT",
  });

  return (
    <div>
      <h2>{employee.name}</h2>
      <h2>{employee.salary}</h2>
      <h2>{employee.department}</h2>

      <button
        onClick={() =>
          setEmployee({
            ...employee,
            salary: employee.salary + 5000,
          })
        }
      >
        Increase Salary
      </button>

      <button
        onClick={() =>
          setEmployee({
            ...employee,
            department: "HR",
          })
        }
      >
        Change Department
      </button>
    </div>
  );
}

export default App;
```

---

# 26. Bank Account

```jsx
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(1000);

  return (
    <div>
      <h2>Balance : ₹{balance}</h2>

      <button
        onClick={() => setBalance(balance + 500)}
      >
        Deposit
      </button>

      <button
        onClick={() => setBalance(balance - 500)}
      >
        Withdraw
      </button>
    </div>
  );
}

export default App;
```

---

# 27. Theme Object

```jsx
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState({
    background: "white",
    color: "black",
    fontSize: "20px",
  });

  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
        fontSize: theme.fontSize,
        padding: "20px",
      }}
    >
      <h2>React Theme</h2>

      <button
        onClick={() =>
          setTheme({
            background: "black",
            color: "white",
            fontSize: "20px",
          })
        }
      >
        Dark
      </button>
    </div>
  );
}

export default App;
```

---

# 28. Car Details

```jsx
import { useState } from "react";

function App() {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X5",
    price: 5000000,
  });

  return (
    <div>
      <input
        value={car.brand}
        onChange={(e) =>
          setCar({ ...car, brand: e.target.value })
        }
      />

      <input
        value={car.model}
        onChange={(e) =>
          setCar({ ...car, model: e.target.value })
        }
      />

      <input
        value={car.price}
        onChange={(e) =>
          setCar({ ...car, price: e.target.value })
        }
      />

      <h2>{car.brand}</h2>
      <h2>{car.model}</h2>
      <h2>{car.price}</h2>
    </div>
  );
}

export default App;
```

---

# 29. Game Character

```jsx
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState({
    health: 100,
    power: 50,
    coins: 10,
  });

  return (
    <div>
      <h2>Health : {player.health}</h2>
      <h2>Power : {player.power}</h2>
      <h2>Coins : {player.coins}</h2>

      <button
        onClick={() =>
          setPlayer({
            ...player,
            health: player.health - 10,
          })
        }
      >
        Attack
      </button>

      <button
        onClick={() =>
          setPlayer({
            ...player,
            health: player.health + 10,
          })
        }
      >
        Heal
      </button>

      <button
        onClick={() =>
          setPlayer({
            ...player,
            coins: player.coins + 5,
          })
        }
      >
        Earn Coins
      </button>
    </div>
  );
}

export default App;
```

---

# 30. Resume Builder

```jsx
import { useState } from "react";

function App() {
  const [resume, setResume] = useState({
    name: "",
    skills: "",
    education: "",
  });

  return (
    <div>
      <input
        placeholder="Name"
        onChange={(e) =>
          setResume({
            ...resume,
            name: e.target.value,
          })
        }
      />

      <input
        placeholder="Skills"
        onChange={(e) =>
          setResume({
            ...resume,
            skills: e.target.value,
          })
        }
      />

      <input
        placeholder="Education"
        onChange={(e) =>
          setResume({
            ...resume,
            education: e.target.value,
          })
        }
      />

      <h2>{resume.name}</h2>
      <h2>{resume.skills}</h2>
      <h2>{resume.education}</h2>
    </div>
  );
}

export default App;
```

---

# 31. Stopwatch

```jsx
import { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div>
      <h2>
        {minutes}:{seconds}
      </h2>

      <button onClick={() => setSeconds(seconds + 1)}>
        + Second
      </button>

      <button onClick={() => setMinutes(minutes + 1)}>
        + Minute
      </button>
    </div>
  );
}

export default App;
```

---

# 32. BMI Calculator

```jsx
import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const bmi =
    height && weight
      ? (weight / ((height / 100) ** 2)).toFixed(2)
      : 0;

  return (
    <div>
      <input
        placeholder="Height"
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        placeholder="Weight"
        onChange={(e) => setWeight(e.target.value)}
      />

      <h2>BMI : {bmi}</h2>
    </div>
  );
}

export default App;
```

---

# 33. Temperature Converter

```jsx
import { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit =
    celsius === ""
      ? ""
      : (celsius * 9) / 5 + 32;

  return (
    <div>
      <input
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />

      <h2>{fahrenheit} °F</h2>
    </div>
  );
}

export default App;
```

---

# 34. Calculator

```jsx
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setNum1(Number(e.target.value))}
      />

      <input
        onChange={(e) => setNum2(Number(e.target.value))}
      />

      <h2>Sum : {num1 + num2}</h2>
    </div>
  );
}

export default App;
```

---

# 35. Voting App

```jsx
import { useState } from "react";

function App() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  return (
    <div>
      <button onClick={() => setYes(yes + 1)}>
        Yes
      </button>

      <button onClick={() => setNo(no + 1)}>
        No
      </button>

      <h2>Yes : {yes}</h2>
      <h2>No : {no}</h2>
    </div>
  );
}

export default App;
```

---

# 36. Quiz App

```jsx
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Question {question}</h2>
      <h2>Score {score}</h2>

      <button
        onClick={() => {
          setQuestion(question + 1);
          setScore(score + 10);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
```

---

# 37. Cricket Scoreboard

```jsx
import { useState } from "react";

function App() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);

  return (
    <div>
      <h2>Runs : {runs}</h2>
      <h2>Wickets : {wickets}</h2>
      <h2>Overs : {overs}</h2>

      <button onClick={() => setRuns(runs + 4)}>
        Four
      </button>

      <button
        onClick={() => setWickets(wickets + 1)}
      >
        Wicket
      </button>

      <button onClick={() => setOvers(overs + 1)}>
        Over
      </button>
    </div>
  );
}

export default App;
```

---

# 38. E-commerce Quantity

```jsx
import { useState } from "react";

function App() {
  const [qty, setQty] = useState(1);
  const price = 500;

  return (
    <div>
      <button
        onClick={() => setQty(qty + 1)}
      >
        +
      </button>

      <button
        onClick={() => setQty(qty - 1)}
      >
        -
      </button>

      <h2>Quantity : {qty}</h2>
      <h2>Total : ₹{qty * price}</h2>
    </div>
  );
}

export default App;
```

---

# 39. Login Simulation

```jsx
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <input
        placeholder="Username"
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={() => setIsLoggedIn(true)}
      >
        Login
      </button>

      <h2>
        {isLoggedIn
          ? `Welcome ${username}`
          : "Please Login"}
      </h2>
    </div>
  );
}

export default App;
```

---

# 40. Timer

```jsx
import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);

  return (
    <div>
      <h1>{time}</h1>

      <button
        onClick={() => setTime(time + 1)}
      >
        Start
      </button>

      <button
        onClick={() => setTime(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
```
