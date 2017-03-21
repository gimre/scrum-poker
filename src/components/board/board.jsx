
import React from 'react'
import Card  from '../card/card.jsx'

import { component } from './board.css'

export default ( { players } ) => {
    return (
        <div className={ component }>
            { players.map( ( p, i ) => (
                <Card key={ i }
                    label={ p }/>
            ) ) }
        </div>
    )
}