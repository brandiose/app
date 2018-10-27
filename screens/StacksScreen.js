import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Badge,
  Icon,
  List,
  ListItem
} from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Stacks',
    headerRight: (
      <Icon
        name='add'
        onPress={() => { console.log("Create a stack"); }}
      />
    )
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <List>
          <ListItem
            key="1"
            title="Contacts"
            avatar={
              <Badge
                value={18}
              />
            }
          />
          <ListItem
            key="2"
            title="Work Conference 2018"
            avatar={
              <Badge
                value={21}
              />
            }
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
