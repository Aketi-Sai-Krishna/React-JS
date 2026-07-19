
import React from 'react';
import App from '../App';

function StudentCard({people, deleteClick, deleteLabel}){

   return( 
        <>
            <h1> Student Card </h1>
             {people.map(({name,age,clg,city,bgColor,showCollege}, index) => (
                <div key={index} style={{backgroundColor : bgColor ? bgColor : "lightblue", padding: '10px' , margin: '10px'}}>
                    <h3>{name}</h3>
                    <h3>{age}</h3>
                    <h3>{showCollege ? clg : true }</h3>
                    <h3>{city}</h3>
                    <br/>
                    <br/>
                    <button onClick={deleteClick} style={{padding: "8px 16px", marginTop: "10px"}}>
                        {deleteLabel}
                    </button>
                </div>
             ))}
        </>
    )
}

export default StudentCard;