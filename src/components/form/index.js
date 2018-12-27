import React, {Component} from 'react';
import './css/index.css';
import LoginButton from '../loginbutton';
import NemIdLogin from '../nemid';

// import LoginFields from './LoginFields';
// import LoginButton from './LoginButton';
// import NemIdLogin from './NemIdLogin';


class Index extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }

    render() {
        const {name, password} = this.state;

        return (
            <div className="login-form-wrapper">
              <div className="form-fields-wrapper">
                  <div className="form-fields">
                      <input onChange={this.onFieldChange} placeholder="Brugernavn" className="user-name login-field"
                             name="name" value={name}/>
                      <input onChange={this.onFieldChange} placeholder="Kodeord" className="password login-field"
                             name="password" value={password}/>
                      <a href="#" className="forgot-password">Glemt kodeord?</a>
                  </div>
              </div>

                <div className="login-actions-wrapper">
                    <LoginButton onButtonClick={this.onButtonClick} disabled={!this.isValid(name, password)}/>
                    <NemIdLogin/>
                </div>
            </div>
        );
    }

    isValid(name, value) {
        return name.trim() !== '' && value.trim() !== '';
    }

    onButtonClick = () => {
        const {name, password} = this.state;
        if (!this.isValid(name, password)) {
            return;
        }

        this.props.handleLogin(name, password);
    }

    onFieldChange = (e) => {
        let {name, value} = e.target,
            newStateValue = {};

        newStateValue[name] = value;

        this.setState(newStateValue);
    }
}

export default Index;
