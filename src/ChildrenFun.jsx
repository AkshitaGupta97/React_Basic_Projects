
function ChildrenFun({displayName, name, getUser}){
    return(
        <div style={{padding:"12px", border:"2px solid crimson", marginTop:"12px"}}>
            <button onClick={() => displayName(name)}>Display Name via Childern Component</button>
            <br />
            <button style={{marginTop:"12px"}} onClick={() => getUser(name)}>Get User Identity</button>

        </div>
    )
}

export default ChildrenFun;