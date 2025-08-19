import { useRef } from "react";

function Forward() {
    const inputRef = useRef(null);
    const updateInput = () => {
        inputRef.current.value = 1000;
        inputRef.current.focus();
    }
    return(
        <div>
            <h2>Forward Ref</h2>
            <UserInput ref={inputRef}/>
            <button onClick={updateInput}>Update Input</button>
        </div>
    )
}
export default Forward;