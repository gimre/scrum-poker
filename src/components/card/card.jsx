
import React from 'react'

import { component } from './card.css'

export default ( { label } ) => {
    return (
        <div className={ component }>
            { label }
        </div>
    )
}