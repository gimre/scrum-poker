
import React from 'react'

export default ( {
    label,
    options,
    onChange
} ) => {
    return (
        <Input
            label={ label }
            type='select'
            onChange={ onChange }>
            { options.map( ( o ) => (
                <option key={ o }>{ o }</option>
            ) ) }
        </Input>
    )
}