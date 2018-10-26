import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  List,
  ListItem
} from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Stacks',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <List>
          <ListItem
            key="1"
            title="Contacts"
          />
          <ListItem
            key="2"
            title="Work Conference 2018"
          />
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
});
