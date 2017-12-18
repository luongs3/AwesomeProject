import React, {Component} from 'react';
import { AppRegistry, Image } from 'react-native'

class Bananas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pic: {
                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
            }
        };
    }

    render() {
        return (
            <Image source={this.state.pic} style={{width: 193, height: 110}} />
        );
    }
}

export default Bananas;
