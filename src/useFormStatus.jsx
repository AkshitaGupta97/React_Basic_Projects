import {useFormStatus} from 'react-dom'

function UseFormStatus() {

    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log("submit");
    }

    function CustomerForm() {
        const {pending} = useFormStatus();
        //console.log(pending);
        
        return (
            <div style={{ border: "2px solid brown", padding: "10px" }}>
                <h2>useFormStatus Hook </h2>
                <form action={handleSubmit}>
                    <input style={{ padding: "10px", backgroundColor: "black" }} type="text" placeholder="Enter name" />
                    <br />
                    <input style={{ padding: "10px", backgroundColor: "black", marginTop:"12px"}} type="password" placeholder="Enter password" />
                    <br />
                    <button style={{ backgroundColor: "brown", color: "white", borderRadius: "6px" }} disabled={pending}>{pending? "Submitting": "submit"}</button>
                </form>
            </div>
        )
    }
    return (
        <div>
            <CustomerForm />
        </div>
    )
}
export default UseFormStatus;