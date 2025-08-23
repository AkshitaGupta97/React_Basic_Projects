import useToggle from "./CustomHooks/useToggle";

function ToggleCustom(){
    const [value, toggleVal] = useToggle(true);

    console.log("val --- ", value);
    
    return(
        <div style={{border:"2px solid brown", padding:"12px", marginTop:"12px"}}>
            <h2>Toggle Custom Components</h2>
            <button onClick={toggleVal} style={{padding:"10px", backgroundColor:"blue", borderRadius:"8px", margin:"12px", color:"white"}}>Toggle</button>
            <button style={{padding:"10px", backgroundColor:"blue", borderRadius:"8px", margin:"12px", color:"white"}}>Show</button>
            <button style={{padding:"10px", backgroundColor:"blue", borderRadius:"8px", margin:"12px", color:"white"}}>Hide</button>

            {
                value ? <h2 style={{border:"2px solid orange", borderRadius:"8px", padding:"12px"}}>Playing with Custom Hooks</h2> : null
            }
        </div>
    )
    
}

export default ToggleCustom;