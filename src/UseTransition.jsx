import { useState, useTransition } from "react";

function UserTransition(){
    // by using useState
    /*
        const [pending, setPending] = useState(false)
        const handleButton = async() => {
            setPending(true)
            await new Promise((resolve) => {
                resolve
            }, 2000)
            setPending(false)
        }

    */
    const [pendings, setTransition] = useTransition();
    // by  using useTransition 
    const handleTransition = () => {
        setTransition(async () => {
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, 2000)
            })
        })
    }

    return(
        <div style={{border:"2px solid yellow", padding:"10px", marginTop:"12px"}}>
            <h2>UseTransition in Hook </h2>
            {
                pendings?
                <img style={{width:"300px"}} src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-5325468-4450387.gif" alt="" />
                :null
            }
            <button disabled={pendings} onClick={handleTransition}>Click</button>
        </div>
    )
}

export default UserTransition;