import CollegeData from "./College"

function CollegeContext() {
    return(
        <div style={{border:"2px solid black", borderRadius:"8px",backgroundColor:"gray", padding:"12px", margin:"12px"}}>
            <h2 style={{color:"orange", textDecoration:"underline", textAlign:"center"}}>Context Api</h2>
            
            <CollegeData />

        </div>
    )
}

export default CollegeContext