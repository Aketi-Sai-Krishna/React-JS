import react from 'react';

function Lists(){

    // 1. Fruits
    const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    // 2. Numbers
    const numbers = [5, 12, 8, 20, 3];

    // 3. Students
    const students = [
    { id: 1, name: "Sai" },
    { id: 2, name: "Krishna" },
    { id: 3, name: "Anjali" },
    { id: 4, name: "Rahul" }
    ];

    // 4. Products
    const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
    ];

    // 5. Users
    const users = [
    { id: 1, name: "Arjun", age: 25 },
    { id: 2, name: "Meera", age: 30 },
    { id: 3, name: "Ravi", age: 22 }
    ];

    //intermediate

    // 1. Active Users
    const userList = [
    { id: 1, name: "Arjun", active: true },
    { id: 2, name: "Meera", active: false },
    { id: 3, name: "Ravi", active: true }
    ];

    const activeUser =  userList.filter(user => user.active);

    // 2. Tasks
    const tasks = [
    { id: 1, task: "Learn React", completed: true },
    { id: 2, task: "Do Homework", completed: false },
    { id: 3, task: "Buy Groceries", completed: true }
    ];

    const taskers = tasks.filter( user => user.completed)
                    .map((item) => item.task)
    console.log(taskers);

    // 3. Numbers for Sorting
    const nums = [45, 12, 78, 23, 56];

    const sorting = nums.toSorted((a,b) => a-b);
    console.log(sorting);

    // 4. Employees
    const employees = [
    { id: 1, name: "Arjun", salary: 50000 },
    { id: 2, name: "Meera", salary: 70000 },
    { id: 3, name: "Ravi", salary: 45000 }
    ];

    const sor = employees.toSorted((a,b) => (a.salary) - (b.salary))
    console.log(sor);


    // 5. Products with Price
    const productList = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 15000 },
    { id: 3, name: "Tablet", price: 12000 },
    { id: 4, name: "Headphones", price: 800 }
    ];

    const pro = productList.toSorted((a, b)=>(b.price)-(a.price));
    console.log(pro);

    // 6. Filter Products > ₹1000
    // (same productList above)

    const filter = productList.filter(item => item.price > 1000);
    console.log(filter);

    // 7. Users with Serial Numbers
    // (same userList above)

    const rend = userList.map(( item) => 
        `${item.id} - ${item.name}`
    )
    console.log(rend);

    // 8. Table Data
    const tableData = [
    { id: 1, name: "Sai", age: 25, city: "Hyderabad" },
    { id: 2, name: "Krishna", age: 28, city: "Delhi" },
    { id: 3, name: "Anjali", age: 22, city: "Mumbai" }
    ];


    // 9. Available Products
    const availableProducts = [
    { id: 1, name: "Laptop", available: true },
    { id: 2, name: "Phone", available: false },
    { id: 3, name: "Tablet", available: true }
    ];

    // 10. Delete Button List
    const deleteList = [
    { id: 1, item: "Milk" },
    { id: 2, item: "Bread" },
    { id: 3, item: "Eggs" }
    ];


    return(
        <>

        {/* Begineer */}

        <h1>Lists</h1>
        <ul>{fruits.map((item, index) => 
            <li key={fruits.id}>{item}</li>
            ) }
        </ul>

        <ul>{numbers.map((item, index) => 
            <li key={numbers.id}>{item}</li>
            ) }
        </ul>

        <ul>{students.map((item, index) => 
            <li key={students.id}>{item.id} - {item.name}</li>
            ) }
        </ul>

         <ul>{products.map((item, index) => 
            <li key={products.id}>{item.name}</li>
            ) }
        </ul>

         <ul>{users.map((item, index) => 
            <li key={users.id}>{item.name} - {item.age}</li>
            ) }
        </ul>

        {/* intermediate */}

        <ul>{activeUser.map((item, index) => 
            <li key={activeUser.id}>{item.name}</li>
            )}
        </ul>

        <li>{taskers}</li>
        <li>{sorting}</li>

 {/* const tableData = [
    { id: 1, name: "Sai", age: 25, city: "Hyderabad" },
    { id: 2, name: "Krishna", age: 28, city: "Delhi" },
    { id: 3, name: "Anjali", age: 22, city: "Mumbai" }
    ]; */}

    <div>
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>age</td>
                <td>city</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Sai</td>
                <td>15</td>
                <td>Hyderabad</td>
            </tr>
        </tbody>
    </table>
    </div>

    

        
       



        


        </>
    );
}

export default Lists;