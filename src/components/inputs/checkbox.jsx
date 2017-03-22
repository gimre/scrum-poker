
import React from 'react'
import Input from './input.jsx'

export default ( {
    label,
    options,
    onChange,
} ) => {
    return (
        <Input
            label={ label }
            type="checkbox"
            onChange={ onChange }/>
    )
}