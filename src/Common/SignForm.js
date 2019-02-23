import React from 'react'
import './SignForm.css'

class SignButton extends React.Component{

    render(){
        return(
                <button className={`log-btn ${this.props.id}`} >{this.props.name}</button>
        )
    }
}

export default SignButton