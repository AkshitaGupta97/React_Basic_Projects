import { useState } from "react"
import CollegeData from "./College"
import { SubjectContext } from "./COntextData"

function CollegeContext() {
    const [subject, setSubject] = useState("")
    return(
        <div style={{border:"2px solid black", borderRadius:"8px",backgroundColor:"gray", padding:"12px", margin:"12px"}}>
            <h2 style={{color:"orange", textDecoration:"underline", textAlign:"center"}}>Context Api</h2>
            
            <SubjectContext.Provider value={subject}>
                <select defaultValue={subject} onChange={(event) => setSubject(event.target.value)} style={{padding:"10px", border:"2px solid crimson", borderRadius:"8px"}}>
                    <option style={{color:"yellow", padding:"8px", border:"2px solid gray"}} value="">Select Subject</option>
                    <option style={{color:"white", padding:"8px"}} value="Java">Java</option>
                    <option style={{color:"white", padding:"8px"}} value="C++">C++</option>
                    <option style={{color:"white", padding:"8px"}} value="HTML">HTML</option>
                    <option style={{color:"white", padding:"8px"}} value="CSS">CSS</option>
                    <option style={{color:"white", padding:"8px"}} value="Node JS">Node JS</option>
                    <option style={{color:"white", padding:"8px"}} value="Mongo DB">Mongo DB</option>
                    <option style={{color:"white", padding:"8px"}} value="Express">Express</option>
                </select>
                
                <button onClick={() => setSubject('')} style={{marginLeft:"16px", backgroundColor:"black", color:"white", padding:"10px", borderRadius:"10px"}}>Clear Subject</button>

                <CollegeData />
            </SubjectContext.Provider>

        </div>
    )
}

export default CollegeContext