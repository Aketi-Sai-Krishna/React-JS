import App from "../App";

function Header({logo,CompanyName, UserName}) {
    // console.log(props)
    return (
        <div className="navbar">
            {/* <h1>{title ? title : "Welcome To React"}</h1> */}

            {/* <h1>{props.children}</h1> */}
            
            {/* <h3>{props.version}</h3>
            <h3>{props.name}</h3>s
            <h3>{props.designation}</h3>
            <h3>{props.experience}</h3> */}
            <div>
                {/* {props.people.map((nam, index) => (<li key = {index}>{nam.name}</li>))} */}
                {/* {props.people.map((nam, index) => (<li key = {index}>{nam.clg}</li>))} */}
                {/* {props.people.map((nam, index) => (<li key = {index}>{nam.name} - {nam.clg}</li>))} */}
            </div>
            {/* <button onClick={props.onButtonClick} 
                    style={{ padding: "8px 16px", marginTop: "10px" }}>
                        {props.buttonLabel}</button> */}

            <div className="logo">{logo}</div>
            <div>
                <ul>
                    <li>{CompanyName}</li>
                     <li>{UserName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;