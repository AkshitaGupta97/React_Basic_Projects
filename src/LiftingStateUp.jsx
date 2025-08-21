
function LiftState({user}){
    return(
        <div style={{border:"2px solid brown", padding:"10px", borderTop:"none"}}>
            <h2 style={{color:"green"}}>Lifting State Up 2 Add User ...</h2>
            <h4>{user}</h4>
            
            <hr />
        </div>
    )
}
export default LiftState