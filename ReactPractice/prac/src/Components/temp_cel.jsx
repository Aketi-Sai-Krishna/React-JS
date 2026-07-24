const TempInput = ({temperature,setTemperature}) => {
    //User types the temperature.
    return (
        <>
        <h1>Temperature</h1>
        <input
         type = "number"
         value = {temperature}
         onChange={(e) => setTemperature(e.target.value)}
        />
        </>
    );
}

export default TempInput;