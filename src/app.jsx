
import React        from 'react'
import ReactDOM     from 'react-dom'
import Board        from './components/board/board.jsx'
import store        from './libs/store/store.jsx'

import {
    Provider
} from 'react-redux'

import './app.css'

document.addEventListener( 'DOMContentLoaded', ( ) => {
    const root = document.querySelector( '[root]' )
    if( !root ) {
        throw( 'missing root element' )
    }

    ReactDOM.render( (
        <Provider store={ store }>
            <Board players={ [ 1, 2, 3 ] }/>
        </Provider>
    ), root )
} )

