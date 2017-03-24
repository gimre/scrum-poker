
import React from 'react'

import { getUID } from '../../libs/utils.jsx'

import {
    cell,
    component,
    input
} from './labeled.css'

export default ( {
    children,
    text
} ) => {
    const id = getUID( )
    const elements = [ ].concat( children )
        .map( ( c, key ) => React.cloneElement( c, { id, key } ) )

    return (
        <div className={ component }>
            <div className={ cell }>
                <label
                    className={ cell }
                    htmlFor={ id }>
                    { text }
                </label>
            </div>
            <div className={ [ cell, input ].join( ' ' ) }>
                { elements }
            </div>
        </div>
    )
}