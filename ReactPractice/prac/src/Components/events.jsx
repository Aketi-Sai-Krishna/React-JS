
import React from 'react';
import App from '../App';
import { useState } from 'react';


function Events({people, deleteClick, deleteLabel}){

  const [count, setCount] = useState(0);

  const counter = () => {setCount(count+1)}

  const [show, setShow]= useState("");
  const showit = () => {setShow( show === "" ? "Hello Sai!" : "")}

  const [text, setText] = useState();

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [send, setSend] = useState("login");

  const loginBtn = (e ) => { e.preventDefault(); setSend(send === "login" ? "logout" : "login")}

  const[liveName, setLiveName] = useState("");
  const [lastKey, setLastKey] = useState("");
  const handleKey = (e) => {
      setLastKey(e.key)
  }

  const[search, setSearch] = useState('');
  const [fkey, setFkey] = useState('');
    
  const finalKey =(e)=>{
        if(e.key === 'Enter'){
            setFkey(search);
        }
  }

    const [bgColor, setBgColor] = useState("gray");

    const [coords, setCoords]= useState({ x: 0, y: 0});

    const handleMouseMove = (e) => {setCoords({ x: e.clientX , y:e.clientY})}

    const [prob, setProb] = useState(0)
    const showen = () => {setProb(prob+1)}


   return( 
        <>  
        <div style={{backgroundColor : "lightblue"}}>
            <h1> Events </h1>
            <div style={{backgroundColor : "yellow"}}>
                <h2> Counter App</h2>
                <button onClick={counter}> + </button> <br/> {count}
                <br/>
            </div>
            <br/>
            <div style={{backgroundColor : "red"}}>
                <h2>Greeting Button</h2>
                 <button onClick={showit} > Show Message</button> {show}
                 <br/>
            </div>
            <br/>
            <div style={{backgroundColor : "yellow"}}>
                <input value={text} onChange={(e) => setText(e.target.value) } />
                <h3> Hello {text} </h3>
            </div>
            <br/>
            <div style={{backgroundColor : "red"}}>
                <h2>Form Login</h2>
                <form >
                     User Name : <input placeholder='Name' type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                     Email : <input placeholder='email' type="password" value={pass} onChange={(e)=> setPass(e.target.value)}/>
                     <button type="submit" onDoubleClick={loginBtn} > { send} </button>
                </form>
                <h3>{send === 'logout' ? "Click here to logout" : ""}</h3>
                <h4> Success {}</h4>
            </div>
            <div style={{backgroundColor : "yellow"}}>
                <h2>Keyboard</h2>
                <input value={liveName} onKeyDown={handleKey} onChange={(e) => setLiveName(e.target.value)}/>
                <h4>You Pressed : {lastKey}</h4>
                <h4>Characters : {liveName.length} </h4>
            </div>
            <div>
                <h2>Search Box</h2>
                <input value={search} onKeyUp={finalKey} onChange={(e) => setSearch(e.target.value)}/>
                <h3>Searching for {fkey}</h3>
            </div>
            <div style={{   width: "200px",
                            height: "100px",
                            backgroundColor: bgColor,
                            textAlign: "center",
                            lineHeight: "100px",
                            fontWeight: "bold",
                            color: "white",
                            cursor: "pointer"
                        }}
                        onMouseEnter={() =>setBgColor('red')}
                        onMouseLeave={() => setBgColor("yellow")}
                        onMouseMove={handleMouseMove}
                        
            >
                HOVER ME
            </div>
            <div>
                <h2> MOUSE POSITION Tracker</h2>
                 X:{coords.x}, Y : {coords.y}
            </div>
            <div>
                <button onDoubleClick={showen}>Click</button> {prob}
            </div>
               
        </div>

        </>
    )
}

export default Events;