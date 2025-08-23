import { useState } from "react"

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    function toggleVal(val){
        if(typeof val === 'boolean'){
            setValue(val);
            console.log("boolean value -> if");
        }
        else{
            setValue(!value);
            console.log("boolean value else -> toggle");
        }
    }

    return [value, toggleVal];
}

export default useToggle;