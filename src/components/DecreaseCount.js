import React from 'react';
import Button from './Button'
import './DecreaseCount.css';

class IncreaseCount extends React.Component {

    _decrement = () => {
        this.props.onDecrement(this.state);
    };

    render() {
        return(
            <div>
                <Button className="minus" title="-" onClick={this._decrement}/>
            </div>
        );
    }
}

export default IncreaseCount;