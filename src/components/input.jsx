import React, {useState} from "react";
function Input(){
    const [value, setValue] = useState('Text form input')
    function onChange(e){
        setValue(e.target.value)
    }
    
    return(
        <>  
            
            <div className="wrapper__counter">
                <p>{value}</p>
                <input 
                value={value} 
                onChange={onChange}
                />
            </div>
            
        </>
    )
}
export default Input;