import React from 'react'

export class MathBrackets extends React.PureComponent {
    render(): JSX.Element {
        return (
            <div className="math-expression">
                <div className="math-expression__title">Expression-balance checking</div>
                {this.isBracketStructureValid('(({{1+3}[4+<3-5>]))', '(){}[]')}
            </div>
        )
    }

    // isBracketStructureValid = (expression: string) => {
    // const brackets = ["(", ")", "{", "}", "[", "]"]
    // let isFound = true
    // for (let i = 0; i < expression.length - 1;i++) {
    //         switch (Array.from(expression)[i]) {
    //             case "(": {
    //                 for (let symbol = i; symbol < expression.length - i;symbol++) {
    //                     isFound = false
    //                     if (Array.from(expression)[symbol] === ")") isFound = true
    //                 }
    //             }
    //         }
    //     console.log(!isFound ? 'ERR' : "!ERR", '!isFound')
    //
    // }
    // }
    /**
     * @param expression
     * @param brackets
     */
    isBracketStructureValid = (expression: string, brackets: string): string => {
        /**
         * Temporary array to contain open brackets
         */
        const bin = []
        /**
         * Here we passing an expression by every symbol
         */
        for (const symbol of expression) {
            /**
             * Getting an index of bracket.
             * So if current symbol aren't equal any of bracket in parameter - we're getting the next symbol.
             */
            const bracketIndex = brackets.indexOf(symbol)
            if (bracketIndex === -1) continue

            /**
             * Getting open-bracket. If so - we pushing close bracket (next to open)
             */
            if (bracketIndex % 2 === 0) bin.push(bracketIndex + 1)

            /**
             * Searching open-bracket. Popping off the last bracket in bin then compare it.
             */
            else if (bin.pop() !== bracketIndex) return `${expression} UNBALANCED.`
        }
        if (bin.length > 0) return `${expression} UNBALANCED.`
        /**
         * If bin are empty - brackets are equal
         */
        return `${expression} BALANCED.`
    }
}
