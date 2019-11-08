import React, {Component} from 'react';
import Splash from './src/screens/splash/Splash'
import AppNavigator from "./src/navigators/AppNavigator";
import Home from "./src/screens/Home/Home";

export default class App extends Component{
    constructor() {
        super();
        this.state = {
            rootPage: <Splash/>,
            language: 'ar',
            user: null,
        }
        setTimeout(
            () => {
                this.setState({
                    rootPage: <AppNavigator/>
                });
            }, 1000
        )
    }

    render() {
        return (
            this.state.rootPage
        );
    }
}
