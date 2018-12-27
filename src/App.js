import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Form from './components/form';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-main-cover"></div>
                <div className="login-page-body">
                    <Header onBackClicked={this.onBackClicked}/>
                    <Form handleLogin={this.login}/>
                </div>
            </React.Fragment>
        );
    }

    onBackClicked = () => {
        console.log('Go Back!');
    }

    login = (name, password) => {
        console.log('do login for', name, password);
    }
}

export default App;
