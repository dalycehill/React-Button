import React from 'react';
import Button from './Button'
// import './ResetCount.css';

class ResetCount extends React.Component {

    _reset = () => {
        this.props.onReset(this.state);
    };

    render() {
        return(
            <div>
                <Button className="reset" title="&#8635;" onClick={this._reset}/>
            </div>
        );
    }
}

export default ResetCount;
