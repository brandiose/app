import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Text>Notifications</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
