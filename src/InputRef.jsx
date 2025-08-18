import { useRef } from "react"

function UserRef(){
    const inputRef = useRef(null);

    const inputHandler =() => {
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color="crimson";
        
    }

    return(
        <div style={{border:"2px solid blue", borderRadius:"6px", padding:"20px"}}>
            <h1>User Ref</h1>
            <input type="text" placeholder="Enter user name" />
            <button onClick={inputHandler} style={{border:"2px solid orange", marginLeft:"20px"}}>User name</button>
        </div>
    )
}

export default UserRef