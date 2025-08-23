import SubjectData from "./ContextApi_Project/SubjectData";

function StudentData() {
    return(
        <div style={{border:"2px solid black",backgroundColor:"skyblue",  borderRadius:"8px", padding:"12px", margin:"12px"}}>
            <h2 style={{color:"white"}}>Student Data</h2>
              
            <SubjectData />
        </div>
    )
}

export default StudentData;