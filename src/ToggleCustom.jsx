import useToggle from "./CustomHooks/useToggle";

function ToggleCustom(){
    const [value, toggleVal] = useToggle(true);
    //console.log("val --- ", value);

    const [data, setData] = useToggle(true);
    return(
        <div style={{border:"2px solid brown", padding:"12px", marginTop:"12px"}}>
            <h2>Toggle Custom Components</h2>
            <button onClick={toggleVal} style={{padding:"10px", backgroundColor:"blue", borderRadius:"8px", margin:"12px", color:"white"}}>Toggle</button>
            <button onClick={() => toggleVal(true)} style={{padding:"10px", backgroundColor:"blue", borderRadius:"8px", margin:"12px", color:"white"}}>Show</button>
            <button onClick={() => toggleVal(false)} style={{padding:"10px", backgroundColor:"blue", borderRadius:"8px", margin:"12px", color:"white"}}>Hide</button>

            {
                value ? <h2 style={{border:"2px solid orange", borderRadius:"8px", padding:"12px"}}>Playing with Custom Hooks 1st</h2> : null
            }
            <hr />

            <button onClick={setData} style={{padding:"10px", backgroundColor:"purple", borderRadius:"8px", margin:"12px", color:"white"}}>Toggle</button>
            <button onClick={() => setData(true)} style={{padding:"10px", backgroundColor:"purple", borderRadius:"8px", margin:"12px", color:"white"}}>Show</button>
            <button onClick={() => setData(false)} style={{padding:"10px", backgroundColor:"purple", borderRadius:"8px", margin:"12px", color:"white"}}>Hide</button>

            {
                data ? <h2 style={{border:"2px solid blue", borderRadius:"8px", padding:"12px"}}>Playing with Custom Hooks 2nd</h2> : null
            }
        </div>
    )
    
}

export default ToggleCustom;