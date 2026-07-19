import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Profile from './Components/profile';
import StudentCard from './Components/StudentCard';
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


  return (
    <div className="App">

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
