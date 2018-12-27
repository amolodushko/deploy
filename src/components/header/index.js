import React, {Component} from 'react';
import './css/index.css';
import FontAwesome from 'react-fontawesome';
import Bet25Logo from '../logo';

class Index extends Component {
    render() {
        return (
            <div className="login-header">
                <button className="back-button" onClick={this.props.onBackClicked}>
                    <FontAwesome className='back-arrow' size='lg' name='chevron-left'/>
                </button>
                <div className="logo-wrapper">
                    <Bet25Logo/>
                </div>
            </div>
        );
    }
}

export default Index;
