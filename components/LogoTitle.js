import React from 'react';
import { Image } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/images/logo-text--black.png')}
        style={{
          width: 95,
          height: 22
        }}
      />
    );
  }
}
