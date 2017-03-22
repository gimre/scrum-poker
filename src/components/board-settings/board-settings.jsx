
import React from 'react'
import CheckboxInput from '../inputs/checkbox.jsx'
import SelectInput   from '../inputs/select.jsx'
import Input         from '../inputs/input.jsx'

import { component } from './board-settings.css'

export default ( ) => {
    return (
        <div className={ component }>
            <Input label="Board name"/>
            <SelectInput
                label='Board type'
                options={ [ 'Fibonacci', 'Primes', 'Squares' ] }/>
            <CheckboxInput label='Allow "?"'/>
        </div>
    )
}