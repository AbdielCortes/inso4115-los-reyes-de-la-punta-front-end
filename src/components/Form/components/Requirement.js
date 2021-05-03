import React from 'react'
const Requirement = ({ requirement, onSelect }) => {
    return (
        <div 
        className = 'requirement'>
            <input 
                type = 'checkbox'
                checked = {requirement.comply}
                onChange = {() => onSelect(requirement.id)}
            />
            <label>{requirement.text}</label>
            
        </div>
    )
}

export default Requirement
