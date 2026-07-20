import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Profile from './Components/profile';
import StudentCard from './Components/StudentCard';
import { useState } from 'react';
function App() {

  const people = [
  {
    name: "Sai",
    age: 25,
    clg: "JNTU",
    city: "Hyderabad",
    // bgColor: "yellow" ,
    showCollege : true
  },
  {
    name: "Anita",
    age: 22,
    clg: "Osmania University",
    city: "Hyderabad",
    bgColor: "green" ,
      showCollege : false
  },
  {
    name: "Rahul",
    age: 27,
    clg: "IIT Delhi",
    city: "New Delhi",
    // bgColor: "blue" ,
      showCollege : false
  },
  {
    name: "Priya",
    age: 24,
    clg: "BITS Pilani",
    city: "Pilani",
    bgColor: "pink" ,
      showCollege : true
  },
  {
    name: "Arjun",
    age: 26,
    clg: "NIT Warangal",
    city: "Warangal",
    bgColor: "orange" ,
      showCollege : false
  }
];
}

const profiles = {
  rahul: {
    name: "Rahul",
    age: 27,
    clg: "IIT Delhi",
    city: "New Delhi",
    showCollege: false
  },
  priya: {
    name: "Priya",
    age: 24,
    clg: "BITS Pilani",
    city: "Pilani",
    bgColor: "pink",
    showCollege: true
  },
  arjun: {
    name: "Arjun",
    age: 26,
    clg: "NIT Warangal",
    city: "Warangal",
    bgColor: "orange",
    showCollege: false
  }
};




    const [count, setCount] = useState(0);
       const increment= () => {setCount(count+1)};
       const decrement= () => {setCount(count-1)};
       const reset = () => {setCount(0)}
    
    const [like, setLike] = useState(0);
      const liker = () => {setLike(like+1)};

    const [theme,setTheme] = useState("Light Mode")
      const changeTheme = () => {
        setTheme( theme === "Light Mode" ? "Dark Mode" : "Light Mode")
      }
    
      const [details, setDetails ]= useState("")

      const detail = () => {setDetails(details === "" ? "Welcome to React" : "")}

      const [input, setInput ] = useState("");
      const [name , setName] = useState("");
      const typed = () => {setName(input)}


        const [input1, setInput1 ] = useState("");
      const [name1, setName1] = useState("");

      const [submit, setSubmit] = useState();

      

      const submitBtnView = () => {setSubmit(submit === "Show" ? "Hide" : "Show")}

    
      
      
       


  return (
    <div className="App">
      

            <button style={{ padding: "8px 16px", marginTop: "10px" }} onClick={increment}> +1 </button>
            {count}
            <button style={{ padding: "8px 16px", marginTop: "10px" }} onClick={decrement}> -1 </button>
            
            <button style={{ padding: "8px 16px", marginTop: "10px" }} onClick={reset}> Reset </button>
            <br/>
            <br/>

            <button style={{ padding: "8px 16px", marginTop: "10px" }} onClick={liker}> Like </button> {like}

            <br/>
            <br/>

            <button style={{ padding: "8px 16px", marginTop: "10px" }} onClick={changeTheme}> Themes </button> {theme}

            <br/>
            <button style ={{ padding : " 8px 16px" , marginTop: "10px"}} onClick={detail} > Details</button> {details}
            <br/>
            <br/>
            <input type="text" 
             value = {input}
             onChange = {(e) => setInput(e.target.value)}
            /> 
            <button type="submit" onClick = {typed} >Submit</button>
               <br/>
               <h1>hello {name}</h1>
               <p> Characters : {name.length}</p>
            <br/>
            <br/>
            <input type="password" 
             value = {input1}
             onChange = {(e) => setInput(e.target.value)}
            /> 
            <button type="submit" style ={{ padding : " 8px 16px" , marginTop: "10px"}} onClick={submitBtnView}>Submit</button>
            


      <Header 
        // title ='React Props Practice' 
      //  sub = 'Learning React Props'
      //  version = "Version: 19"
      //  name = "Sai Krishna"
      //  designation = "Frontend Developer"
      //  experience = "4 Years Experience"
      //  people = {people}
      logo = 'logo'
      CompanyName= 'My Company'
      UserName= 'Sai'
      buttonLabel = "Click Me"
      onButtonClick = {() => alert("Hello Sai")}
     > 
     </Header>

     
     <StudentCard
       people= {people}
       deleteLabel = "Delete"
       deleteClick = {() => alert("Card will be deleted")}
     />
 


     {/* <Header
       name = {people[3].name}
       age =  {people[3].age}
       clg =  {people[3].clg}
       city =  {people[3].city}
     /> */}

     <Profile
       name = {people[3].name}
       age =  {people[3].age}
       clg =  {people[3].clg}
       city =  {people[3].city}
     />

     <Footer><button>Save</button> 'Copy right @2026 Company'</Footer>

    </div>
  );
}

export default App;
