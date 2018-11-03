import React from 'react';
import { View } from 'react-native';
import {
  Icon,
  Text
} from 'react-native-elements';
import { WebBrowser } from 'expo';

import Colors from '../constants/Colors';

export default class MediaEntry extends React.Component {
  render() {

    return (
      <View style={{
        paddingTop: 5,
        paddingBottom: 5
      }}>
        <View style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#aaa',
          borderRadius: 5
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: 40,
            height: 32,
            backgroundColor: Colors.noticeBackground,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5
          }}>
            <View style={{
              flexDirection: 'column',
              alignSelf: 'center'
            }}>
              <Icon
                name={this.props.medium}
                type='font-awesome'
                color="#fff"
              />
            </View>
          </View>
          <View style={{
            flexDirection: 'column',
            alignSelf: 'center',
            paddingLeft: 10,
            paddingRight: 10
          }}>
            <Text onPress={() => { WebBrowser.openBrowserAsync('https://' + this.props.medium + '.com/' + this.props.tag) }}>
              { this.props.tag }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
