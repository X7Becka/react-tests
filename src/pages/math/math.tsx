import React from 'react'
import {MathMatrix} from './math-matrix'
import {MathBrackets} from './math-brackets'

export default class Math extends React.PureComponent  {

    render(): JSX.Element {
        return (
            <div className="math">
                <MathMatrix/>
                <MathBrackets/>
            </div>
        )
    }
}


