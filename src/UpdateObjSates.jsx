import { useState } from "react";

function UpdateStates() {
    const [data, setData] = useState({
        name:"Akshita",
        course: "BCA", 
        address:{
            city:"Bihar",
            country:"India"
        }
    })

    const handleName = (val) => {
       /* const temp = data;
        data.name = val;*/
        data.name = val;
        setData({...data});
    }

    const handleCity = (valCity) => {
        const temp = data
        temp.address.city = valCity;
        setData({...data, address:{...temp.address,city}})
    }

    return(
        <div style={{padding:"12px", border:"2px solid purple", marginTop:"12px"}}>
            <h2 style={{color:"goldenrod"}}>Updating Objects in state</h2>

            <input style={{padding:"10px", backgroundColor:"white",  color:"crimson", fontWeight:"600"}} type="text" placeholder="Update Name" 
            onChange={(event) => handleName(event.target.value)}/>
            <input style={{padding:"10px", marginLeft:"12px" , backgroundColor:"white",  color:"crimson", fontWeight:"600"}} type="text" placeholder="Update City" 
            onChange={(event) => handleCity(event.target.value)}/>

            <h2 style={{color:"purple"}}>Name: <span style={{color:"green"}}>{data.name}</span></h2>
            <h2 style={{color:"purple"}}>Course: <span style={{color:"green"}}>{data.course}</span></h2>
            <h2 style={{color:"purple"}}>City: <span style={{color:"green"}}> {data.address.city}</span></h2>
            <h2 style={{color:"purple"}}>Country: <span style={{color:"green"}}>{data.address.country}</span></h2>
        </div>
    )
}

export default UpdateStates;