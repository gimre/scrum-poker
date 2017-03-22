
import React from 'react'

import { getUID } from '../../shared/utils.jsx'
import {
    cell,
    component,
    input
} from './input.css'

const inputTypeMap = {
    checkbox: ( { id } ) => (
        <input type="checkbox" id={ id }/>
    ),
    textfield: ( { id } ) => (
        <input type="text" id={ id }/>
    ),
    select: ( { children, id } ) => (
        <select id={ id }>
            { children }
        </select>
    )
}

export default ( {
    children,
    label,
    type ,
    onChange
} ) => {
    const id = getUID( )
    return (
        <div className={ component }>
            <div className={ cell }>
                <label
                    className={ cell }
                    htmlFor={ id }>
                    { label }
                </label>
            </div>
            <div className={ [ cell, input ].join( ' ' ) }>
                { type in inputTypeMap ? (
                    inputTypeMap[ type ]( { id, children } )
                ) : (
                    inputTypeMap.textfield( { id } )
                ) }
            </div>
        </div>
    )
}