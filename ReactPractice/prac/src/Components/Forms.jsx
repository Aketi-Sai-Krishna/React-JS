import React, { useState } from "react";

const Forms = () => {

    const [submit, setSubmit] = useState(false);

    const[formdetails, setFormDetails] = useState({
        name : "",
        email: "",
        password : "",
        consfirmPassword : "",
        gender: "",
        age:"",
        address: ""
    })

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormDetails({
        ...formdetails,
        [name] : value
    })}

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        // if(!formdetails.name){
        //     setSubmit(false);
        //     alert("Enter the name")
        // }
        
    }

    return(
     <div>
          <h1> Forms </h1>
          <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" value={formdetails.name} onChange={handleChange}/>
                      {submit && !formdetails.name && <p style={{color:'red'}}>Enter Name</p>}
                <br/>
                Email : <input type="email" name="email" value={formdetails.email} onChange={handleChange}/><br/>
                <br/>
                Password : <input type="text" name="password" value={formdetails.password} onChange={handleChange}/><br/>
                <br/>
                Confirm Password: <input type="text" name="confirmPassword" value={formdetails.consfirmPassword} onChange={handleChange}/><br/>
                <br/>
                Gender : 
                <label> <input type="radio" value="male" checked={formdetails.gender === "male"}  name="gender" onChange={handleChange}/>  Male </label>
                <label> <input type="radio" value="female" checked={formdetails.gender === "female"}  name="gender" onChange={handleChange}/> Female</label>
                <br/>
                <br/>
                Age : <input type="number" value={formdetails.age} name="age" onChange={handleChange}/><br/>
                <br/>
                Address: <textarea value={formdetails.address}  name="address" onChange={handleChange}></textarea><br/>
                <br/>
                <button type="submit"> Submit </button>
           </form>
     </div>
    
    )

}

export default Forms;