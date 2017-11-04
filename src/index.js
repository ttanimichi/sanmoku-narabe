import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Cell extends React.Component {
    render() {
        return (
            <div className="cell" onClick={ this.props.handleClick }>
                { this.props.value }
            </div>
        )
    }
}

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <div className="row">
                    <Cell value={ this.props.cells[0] } handleClick={ () => {this.props.handleClick(0)} } />
                    <Cell value={ this.props.cells[1] } handleClick={ () => {this.props.handleClick(1)} } />
                    <Cell value={ this.props.cells[2] } handleClick={ () => {this.props.handleClick(2)} } />
                </div>
                <div className="row">
                    <Cell value={ this.props.cells[3] } handleClick={ () => {this.props.handleClick(3)} } />
                    <Cell value={ this.props.cells[4] } handleClick={ () => {this.props.handleClick(4)} } />
                    <Cell value={ this.props.cells[5] } handleClick={ () => {this.props.handleClick(5)} } />

                </div>
                <div className="row">
                    <Cell value={ this.props.cells[6] } handleClick={ () => {this.props.handleClick(6)} } />
                    <Cell value={ this.props.cells[7] } handleClick={ () => {this.props.handleClick(7)} } />
                    <Cell value={ this.props.cells[8] } handleClick={ () => {this.props.handleClick(8)} } />
                </div>
            </div>
        );
    }
}

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            cells: new Array(9).fill(null),
            flag: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        console.log(`${i} clicked.`)

        let new_cells = this.state.cells;

        if (this.state.flag) {
            new_cells[i] = 'o';
        } else {
            new_cells[i] = 'x';
        }


        this.setState({
            cells: new_cells,
            flag: !this.state.flag
        });
    }

    render() {
        return (
            <main className="container">
                <h1>三目並べ</h1>
                <Board cells={this.state.cells} handleClick={this.handleClick} />
                { `[${this.state.cells}]` }
            </main>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
