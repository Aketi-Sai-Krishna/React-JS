const Result = ({temperature}) => {
    //Shows the converted temperature.
    const fahrenheit = temperature === "" ? "" : (temperature*9)/5 + 32;
    return (
        <>
        <h1>Temperature Result</h1>
        <h2> Farenheit : {fahrenheit} </h2>

        </>
    );
}

export default Result;