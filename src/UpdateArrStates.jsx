import { useState } from "react"

function UpdateArr() {
    const [data, setData] = useState([
        'sam', 'peter', 'bruce', 'fogg'
    ])

    const handleUser = (name) => { // change last name
        data[data.length - 1] = name;
        setData([...data]);
    }

    const [dataobj, setDataobj] = useState([
        {name:"Akshita", age:"20"},
        {name:"Sam", age:"24"},
        {name:"Him", age:"16"},
        {name:"Anil", age:"50"}
    ])

    const handleAge = (item) => {
        dataobj[dataobj.length-1].age = item;
        setDataobj([...dataobj])
    }
    return(
        <div style={{border:"2px solid green", padding:"12px", marginTop:"12px"}}>
            <h2>Update Array states with objects</h2>
            <input onChange={(e) => handleUser(e.target.value)} type="text" placeholder="Update Name...." style={{padding:"10px", backgroundColor:"whitesmoke", color:"black"}}/>
            {
                data.map((item, idx) => (
                    <h3 key={idx} style={{color:"gold", textDecoration:"underline"}}>{item}</h3>
                ))
            }
            <hr />
            <input onChange={(e) => handleAge(e.target.value)} type="text" placeholder="Update Age...." style={{padding:"10px", backgroundColor:"whitesmoke", color:"black"}}/>
            {
                dataobj.map((ele, indx) => (
                    <h3 key={indx} style={{color:"crimson", textDecoration:"underline"}}>{ele.name} - {ele.age}</h3>
                ))
            }


        </div>
    )
}

export default UpdateArr;