
import {
    getUID
} from '../utils.jsx'

import * as generators from '../generators.jsx'

import {
    combineReducers,
    createStore
} from 'redux'

const boardTypes = Object.keys( generators )

const settings = ( state = {
    boardType:  boardTypes[ 0 ],
    boardTypes: boardTypes,
    name:       `Board #${ getUID() }`
}, action ) => {
    switch( action.type ) {
        case 'SETTINGS_NAME_CHANGE':
            return Object.assign( { }, state, {
                name: action.name
            } )
        default:
            return state
    }
}

const debug = ( state = { }, action ) => {
    console.log( action )
    return state
}

export default createStore( combineReducers( {
    debug,
    settings
} ) )