import { useState } from "react"

function DerivedComponents(){
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const handleUser = () => {
        setUsers([...users, user]);
       // console.log(users, user);  
    }
    const total = users.length;
    const last = users[users.length - 1];
    const unique = [...new Set(users)].length;
    
    return(
        <div style={{border:"2px solid green", padding:"12px", marginTop:"12px"}}>
            <h2 style={{color:"orange"}}>Derived Components</h2>
            <h3 style={{color:"blue"}}>Total User : {total}</h3>
            <h3 style={{color:"blue"}}>Last User: <span style={{color:'green'}}>{last}</span></h3>
            <h3 style={{color:"blue"}}>Unique user: {unique}</h3>
         <input style={{padding:"10px", marginTop:"10px"}} type="text" onChange={(evnt) => setUser(evnt.target.value)} placeholder="Add user" />
            <button style={{marginLeft:"10px"}} onClick={handleUser}>Add User</button>
            {
                users.map((item, idx) => (
                    <h4 key={idx}>{item}</h4>
                ))
            }
        </div>
    )
}

export default DerivedComponents;