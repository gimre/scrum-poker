
import React from 'react'

import Card          from '../card/card.jsx'
import BoardSettings from '../board-settings/board-settings.jsx'

import { commercial } from '../../libs/generators.jsx'

import { component } from './board.css'

export default ( { players } ) => {
    const it = commercial.generator( )
    return (
        <div className={ component }>
            <BoardSettings />
            { players.map( ( p, i ) => (
                <Card key={ i }
                    label={ it.next( ).value }/>
            ) ) }
        </div>
    )
}