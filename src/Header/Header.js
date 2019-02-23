import React from 'react'
import SignForm from '../Common/SignForm'
import './Header.css'
class Header extends React.Component{
    render(){
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
                        <h3>Take control over your money</h3>
                    </div>
                    <div id="sign-place">
                        <SignForm name="Sign In" id="sign-in"/>
                        <SignForm name="Sign Up" id="sign-up"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
