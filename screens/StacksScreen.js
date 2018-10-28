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

import Drawer from 'react-native-drawer';

export default class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Stacks',
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
      sidePanelOpen: false
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ toggleSidePanel: () => { this._toggleSidePanel() }});
  }

  _toggleSidePanel() {
    this.setState({
      sidePanelOpen: !this.state.sidePanelOpen
    });
  }

  render() {
    return (
      <Drawer
        open={this.state.sidePanelOpen}
        type="static"
        content={<Text>Add new stack</Text>}
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
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15
  },
});
