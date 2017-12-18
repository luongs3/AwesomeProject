import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import FitImage from 'react-native-fit-image'

export default class MyScrollView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    Since the dawn of computing, we have been collecting exponentially growing amounts of data, constantly asking more from our data storage, processing, and analysis technology. In the past decade, this caused software developers to cast aside SQL as a relic that couldn’t scale with these growing data volumes, leading to the rise of NoSQL: MapReduce and Bigtable, Cassandra, MongoDB, and more.
                    Yet today SQL is resurging. All of the major cloud providers now offer popular managed relational database services: e.g., Amazon RDS, Google Cloud SQL, Azure Database for PostgreSQL (Azure launched just this year). In Amazon’s own words, its PostgreSQL- and MySQL-compatible database Aurora database product has been the “fastest growing service in the history of AWS”. SQL interfaces on top of Hadoop and Spark continue to thrive. And just last month, Kafka launched SQL support. Your humble authors themselves are developers of a new time-series database that fully embraces SQL.
                    In this post we examine why the pendulum today is swinging back to SQL, and what this means for the future of the data engineering and analysis community.
                    Part 1: A New Hope
                </Text>
                <View style={{
                    // flex: 1,
                    // flexDirection:'row',
                    // alignItems: 'stretch'
                }}>
                    <FitImage style={{
                        // flex: 1,
                        // resizeMode: 'center',
                        // width: undefined,
                        // height: undefined,
                    }} source={require('../img/Photo_17-11-16-20-51-19.307.jpg')} />
                </View>
                <Text>
                    To understand why SQL is making a comeback, let’s start with why it was designed in the first place.
                    Our story starts at IBM Research in the early 1970s, where the relational database was born. At that time, query languages relied on complex mathematical logic and notation. Two newly minted PhDs, Donald Chamberlin and Raymond Boyce, were impressed by the relational data model but saw that the query language would be a major bottleneck to adoption. They set out to design a new query language that would be (in their own words): “more accessible to users without formal training in mathematics or computer programming.”
                    Think about this. Way before the Internet, before the Personal Computer, when the programming language C was first being introduced to the world, two young computer scientists realized that, “much of the success of the computer industry depends on developing a class of users other than trained computer specialists.” They wanted a query language that was as easy to read as English, and that would also encompass database administration and manipulation.
                    The result was SQL, first introduced to the world in 1974. Over the next few decades, SQL would prove to be immensely popular. As relational databases like System R, Ingres, DB2, Oracle, SQL Server, PostgreSQL, MySQL (and more) took over the software industry, SQL became established as the preeminent language for interacting with a database, and became the lingua franca for an increasingly crowded and competitive ecosystem.
                    (Sadly, Raymond Boyce never had a chance to witness SQL’s success. He died of a brain aneurysm 1 month after giving one of the earliest SQL presentations, just 26 years of age, leaving behind a wife and young daughter.)
                    For a while, it seemed like SQL had successfully fulfilled its mission. But then the Internet happened.
                    Part 2: NoSQL Strikes Back
                    While Chamberlin and Boyce were developing SQL, what they didn’t realize is that a second group of engineers in California were working on another budding project that would later widely proliferate and threaten SQL’s existence. That project was ARPANET, and on October 29, 1969, it was born.
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
    }
})
