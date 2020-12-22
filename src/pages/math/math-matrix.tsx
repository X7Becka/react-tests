/**
 * Test data provided with specified rows\columns.
 * Matrix doesn't work with "Exponent" and "-" symbol that provided by default input "type=number" directive. To beat it we should use something like IMask.
 * Also matrix doesn't work with just single row or column. That's it.
 */

import React from 'react';

export class MathMatrix extends React.PureComponent<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            twoDimensionalArray: null,
            rows: 4,
            columns: 6
        }
    }


    /**
     * Mounting component and immediately generating demo-matrix that further will free to change.
     */
    componentDidMount() {
        this.generate2DArray()
    }

    render() {
        const {rows, columns} = this.state

        return (
            <div className="math-matrix">
                <div className="math-matrix__form">
                    <input type="number" placeholder="rows" value={rows} onChange={this.handleDimensions("rows")}/>
                    <input type="number" placeholder="columns" value={columns} onChange={this.handleDimensions("columns")}/>
                    <button onClick={() => this.generate2DArray()}>Generate matrix</button>
                </div>
                {this.matrix}
            </div>
        );
    }

    generate2DArray = () => {
        const {rows, columns} = this.state
        const arr: Array<Array<number>> = [];
        let currentCount = 1
        let rowStart = 0
        let rowEnd = rows - 1
        let colStart = 0
        let colEnd = columns - 1

        while (rowStart <= rowEnd && colStart <= colEnd) {
            /**
             * Generating first-top row
             */
            for (let i = colStart; i <= colEnd; i++) {
                arr[rowStart] = arr[rowStart] || []
                arr[rowStart][i] = currentCount
                currentCount++
            }
            rowStart++

            /**
             * Generating cols from right to left
             */
            for (let i = rowStart; i <= rowEnd; i++) {
                arr[i] = arr[i] || []
                arr[i][colEnd] = currentCount
                currentCount++
            }
            colEnd--

            /**
             * Making the bottom row
             */
            for (let i = colEnd; i >= colStart; i--) {
                arr[rowEnd][i] = currentCount
                currentCount++
            }
            rowEnd--

            /**
             * Generating from botom to top
             */
            for (let i = rowEnd; i >= rowStart; i--) {
                arr[i][colStart] = currentCount
                currentCount++
            }
            colStart++
        }
        /**
         * Finally after assigning numbers and build matrix we setting state
         */
        this.setState({twoDimensionalArray: arr})
    }

    /**
     * getter that computes and render matrix right after we invoke "Generate2DArray".
     */
    get matrix() {
        const {twoDimensionalArray} = this.state
        const rows = twoDimensionalArray?.map((row, index) => {
            const rowItem = row.map((item, index) => {
                return (
                    <div key={index} className="math-matrix__matrix-item">{item}</div>
                )
            })
            return (
                <div key={index} className="math-matrix__matrix-row">
                    {rowItem}
                </div>
            )
        })

        return (
            <div className="math-matrix__matrix-wrapper">
                {rows}
            </div>
        )
    }


    /**
     *
     * @param type accepts only two types: rows and columns.
     */
    handleDimensions = (type: "rows" | "columns") => (e: React.SyntheticEvent) => {
        this.setState({[type]: (e.target as HTMLTextAreaElement).value} as unknown as Pick<IState, keyof IState>)
    }
}

interface IState {
    twoDimensionalArray: null | Array<Array<number>>
    rows: number,
    columns: number
}
