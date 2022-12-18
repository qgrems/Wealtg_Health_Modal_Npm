import { Link } from 'react-router-dom'
import './index.css'
import React, { Fragment } from 'react'

/**
 * modal window that displays a text and closes it with a button
 * @param {*} props 3 proprity Toggle contentand action
 * @returns composant Modal
 */
export function Modal(props){
    const content = props.content
    const modalState = props.toggle
    const action = props.action
    return(
       <>
    {
        (modalState === true)?
        <> 
            <div className="backgroundModal">
                <div className="backgroundModalText">
                    <p className="textModal">{content}</p>
                    <p className="textModal"><Link to="/CurrentEmployees">View Current Employees</Link></p>
                    <p className="textModal" onClick={action}>Close</p>
                </div>
            </div>
        </> : ''
    }
    </>
    )
}