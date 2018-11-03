import React from 'react';
import {
  Avatar,
  Icon,
  Text
} from 'react-native-elements';
import {
  Dimensions,
  // Linking,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import {
  LinearGradient,
  // WebBrowser
} from 'expo';

import MediaEntry from './MediaEntry';

import Utils from '../constants/Utils';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandInfo: {}
    };
  }

  componentWillMount() {
    this._getBrandData(this.props.brandid);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.brandid !== this.props.brandid) {
      this._getBrandData(this.props.brandid);
      return true;
    }

    return false;
  }

  _getBrandData(brandId) {
    // Get BrandInfo
    fetch(
      Utils.api + 'brand/' + brandId,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then((response) => response.json())
    .then((response) => {
      this.setState({
        brandInfo: response.body[0]
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _getRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var obj = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    return obj !== null ? obj.r + ',' + obj.g + ',' + obj.b : '255,255,255';
  }


  render() {
    var colorHex = this.state.brandInfo.color ? this.state.brandInfo.color : '#fff';
    var colorRGB = this._getRGB(this.state.brandInfo.color);

    return (
      <ScrollView style={{
        flex: 1,
        // flexDirection: 'row',
        backgroundColor: this.state.brandInfo.color,
        paddingRight: 0
      }}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff'
        }}>
          <LinearGradient
            colors={[
              'rgba(' + colorRGB + ',0.8)',
              colorHex
            ]}
            style={{
              width: Dimensions.get('window').width,
              height: 120
            }}
          />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: this.state.brandInfo.color,
          // paddingTop: 120,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'column'
            }}>
              <View style={styles.profileStatsValueRow}>
                <Avatar
                  xlarge
                  rounded
                  imageProps={{
                    resizeMode: 'cover',
                    borderWidth: 4,
                    borderColor: '#fff'
                  }}
                  source={{ uri: this.state.brandInfo.picture }}
                  containerStyle={{
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    marginTop: -75
                  }}
                />
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
                alignContent: 'center',
                paddingTop: 25,
                paddingBottom: 5
              }}>
                <Text style={{
                  fontWeight: '600',
                  fontSize: 24
                }}>
                  { this.state.brandInfo.name }
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
                alignContent: 'center',
                paddingBottom: 5
              }}>
                <Text style={{
                  fontSize: 16
                }}>
                  { this.state.brandInfo.role }
                </Text>
              </View>
              { this.state.brandInfo.role !== 'Personal Brand' ?
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  alignContent: 'center',
                  paddingBottom: 5
                }}>
                  <Text>@ { this.state.brandInfo.org }</Text>
                </View>
                : null
              }
              <View style={{
                flex: 1,
                paddingTop: 15,
                paddingBottom: 25,
                paddingLeft: 15,
                paddingRight: 15
              }}>
                <View style={{
                  flexDirection: 'column'
                }}>
                  { this.state.brandInfo.contacts !== undefined ?
                    Object.keys(this.state.brandInfo.contacts).map((e, i) => {
                      return (
                        <MediaEntry
                          key={i}
                          medium={e}
                          tag={this.state.brandInfo.contacts[e]}
                        />
                      );
                    }) : <Text>This brand has no contacts</Text>
                  }
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerFirstRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 5,
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    backgroundColor: '#fff'
  },
  containerCol: {
    flex: 1,
    flexDirection: 'column'
  },
  // Profile picture
  profilePictureContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  profilePicture: {
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#424552',
    width: 100,
    height: 100
  },
  // Profile Stats
  profileStatsContainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 5
  },
  // Profile Stats Values
  profileStatsValueRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'center'
  },
  profileStatsValueCol: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  profileStatsValue: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#424552'
  },
  // Profile Stats Labels
  profileStatsLabelRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'center'
  },
  profileStatsLabelCol: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  profileStatsLabel: {
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: '300',
    color: '#777b8b'
  },
  // Edit link
  editLinkContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start'
  },
  editLink: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    fontSize: 12,
    fontWeight: '600',
    color: '#646884',
    paddingVertical: 10,
    marginLeft: 20
  },
  // User Info
  userName: {
    fontWeight: '600',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  }
});
