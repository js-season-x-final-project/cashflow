import React from 'react'
import SignForm from '../Common/SignForm'
import './Header.css'
const header = ()=>{
        return(
            <div id='wrap-header'>
                <div id="main-header">
                    <div id="logo-place">
                        <img 
                        src=""
                        alt="Logo"
                        />
                    </div>
                    <div id="motto">
                        <h3>Control your money from everywhere</h3>
                    </div>
                    <div id="sign-place">
                        <SignForm name="Sign In" id="sign-in"/>
                        <SignForm name="Sign Up" id="sign-up"/>
                    </div>
                </div>
        
            </div>
        )
}


export default header
