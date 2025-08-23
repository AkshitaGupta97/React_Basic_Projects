import { useId } from "react"

function UseId() {
    return(
        <div>
            <UserForm />
        </div>
    )
}

function UserForm() {
    const name = useId();
    const password = useId();
    const terms = useId();
    const skill = useId();

    const user = useId();

    return(
        <form action="" style={{border:"2px solid blue", padding:"12px", marginTop:"12px"}}>
            <label style={{color:"orange", padding:"6px", marginTop:"8px"}} htmlFor={user+"name"}>Enter name</label>
            <input style={{color:"orange", padding:"6px", marginTop:"8px"}} id={user+"name"} type="text" placeholder="Enter name"/>
            <br />
            <label style={{color:"orange", padding:"6px", marginTop:"8px"}} htmlFor={user+"name"}>Enter name</label>
            <input style={{color:"orange", padding:"6px", marginTop:"8px"}} id={user+"name"} type="text" placeholder="Enter name"/>
            <br />
            <label style={{color:"orange", padding:"6px", marginTop:"8px"}} htmlFor={user+"password"}>Enter Password</label>
            <input style={{color:"orange", padding:"6px", marginTop:"8px"}} id={user+"password"} type="text" placeholder="Enter Password"/>
            <br />
            <label style={{color:"orange", padding:"6px", marginTop:"8px"}} htmlFor={user+"password"}>Enter password</label>
            <input style={{color:"orange", padding: "6px", marginTop:"8px"}} id={user+"password"} type="text" placeholder="Enter password"/>
            <br />
            <label style={{color:"orange", padding:"6px", marginTop:"8px"}} htmlFor={user+"skill"}>Enter Skills</label>
            <input style={{color:"orange", padding:"6px", marginTop:"8px"}} id={user+"skill"} type="checkbox" placeholder="Enter Skill"/>
            <br />
            <label style={{color:"orange", padding: "6px", marginTop:"8px"}} htmlFor={user+"terms"}>Enter terms</label>
            <input style={{color:"orange", padding:"6px", marginTop:"8px"}} id={user+"terms"} type="range" placeholder="Enter skill"/>


        </form>
    )
}

export default UseId;