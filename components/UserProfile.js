import React from 'react';
import {
  Avatar,
  Text
} from 'react-native-elements';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

export default class UserProfile extends React.Component {
  render() {
    return (
      <View style={styles.containerCol}>
        <View style={styles.containerFirstRow}>
          <View style={styles.profilePictureContainer}>
            <Avatar
              large
              rounded
              imageProps={{
                resizeMode: 'cover',
                borderWidth: 3,
                borderColor: '#424552'
              }}
              source={{ uri: this.props.picture }}
            />
          </View>
          <View style={styles.profileStatsContainer}>
            <View style={styles.profileStatsValueRow}>
              <View style={styles.profileStatsValueCol}>
                <Text style={styles.profileStatsValue}>{ this.props.brands }</Text>
              </View>
              <View style={styles.profileStatsValueCol}>
                <Text style={styles.profileStatsValue}>{ this.props.followers }</Text>
              </View>
              <View style={styles.profileStatsValueCol}>
                <Text style={styles.profileStatsValue}>{ this.props.following }</Text>
              </View>
            </View>
            <View style={styles.profileStatsLabelRow}>
              <View style={styles.profileStatsLabelCol}>
                <Text style={styles.profileStatsLabel}>Brands</Text>
              </View>
              <View style={styles.profileStatsLabelCol}>
                <Text style={styles.profileStatsLabel}>Followers</Text>
              </View>
              <View style={styles.profileStatsLabelCol}>
                <Text style={styles.profileStatsLabel}>Following</Text>
              </View>
            </View>
            <View style={styles.containerRow}>
              <View style={styles.editLinkContainer}>
                <TouchableOpacity onPress={ this.props.editProfile }>
                  <Text style={styles.editLink}>Edit Profile...</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerRow}>
          <Text style={styles.userName}>{ this.props.name }</Text>
        </View>
        <View style={styles.containerRow}>
          <Text>{ this.props.description }</Text>
        </View>
      </View>
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
    backgroundColor: '#fff',
    paddingBottom: 5
  },
  containerCol: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15
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
    color: '#2e78b7',
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
