import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SearchBar } from 'react-native-elements'
// import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <SearchBar
          onChangeText={() => {}}
          onClear={() => {}}
          placeholder='Type Here...'
          inputStyle={styles.searchBar}
          showLoading
          lightTheme
          round
        />
        <Text>Search</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
  searchBar: {
    backgroundColor: '#fff',
    color: '#222'
  }
});
