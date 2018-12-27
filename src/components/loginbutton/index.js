import React, {Component} from 'react';
import './css/index.css';

class Index extends Component {
    render() {
        const {disabled, onButtonClick} = this.props,
            disabledCls = disabled ? 'disabled' : '',
            className = `login-button ${disabledCls}`;

        return (
            <button onClick={onButtonClick} className={className}>Log Ind</button>
        );
    }
}

export default Index;
