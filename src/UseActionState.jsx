import { act, useActionState } from "react"

function UseActionState() {

    const handleSubmit = async(prevData, formData) => {
        let name = formData.get("nameUser");
        let password = formData.get("password")
        console.log(name, password);

        await new Promise(res => setTimeout(res, 2000))
        if(name && password){
            return {message:"Data Submitted", name, password}
        }
        else{
            return {error:"Failed to submit"}
        }
    }
    const [data, action, pending] = useActionState(handleSubmit, undefined);
    console.log(data);


    return (
        <div style={{ border: "2px solid orange", padding: "12px", marginTop: "12px" }}>
            <h2 style={{ color: "green" }}>UseActionState Hook</h2>

            <form action={action}>
                <input defaultValue={data?.name} name="nameUser" type="text" placeholder="Enter Name...." style={{ padding: "10px", backgroundColor: "whitesmoke", color: "black" }} />
                <br />
                <input name="password" type="password" placeholder="Enter Password...." style={{ padding: "10px", marginTop: "10px", backgroundColor: "whitesmoke", color: "black" }} />
                <br />
                <button disabled={pending} style={{ padding: "10px 12px", borderRadius: "8px", marginTop: "10px", backgroundColor: "crimson", color: "white" }}>Submit data</button>
                <br />
            </form>
            {
                data?.error && <span style={{ color: "red" }}>{data?.error}</span>
            }
            {
                data?.message && <span style={{ color: "green" }}>{data?.message}</span>
            }   

            <h3 style={{color:"goldenrod"}}>Name :  {data?.name}</h3>
            <h3 style={{color:"goldenrod"}}>Password :  {data?.password}</h3>

        </div>
    )
}

export default UseActionState;