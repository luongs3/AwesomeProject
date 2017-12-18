import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native'

export default class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {posts: []};
    }

    async getPosts() {
        try {
            let response = await fetch("https://api.viblo.asia/posts?limit=10")
            let posts = response.json()

            this.setState({posts})
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const {posts} = this.state
        console.log(posts)

        return (
            <View>
                List View
            </View>
        );
    }
}
