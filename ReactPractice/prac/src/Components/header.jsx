import { useState } from "react";

function Header({logo,CompanyName, UserName}) {


   const [input,setInput] = useState('');
   const [showPassword , setShowPassword]= useState(false);

   const tooglePassword = () => {setShowPassword(!showPassword)}

   const [birth, setBirth] = useState(0);
   const [present, setPresent] = useState(0);

   const difference = present - birth;
   const array = ["Apple" , "Banana"];
//    const array1 = array.push("Mango")
//    console.log(array);

   const array2 = [...array, 'Mango'];
   console.log(array2);

//    const add = {...array, array.push('Mango')}


   const [name, setName] = useState();
   const [list, setList] = useState([]);

   const todo = () => {
    if(name.trim() !== ""){
        setList([...list, name]);
        setName('');
    }
   }

   const deleteTodo = (index) => {
      const newList = list.filter((_, i) => i !==index);
      setList(newList)
   }


   //objects

   


  
   
    // console.log(props)
    return (
        <div className="navbar">
            {/* <h1>{title ? title : "Welcome To React"}</h1> */}

            {/* <h1>{props.children}</h1> */}
            
            {/* <h3>{props.version}</h3>
            <h3>{props.name}</h3>s
            <h3>{props.designation}</h3>
            <h3>{props.experience}</h3> */}
            {/* <div> */}
                {/* {props.people.map((nam, index) => (<li key = {index}>{nam.name}</li>))} */}
                {/* {props.people.map((nam, index) => (<li key = {index}>{nam.clg}</li>))} */}
                {/* {props.people.map((nam, index) => (<li key = {index}>{nam.name} - {nam.clg}</li>))} */}
            {/* </div> */}
            {/* <button onClick={props.onButtonClick} 
                    style={{ padding: "8px 16px", marginTop: "10px" }}>
                        {props.buttonLabel}</button> */}

            {/* <div className="logo">{logo}</div>
            <div>
                <ul>
                    <li>{CompanyName}</li>
                     <li>{UserName}</li>
                </ul>
            </div> */}

            <h1>Password Hide/ Show </h1>
            <input type ={showPassword ? "text" : "password"} value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={tooglePassword}>{showPassword ? "Hide" : "Show"}</button>

             <br/>
              <br/>

            {/* AgeCalcultor */}
            <h1> AgeCalcultor </h1>

            Birth Year : <input type = "number" placeholder="Birth Year" value={birth} onChange={(e) => setBirth(e.target.value)}/>
            <br/>
            Present Year : <input type = "number" placeholder="Present Year" value={present} onChange={(e)=> setPresent(e.target.value)}/>

            <input value = {difference} readOnly/>


            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type='submit' onClick={todo}>Submit</button>
            <button onclick= {deleteTodo}>Delete</button>
            <div>
                <ul>
                    {
                        list.map((item, index) =>
                            <li key={index}>{item}
                            <button onClick={deleteTodo}>
                                Delete
                            </button>
                            </li>
                        )
                    }
                </ul>
            </div>







         



        </div>
    )
}

export default Header;