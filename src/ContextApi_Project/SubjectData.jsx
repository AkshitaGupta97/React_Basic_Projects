import { useContext } from "react"
import { SubjectContext } from "./COntextData"

function SubjectData() {
    const subject = useContext(SubjectContext);
    return(
        <div style={{border:"2px solid black",backgroundColor:"peachpuff",  borderRadius:"8px", padding:"12px", margin:"12px"}}>
            <h2 style={{color:"blue"}}>Subject Data :-  <span style={{color:"black"}}>{subject}</span></h2>
        </div>
    )
}

export default SubjectData