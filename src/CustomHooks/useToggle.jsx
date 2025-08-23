import { useState } from "react"

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    function toggleVal(val){
        if(typeof val === 'boolean'){
            setValue(val);
        }
        else{
            setValue(!val);
        }
    }

    return [value, toggleVal];
}

export default useToggle;