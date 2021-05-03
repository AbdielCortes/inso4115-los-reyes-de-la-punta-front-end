import React from 'react'
import Requirement from './Requirement'

const Requirements = ({ requirements, onSelect }) => {
    return (
        <>
            {requirements.map((req) => 
            <Requirement key={req.id} requirement = {req} onSelect = {onSelect}/>
            )}
        </>
    )
}

export default Requirements
