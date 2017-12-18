import React, {Component} from 'react';
import { AppRegistry, Image, Text, View } from 'react-native'

export default class Flex extends Component {
    constructor(props) {
        super(props);
    }

    // align axis of alignItems = !flexDirection
    // alignItems = ['center', 'flex-start', 'flex-end', 'stretch']
    // alignItems='stretch' not working until children View were removed
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={{flex: 1}}>Flex Row</Text>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}></View>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}></View>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}></View>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    // justifyContent: 'space-between',
                    justifyContent: 'center',
                    alignItems: 'stretch', // align items on secondary axis
                }}>
                    <Text style={{height: 50}}>Align Stretch</Text>
                    <View style={{height: 50, backgroundColor: 'powderblue'}}></View>
                    <View style={{height: 50, backgroundColor: 'skyblue'}}></View>
                    <View style={{height: 50, backgroundColor: 'steelblue'}}></View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center', // align items on secondary axis
                }}>
                    <Text style={{height: 50}}>alignItems center</Text>
                    <View style={{height: 50, alignSelf: 'stretch', backgroundColor: 'powderblue'}}></View>
                    <View style={{height: 50, alignSelf: 'stretch', backgroundColor: 'skyblue'}}></View>
                    <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}}></View>
                </View>
            </View>
        );
    }
}
