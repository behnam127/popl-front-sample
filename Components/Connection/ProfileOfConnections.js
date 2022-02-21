import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import colors from '../ThemeColor/ThemeColor';
import connections from '../Connection/Connections';
import ConnectionsProfile from '../Connection/ConnectionsProfile';

export default class ProfileOfConnections extends Component {
  static options(props) {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      offsetY: new Animated.Value(0),
      passedProfileImageURl: this.props.passingProfileImageUrl,
      passedFullName: this.props.passingFullName,
      passedLocation: this.props.passingLocation,
      passedJobTitle: this.props.passingJobTitle,
      passedFullDescription: this.props.passingFullDescription,
    };
  }

  componentDidMount() {
    this.addLinkAnimation();
  }

  addLinkAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.offsetY, {
          toValue: -100,
          duration: 10000,
          delay: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.offsetY, {
          toValue: 0,
          duration: 10000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 99999,
      },
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => Navigation.pop(this.props.componentId)}
            style={styles.backBtn}>
            <Image
              style={styles.backBtn}
              source={require('../../assets/images/back.png')}></Image>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{alignItems: 'center'}}>
          <View style={styles.profileContainer}>
            <Image
              style={styles.proImage}
              source={require('../../assets/images/proBlack.png')}
            />
          </View>
          <Image
            style={styles.profileImage}
            source={this.state.passedProfileImageURl}></Image>
          <Text style={styles.profileName}>{this.state.passedFullName}</Text>
          <Text style={styles.profileLocation}>
            {this.state.passedLocation}
          </Text>
          <Text style={styles.profileJobTitle}>
            {this.state.passedJobTitle}
          </Text>
          <Text style={styles.profileDescription}>
            {this.state.passedFullDescription}
          </Text>
          <View style={styles.contactWithMeContainer}>
            <TouchableOpacity style={styles.contactWithMeBtn}>
              <Text style={styles.contactWithMeBtnText}>Connect With Me</Text>
            </TouchableOpacity>
            <Image
              style={styles.contactWithMeImage}
              source={require('../../assets/images/addContact.png')}></Image>
          </View>
          <View style={styles.scrollContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'AddLinks',
                    options: {
                      topBar: {
                        title: {
                          text: 'AddLinks',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.addLinksBtn}></TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#fff',
  },
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    height: 80,
  },
  backBtn: {
    width: 30,
    height: 30,
    top: Platform.OS === 'ios' ? 25 : 10,
    marginLeft: 10,
    flex: 1,
    alignItems: 'flex-start',
    zIndex: 5,
    tintColor: colors.textColor,
  },
  scroll: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  profileContainer: {
    width: '85%',
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  proImage: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: 15,
    left: 15,
    resizeMode: 'contain',
  },
  profileImage: {
    backgroundColor: '#f7f7f7',
    width: 170,
    height: 170,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 85,
    margin: 10,
    padding: 10,
    resizeMode: 'cover',
    position: 'relative',
    top: -100,
    marginBottom: -80,
  },
  profileName: {
    fontSize: 22,
    color: '#000',
  },
  profileJobTitle: {
    fontSize: 14,
    color: '#707070',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  profileLocation: {
    fontSize: 14,
    color: '#707070',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  profileDescription: {
    fontSize: 14,
    color: '#707070',
    paddingHorizontal: 20,
    paddingTop: 20,
    textAlign: 'center',
  },
  contactWithMeContainer: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  contactWithMeBtn: {
    backgroundColor: '#000',
    paddingVertical: 20,
    width: '55%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,

    marginHorizontal: 20,
  },
  contactWithMeBtnText: {
    color: '#fff',
    fontSize: 18,
  },
  contactWithMeImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});
