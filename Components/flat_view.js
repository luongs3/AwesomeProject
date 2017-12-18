import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'
import FitImage from 'react-native-fit-image'

const myData = [
    {'name': 'James 1'},
    {'name': 'James 2'},
    {'name': 'James 3'},
    {'name': 'James 4'},
    {'name': 'James 5'},
    {'name': 'James 6'},
    {'name': 'James 7'},
    {'name': 'James 8'},
    {'name': 'James 9'},
    {'name': 'James 10'},
    {'name': 'James 11'},
    {'name': 'James 3'},
    {'name': 'James 4'},
    {'name': 'James 5'},
    {'name': 'James 6'},
    {'name': 'James 7'},
    {'name': 'James 8'},
    {'name': 'James 9'},
    {'name': 'James 10'},
    {'name': 'James 11'},
    {'name': 'James 3'},
    {'name': 'James 4'},
    {'name': 'James 5'},
    {'name': 'James 6'},
    {'name': 'James 7'},
    {'name': 'James 8'},
    {'name': 'James 9'},
    {'name': 'James 10'},
    {'name': 'James 11'},
    {'name': 'James 3'},
    {'name': 'James 4'},
    {'name': 'James 5'},
    {'name': 'James 6'},
    {'name': 'James 7'},
    {'name': 'James 8'},
    {'name': 'James 9'},
    {'name': 'James 10'},
    {'name': 'James 11'},
    {'name': 'James 3'},
    {'name': 'James 4'},
    {'name': 'James 5'},
    {'name': 'James 6'},
    {'name': 'James 7'},
    {'name': 'James 8'},
    {'name': 'James 9'},
    {'name': 'James 10'},
    {'name': 'James 11'},
    {'name': 'James 3'},
    {'name': 'James 4'},
    {'name': 'James 5'},
    {'name': 'James 6'},
    {'name': 'James 7'},
    {'name': 'James 8'},
    {'name': 'James 9'},
    {'name': 'James 10'},
    {'name': 'James 11'},
    {'name': 'James 3'},
    {'name': 'James 4'},
    {'name': 'James 5'},
    {'name': 'James 6'},
    {'name': 'James 7'},
    {'name': 'James 8'},
    {'name': 'James 9'},
    {'name': 'James 10'},
    {'name': 'James 11'},
    {'name': 'James 3'},
    {'name': 'James 4'},
    {'name': 'James 5'},
    {'name': 'James 6'},
    {'name': 'James 7'},
    {'name': 'James 8'},
    {'name': 'James 9'},
    {'name': 'James 10'},
    {'name': 'James 11'},
    {'name': 'James 3'},
    {'name': 'James 4'},
    {'name': 'James 5'},
    {'name': 'James 6'},
    {'name': 'James 7'},
    {'name': 'James 8'},
    {'name': 'James 9'},
    {'name': 'James 10'},
    {'name': 'James 11'},
    {'name': 'James 12'},
    {'name': 'James 13'},
    {'name': 'James 14'},
]

export default class MyFlatList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={myData}
                    renderItem={({index, item}) => <Text key={index}>{item.name}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
    }
})
