import { useRef } from "react"

function UserRef(){
    const inputRef = useRef(null);
    const h1Ref = useRef(null);
    const inputHandler =() => {
        //console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color="crimson";
    }

    const toggleHandler = () => {
        if(inputRef.current.style.display!='none'){
            inputRef.current.style.display = 'none'
        }
        else {
            inputRef.current.style.display = "inline";
        }     
    }

    const h1RefHandler = () => {
        h1Ref.current.style.color = "orange";
    }

    return(
        <div style={{border:"2px solid blue", borderRadius:"6px", padding:"20px"}}>
            <h1 ref={h1Ref}>User Ref</h1>
            <button onClick={h1RefHandler} style={{display:"block", border:"2px solid green"}}>change h1 color</button>

            <button onClick={toggleHandler} style={{marginRight:"12px", border:"2px solid orange"}}>Toggle</button>
            <input type="text" ref={inputRef} placeholder="Enter user name" style={{padding:"12px", backgroundColor:"white"}} />
            <button onClick={inputHandler} style={{border:"2px solid orange", marginLeft:"20px"}}>User name</button>

        </div>
    )
}

export default UserRef