import React, { useState } from "react" ;
import Forms from "./Forms" ;

function RightContent() {
    const [detailsData , setDetailsData] = useState([])

    function onAdd (newDetails){
        console.log(newDetails) ;
        setDetailsData((prevDetails) => {
            return [...prevDetails, newDetails]  ;
        }) ;

    }

    return (
        <div className = "rightContent">
            <h1 className = "welcome" >Welcome to Logituit,<br/>Sign In to Continue.</h1>
            
                <p>
                    Don't have an account? <a href = "https://logituit.com/"> Create an account.</a> it <br />takes less than a minute. 
                </p>
                     <Forms onAdd= {onAdd} />

        </div>
    );
}

export default RightContent;