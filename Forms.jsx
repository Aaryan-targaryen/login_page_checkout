import React, { useState } from "react";



function Forms(props) {
    const [userDetails, setUserDetails] = useState({ 
      userName: "" ,
      password: "" 
    }) // we are passing the object in the useState 

    function handleChange (event) {
        const {name , value} = event.target ;
        setUserDetails((prevDetails)=> {
            return {...prevDetails , [name] : value } ;
        })
    }

    function submitDetails(event) {
        props.onAdd(userDetails) ; 

        setUserDetails ( {
            userName: "",      
            password : "" 
        }) ;

        event.preventDefault() ;
    } 

    return (
        <form className = "formBlock" >
            <div className = "UsernameBlock">
                <p>Email</p>
                <input onChange = {handleChange} className = "inputBar" name="userName" type="text" value = {userDetails.userName} placeholder="Username"></input>
            </div>
            <div className="passwordBlock">
                <p>Password</p>
                <input onChange = {handleChange} className= "passwordInput" name="password" type="password" value = {userDetails.password} placeholder="Password"></input>
                <p><center><a href="#" >Forgot Password?</a></center> </p>
            </div>
            
            
           <div className = "buttonsBlock">
                <button onClick={submitDetails} className = "btn1 btn btn-lg btn-block btn-dark">
                    <span>Sign in</span>
                </button>
                <button  className = "btn2 btn btn-lg btn-block btn-outline-dark">
                    <span><i class="fa-brands fa-google"></i> Sign in with Google</span>
                </button>
            </div>
        </form>
    );
}

export default Forms ;


