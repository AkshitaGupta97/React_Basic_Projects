import { useState } from "react"

function DerivedComponents(){
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const handleUser = () => {
        setUsers([...users, user]);
       // console.log(users, user);
        
    }
    
    return(
        <div style={{border:"2px solid green", padding:"12px"}}>
            <h2>Derived Components</h2>
            <h3>Total User : </h3>
            <h3>Last User: </h3>
            <h3>Unique user: </h3>
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