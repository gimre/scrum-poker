
import React         from 'react'
import { connect }   from 'react-redux'

// import CheckboxInput from '../inputs/checkbox.jsx'
// import SelectInput   from '../inputs/select.jsx'
// import Input         from '../inputs/input.jsx'
import Labeled       from '../inputs/labeled.jsx'
import { component } from './board-settings.css'

const BoardSettings = ( {
    boardTypes,
    presetBoardType,
    presetName,
    onBoardTypeChange,
    onNameChange
} ) => {
    console.log( presetName )
    return (
        <div className={ component }>
            <Labeled text="Board name">
                <input
                    type="text"
                    onChange={ ( { target: { value } } ) =>
                        onNameChange( value ) }
                    value={ presetName }/>
            </Labeled>
            <Labeled text="Board type">
                <select
                    value={ presetBoardType }>
                    { boardTypes.map( type => (
                        <option key={ type }>{ type }</option>
                    ) ) }
                </select>
            </Labeled>
            {/*<Input
                label="Board name" value={ presetName }/>
            <SelectInput
                label='Board type'
                options={ [ 'Fibonacci', 'Primes', 'Squares' ] }/>
            <SelectInput
                label='Card count'
                options={ [ 5, 4, 3, 2, 1 ] }/>
            <CheckboxInput
                label='Allow "?"'/>
            <CheckboxInput
                label='Allow "∞"'/>*/}
        </div>
    )
}

export default connect(
    // map state
    ( { settings: {
        boardTypes,
        boardType,
        name
    } } ) => {
        return ( {
            boardTypes,
            presetBoardType: boardType,
            presetName: name
        } )
    },

    // map dispatch
    ( dispatch ) => ( {
        onNameChange: ( name ) => dispatch( {
            type: 'SETTINGS_NAME_CHANGE',
            name
        } )
    } )
)( BoardSettings )