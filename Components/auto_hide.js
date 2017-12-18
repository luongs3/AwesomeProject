import React, {Component} from 'react';
import { AppRegistry, Image, Text } from 'react-native'

class AutoHide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showText: true,
        };

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText}
            })
        }, 1000);
    }

    render() {
        const text = 'James Nguyen is so handsome boy!'
        let display = this.state.showText ? text : ' '
        return (
            <Text>
                { display }
            </Text>
        );
    }
}

export default AutoHide;
