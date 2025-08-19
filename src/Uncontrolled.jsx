import { useRef } from "react";

function Uncontrolled() {

    const handleForm = (event) => {
        event.preventDefault();
        const user = document.querySelector("#user").value;
        const password = document.querySelector("#password").value;
        console.log(user);
        console.log(password);       
    }

    const inputRef = useRef();
    const passRef = useRef();

    const handleFormUserRef = (event) => {
        event.preventDefault();
        const user = inputRef.current.value;
        const password = passRef.current.value;
        console.log("hnadleFormUserRef : ", user, password);
    }
    return(
        <div style={{border:"2px solid orange", borderRadius:"6px", padding:"10px"}}>
            <h2>Uncontrolled Component</h2>
            <form action="" method="post" onSubmit={handleForm}>
                <input style={{padding:"10px", border:"2px solid blue", borderRadius:"6px" }}  type="text" id="user" placeholder="Enter user name" />
                <br />
                <input  style={{padding:"10px", border:"2px solid blue", borderRadius:"6px", marginTop:"10px" }} type="password" id="password"  placeholder="Enter user name"/>
                <br />
                <button>Submit</button>
            </form>
            <hr />
            <h2>Uncontrolled Component with useRef</h2>
            <form action="" method="post" onSubmit={handleFormUserRef}>
                <input style={{padding:"10px", border:"2px solid blue", borderRadius:"6px" }} ref={inputRef}  type="text" id="userRef" placeholder="Enter user name" />
                <br />
                <input  style={{padding:"10px", border:"2px solid blue", borderRadius:"6px", marginTop:"10px"}} ref={passRef} type="password" id="passwordRef"  placeholder="Enter user name"/>
                <br />
                <button>Submit useRef</button>
            </form>
        </div>
    )
}

export default Uncontrolled;