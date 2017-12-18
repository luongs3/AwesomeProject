import React, {Component} from 'react';
import { AppRegistry, Image, Text } from 'react-native'

export default class NormalText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const text = 'James Nguyen is so handsome boy!'
        let display = this.state.showText ? text : ' '
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Text>Wow, Awesome!</Text>
                <Bananas />
                {/* <AutoHide text="Test Text" /> */}
                <Text style={ styles.awesomeText }>Awesome Text</Text>
            </View>
        );
    }
}
