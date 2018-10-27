import React from 'react';
import { WebBrowser } from 'expo';
import {
  Avatar,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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

import { MonoText } from '../components/StyledText';
import LogoTitle from '../components/LogoTitle';
import UserProfile from '../components/UserProfile';
import { StyledText } from '../components/StyledText';

export default class BrandsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <TouchableOpacity
        onPress={() => { console.log("Create a brand"); }}
      >
        <Icon
          name='add'
        />
      </TouchableOpacity>
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <UserProfile
              name="Christine Duncan"
              description="Instagram fashionista and artist. Day-time HR rep @ tech company. Model, blogger, photographer in the evening. 👩🏾 💪🏾 💻 📷"
              picture="https://images.pexels.com/photos/935973/pexels-photo-935973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              brands="2"
              followers="398"
              following="509"
              editProfile={() => this.setState({visible: true})}
            />
          </View>
          <View style={styles.container}>
            <List>
              <ListItem
                roundAvatar
                avatar={{uri:"https://images.pexels.com/photos/935973/pexels-photo-935973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}
                key="1"
                title="Christine Duncan"
                subtitle="Personal Brand"
                onPress={() => { console.log("View Brand 1"); }}
              />
              <ListItem
                roundAvatar
                avatar={{uri:"https://images.pexels.com/photos/1065704/pexels-photo-1065704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}
                key="2"
                title="Christine Duncan"
                subtitle="HR Rep @ Google"
                onPress={() => { console.log("View Brand 2"); }}
              />
              <ListItem
                roundAvatar
                avatar={{uri:"https://images.pexels.com/photos/399160/pexels-photo-399160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}
                key="3"
                title="Christine"
                subtitle="Model+Blogger @ PinkUmbrella"
                onPress={() => { console.log("View Brand 3"); }}
              />
            </List>
          </View>
        </ScrollView>
        <SlidingUpPanel
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}>
          <View style={styles.container}>
            <Text>Edit Profile</Text>
            <TouchableOpacity>
              <Button title='Hide' onPress={() => this.setState({visible: false})} />
            </TouchableOpacity>
          </View>
        </SlidingUpPanel>
      </View>
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
