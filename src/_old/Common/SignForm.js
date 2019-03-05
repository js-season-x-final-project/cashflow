import React from 'react'
import './SignForm.css'

const signForm = props =>{
        return(
                <button className={`log-btn ${props.id}`} >{props.name}</button>
        )
}


export default signForm