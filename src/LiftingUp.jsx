
function LiftUp({setUser}){
    return(
        <div style={{border:"2px solid brown", padding:"10px", marginTop:"12px", borderBottom:"none"}}>
            <h2 style={{color:"green"}}>Lifting State Up 1...</h2>
            <input style={{padding:'10px'}} type="text" placeholder="Enter user" onChange={(event)=> setUser(event.target.value)}/>
            <hr />
        </div>
    )
}
export default LiftUp