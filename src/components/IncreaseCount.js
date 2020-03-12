import React from 'react';
import Button from './Button'
// import './IncreaseCount.css';

class IncreaseCount extends React.Component {

    _increment = () => {
        this.props.onIncrement(this.state);
    };

    render() {
        return(
            <div>
                <Button className="plus" title="+" onClick={this._increment}/>
            </div>
        );
    }
}

export default IncreaseCount;
