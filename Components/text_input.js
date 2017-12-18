import React, {Component} from 'react';
import {
    StyleSheet,
    Alert,
    Text,
    TextInput,
    View,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native'

export default class MyTextForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    __onPressButton() {
        Alert.alert('You tapped the button!')
    }

    __onLongPressButton() {
        Alert.alert('You long pressed the button!')
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <TextInput
                    alignSelf="stretch"
                    placeholder="Text something here"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, alignSelf: "flex-start"}}>Inpur: {this.state.text}</Text>
                <Button
                    style={styles.pressButton}
                    onPress={() => {
                        Alert.alert('You tapped the button!')
                    }}
                title="Press Me" />
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight style={styles.pressButton} onPress={this.__onPressButton} underlayColor='white'>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Touchable Highlight</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.pressButton} onPress={this.__onPressButton} underlayColor='white'>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Touchable Opacity</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TouchableNativeFeedback style={styles.pressButton} onPress={this.__onPressButton} underlayColor='white'>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Touchable Native Feedback</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pressButton: {
        flex: 0.8,
    },
    button: {
        backgroundColor: 'blue',
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        padding: 20,
    }
})
