
import React from 'react'

import Card          from '../card/card.jsx'
import BoardSettings from '../board-settings/board-settings.jsx'

import { component } from './board.css'

export default ( { players } ) => {
    return (
        <div className={ component }>
            <BoardSettings />
            { players.map( ( p, i ) => (
                <Card key={ i }
                    label={ p }/>
            ) ) }
        </div>
    )
}