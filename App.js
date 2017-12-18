import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './Components/banana'
import AutoHide from './Components/auto_hide'
import NormalText from './Components/text'
import FlexView from './Components/flex'
import MyTextForm from './Components/text_input'
import MyScrollView from './Components/scroll_view'
import MyFlatList from './Components/flat_view'
import MySectionList from './Components/section_list'
import PostList from './Components/post_list'

export default class App extends Component {
    render() {
      return (
            <View style={{flex: 1, paddingTop: 50}}>
                {/* <MyTextForm /> */}
                {/* <Text>Who I Am</Text> */}
                {/* <FlexView /> */}
                {/* <MyFlatList /> */}
                {/* <MySectionList /> */}
                <PostList />
            </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  awesomeText: {
    fontSize: 50,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 40,
  }
});
