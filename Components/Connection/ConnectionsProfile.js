import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import colors from '../ThemeColor/ThemeColor';

export default class ConnectionsProfile extends Component {
  static options() {
    return {
      statusbar: false,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
  }

  render() {
    var profileImageUrl = this.props.profileImageUrl;
    var name = this.props.name;
    var location = this.props.location;
    var message = this.props.message;
    var fullName = this.props.fullName;
    var jobTitle = this.props.jobTitle;
    var fullDescription = this.props.fullDescription;

    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            Navigation.push(this.props.componentId, {
              component: {
                name: 'ProfileOfConnections',
                options: {
                  topBar: {
                    title: {
                      text: 'ProfileOfConnections',
                    },
                  },
                },
                passProps: {
                  passingProfileImageUrl: profileImageUrl,
                  passingFullName: fullName,
                  passingLocation: location,
                  passingJobTitle: jobTitle,
                  passingFullDescription: fullDescription,
                },
              },
            })
          }
          style={styles.profileContainer}>
          <Image style={styles.profileImage} source={profileImageUrl}></Image>
          <View>
            <Text style={styles.profileName}>
              {name}{' '}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={styles.colors}>
                  <Image
                    style={styles.tick}
                    source={require('../../assets/images/tick.png')}
                  />
                </View>
                <Image
                  style={styles.proImage}
                  source={require('../../assets/images/proBlack.png')}></Image>
              </View>
            </Text>
            <Text style={styles.profileDesc}>{location}</Text>
            <Text style={styles.profileDesc}>{message}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
ConnectionsProfile.options = {
  topBar: {
    title: {},
  },
};
const styles = StyleSheet.create({
  profileContainer: {
    width: Dimensions.get('window').width,
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
    bottom: 30,
  },
  profileImage: {
    backgroundColor: colors.primarySwitchBtnBackground,
    width: 75,
    height: 75,
    borderRadius: 100,
    margin: 10,
    padding: 10,
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.textColor,

    top: 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileDesc: {
    fontSize: 12,
    color: colors.textColor,
    top: 20,
  },
  proImage: {
    width: 22,
    height: 22,
    marginLeft: 3,
    tintColor: colors.textColor,
    resizeMode: 'contain',
  },
  colors: {
    height: 20,
    width: 20,
    backgroundColor: '#80bfff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tick: {
    height: 10,
    width: 10,
    tintColor: '#fff',
  },
});
