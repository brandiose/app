import React from 'react';
import { WebBrowser } from 'expo';
import {
  Avatar,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button,
  Header,
  Icon,
  List,
  ListItem
} from 'react-native-elements';

import SlidingUpPanel from 'rn-sliding-up-panel';
import Drawer from 'react-native-drawer';

import Utils from '../constants/Utils';
import { MonoText } from '../components/StyledText';
import LogoTitle from '../components/LogoTitle';
import UserProfile from '../components/UserProfile';
import { StyledText } from '../components/StyledText';

export default class BrandsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Icon
          name='add'
          onPress={navigation.getParam('toggleSidePanel')}
        />
      )
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      sidePanelOpen: false,
      userInfo: {},
      userBrands: []
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ toggleSidePanel: () => { this._toggleSidePanel() }});
    this._getUserData();
  }

  _getUserData() {
    let userId = '5bd50719d0d0924a23b2126f';

    // Get UserInfo
    fetch(
      Utils.api + 'user/' + userId,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then((response) => response.json())
    .then((response) => {
      console.log("_getUserData.userInfo", response);
      this.setState({
        userInfo: response.body[0]
      });
    })
    .catch((error) => {
      console.error(error);
    });

    // Get UserBrands
    fetch(
      Utils.api + 'user/' + userId + '/brand',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then((response) => response.json())
    .then((response) => {
      console.log("_getUserData.userBrands", response);
      this.setState({
        userBrands: response.body
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _toggleSidePanel() {
    this.setState({
      sidePanelOpen: !this.state.sidePanelOpen
    });
  }

  render() {
    console.log("BrandsScreen.render", this.state.userInfo);
    return (
      <Drawer
        open={this.state.sidePanelOpen}
        type="static"
        content={<Text>Add new Brand</Text>}
        tapToClose={true}
        // openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        // closedDrawerOffset={-3}
        side={'right'}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.getStartedContainer}>
              <UserProfile
                name={ this.state.userInfo.name }
                description={ this.state.userInfo.description }
                picture={ this.state.userInfo.picture }
                brands={ this.state.userBrands.length }
                followers="398"
                following="509"
                editProfile={() => this.setState({visible: true})}
              />
            </View>
            <View style={styles.container}>
              <List>
                {this.state.userBrands !== undefined ?
                  this.state.userBrands.map((e, i) => (
                    <ListItem
                      roundAvatar
                      avatar={{uri:e.picture}}
                      key={i}
                      title={e.name}
                      subtitle={e.role === "Personal Brand" ? e.role : e.role + " @ " + e.org}
                      onPress={() => { console.log("View Brand " + e["_id"]); }}
                    />
                  )) : null
                }
              </List>
            </View>
          </ScrollView>
          <SlidingUpPanel
            visible={this.state.visible}
            onRequestClose={() => this.setState({visible: false})}>
            <View style={styles.container}>
              <Text>Edit Profile</Text>
              <Button title='Hide' onPress={() => this.setState({visible: false})} />
            </View>
          </SlidingUpPanel>
        </View>
      </Drawer>
    );
  }
//   static navigationOptions = {
//     // header: null,
//     title: "brandiose"
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//         {/*
//         <Header
//           centerComponent={{ text: 'brandiose' }}
//           rightComponent={{ icon: 'add-circle-outline' }}
//           backgroundColor={ '#fff' }
//         />
//         */}
//         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//           <View style={styles.welcomeContainer}>
//             <Image
//               source={
//                 __DEV__
//                   ? require('../assets/images/robot-dev.png')
//                   : require('../assets/images/robot-prod.png')
//               }
//               style={styles.welcomeImage}
//             />
//           </View>
//
//           <View style={styles.getStartedContainer}>
//             {this._maybeRenderDevelopmentModeWarning()}
//
//             <Text style={styles.getStartedText}>Get started by opening</Text>
//
//             <View style={[styles.codeHighlightContainer, styles.brandsScreenFilename]}>
//               <MonoText style={styles.codeHighlightText}>screens/BrandsScreen.js</MonoText>
//             </View>
//
//             <Text style={styles.getStartedText}>
//               Change this text and your app did automatically reloaded.
//             </Text>
//           </View>
//
//           <View style={styles.helpContainer}>
//             <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
//               <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//
//         <View style={styles.tabBarInfoContainer}>
//           <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>
//
//           <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
//             <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
//           </View>
//         </View>
//       </View>
//     );
//   }
//
//   _maybeRenderDevelopmentModeWarning() {
//     if (__DEV__) {
//       const learnMoreButton = (
//         <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
//           Learn more
//         </Text>
//       );
//
//       return (
//         <Text style={styles.developmentModeText}>
//           Development mode is enabled, your app will be slower but you can use useful development
//           tools. {learnMoreButton}
//         </Text>
//       );
//     } else {
//       return (
//         <Text style={styles.developmentModeText}>
//           You are not in development mode, your app will run at full speed.
//         </Text>
//       );
//     }
//   }
//
//   _handleLearnMorePress = () => {
//     WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
//   };
//
//   _handleHelpPress = () => {
//     WebBrowser.openBrowserAsync(
//       'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
//     );
//   };
}
//
const styles = StyleSheet.create({
  logoImage: {
    width: 110,
    height: 40
  },
  addIcon: {
    borderWidth: 5,
    borderColor: '#000',
    borderRadius: 2
  },
// });
// const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    // paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    // alignItems: 'center',
    // marginHorizontal: 50,
  },
  brandsScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
