import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, SectionList } from 'react-native'
import FitImage from 'react-native-fit-image'

const myData = [
    {title: 'Section 1', data: ['Delvin']},
    {title: 'Section 2', data: ['Delvin', 'James', 'Alaska', 'Nothing']},
]

export default class MyFlatList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={myData}
                    renderItem={({item}) => <Text>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={{backgroundColor: 'gray'}}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
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
