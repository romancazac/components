import React, {useState} from "react";
function Input(){
    const [value, setValue] = useState('Text form input')
    function onChange(e){
        setValue(e.target.value)
    }
    
    return(
        <>  <p>{value}</p>
            <input 
            value={value} 
            onChange={onChange}
            />
        </>
    )
}
export default Input;