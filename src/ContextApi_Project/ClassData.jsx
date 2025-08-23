import StudentData from "../StudentData"

function ClassData() {
    return(
        <div style={{border:"2px solid black",backgroundColor:"olive",  borderRadius:"8px", padding:"12px", margin:"12px"}}>
            <h2 style={{color:"white"}}>Class Data</h2>

            <StudentData />
        </div>
    )
}

export default ClassData