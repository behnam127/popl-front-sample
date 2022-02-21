import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import Preview from './Preview';
import AddLinks from './AddLinks/AddLinks';
import AddingLinkPage from './AddLinks/AddingLinkPage';
import UpgradePopup from '../UpgradeToPro/UpgradePopup';
import EditProfile from './EditProfile';
import PoplDirect from './PoplDirect';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../ThemeColor/ThemeColor';
import ThemeManager from 'react-native-color-theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

export default class PersonalProfile extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      SharingPersonal: false,
      SharingPersonalText: 'Sharing Personal',
      currentTheme: colors.getTheme(),
      offsetY: new Animated.Value(0),
      token: '',
    };
  }

  container = () => {
    return {};
  };

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
    this.addLinkAnimation();
    try {
      this.getTokenData();
    } catch (err) {
      console.log(err);
    }
  }

  getTokenData = async () => {
    try {
      const TokenValue = await AsyncStorage.getItem('@Token_ID');
      this.setState({token: TokenValue});
      return TokenValue;
    } catch (e) {
      console.log(e);
    }
  };

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

  async changeTheme() {
    try {
      if (colors.getTheme() === 'blackTheme') {
        colors.setTheme('whiteTheme');
      } else {
        colors.setTheme('blackTheme');
      }
      await AsyncStorage.setState({currentTheme: colors.getTheme()});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <TouchableOpacity
          onPress={() =>
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Preview',
                options: {
                  bottomTabs: {
                    visible: false,
                  },
                  topBar: {
                    title: {
                      text: 'Preview',
                    },
                  },
                },
              },
            })
          }
          style={styles.headerPreview}>
          <Text style={styles.previewText}>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.btn,
            ...{backgroundColor: colors.primarySwitchBtnBackground},
          }}
          onPress={() => {
            // this.changeTheme();
            // RNRestart.Restart();

            Navigation.showModal({
              stack: {
                children: [
                  {
                    component: {
                      name: 'UpgradePopup',
                      options: {
                        modalPresentationStyle: 'overCurrentContext',
                        layout: {
                          backgroundColor: 'rgba(0,0,0,0.5)',
                        },

                        topBar: {
                          title: {
                            text: 'UpgradePopup',
                          },
                        },
                      },
                    },
                  },
                ],
              },
            });
          }}>
          <TouchableOpacity
            onPress={() =>
              Navigation.pop(this.props.componentId, {
                component: {
                  name: 'PersonalProfile',
                  options: {
                    topBar: {
                      title: {
                        text: 'PersonalProfile',
                      },
                    },
                  },
                },
              })
            }
            style={styles.btnInside}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.btnInsideText2}>Personal</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: '5%',
              alignItems: 'center',
            }}>
            <Text style={styles.btnText}>
              Business{'  '}
              <Image
                style={styles.proImage}
                source={require('../../assets/images/proBlack.png')}></Image>
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profile.png')}></Image>
          <Text style={styles.profileName}>Behnam</Text>
        </TouchableOpacity>
        <View style={styles.profileBtnRow}>
          <TouchableOpacity
            style={{...styles.profileBtn}}
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'EditProfile',
                  options: {
                    topBar: {
                      title: {
                        text: 'EditProfile',
                      },
                    },
                  },
                },
              })
            }>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.profileBtn}}
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
            }>
            <Text>Ad Links</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sharingPersonalRow}>
          <View style={{flex: 3}}>
            <Text style={styles.sharingPersonalText}>
              {this.state.SharingPersonalText}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'PoplDirect',
                  options: {
                    topBar: {
                      title: {
                        text: 'PoplDirect',
                      },
                    },
                  },
                },
              })
            }
            style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={styles.infoImage}
              source={require('../../assets/images/info.png')}></Image>
          </TouchableOpacity>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <Text style={styles.sharingPersonalText}>Direct</Text>
            <Switch
              trackColor={{true: 'gray', false: 'darkgray'}}
              style={styles.switch}
              value={this.state.SharingPersonal}
              onChange={() =>
                this.state.SharingPersonal
                  ? this.setState({
                      SharingPersonal: false,
                      SharingPersonalText: 'Sharing Personal',
                    })
                  : this.setState({
                      SharingPersonal: true,
                      SharingPersonalText: 'Sharing Direct',
                    })
              }></Switch>
          </View>
        </View>
        {/* ///SHOW TOKEN/// */}
        {/* <Text>{this.state.token}</Text> */}
        <View style={styles.scrollContainer}>
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              height: 300,
              width: '100%',
            }}>
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
              style={styles.addLinksBtn}>
              <Text style={styles.addLinksName}>
                Add Links {'  '}
                <Image
                  source={require('../../assets/images/add.png')}
                  style={styles.addIcnonImage}></Image>
              </Text>
            </TouchableOpacity>

            <View style={styles.socialsImgContainer}>
              <LinearGradient
                style={{
                  width: '100%',
                  height: 100,
                  zIndex: 10,
                  position: 'absolute',
                }}
                colors={[
                  colors.primaryGradiantShadow,
                  colors.secondaryGradiantShadow,
                ]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}></LinearGradient>
              <Animated.View
                style={{transform: [{translateY: this.state.offsetY}]}}>
                <Image
                  style={styles.socialsImg}
                  source={require('../../assets/images/socialsImg.png')}></Image>
              </Animated.View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: colors.statusBarColor,
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
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  headerPreview: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 20 : 0,
    right: 0,
    marginTop: 20,
    marginRight: 10,
  },
  previewText: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.textColor,
  },
  btn: {
    width: '85%',
    height: 50,
    borderRadius: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginTop: 80,
    borderWidth: 1,
    borderColor: colors.simpleBtnborderColor,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primarySwitchBtnText,
    marginLeft: '10%',
  },
  btnInside: {
    width: '50%',
    height: '100%',
    backgroundColor: colors.secondarySwitchBtnBackground,
    borderRadius: 60,
    borderColor: '#bbb',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnInsideText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  btnInsideText2: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.secondarySwitchBtnText,
  },
  proImage: {
    width: 22,
    height: 22,
    tintColor: colors.textColor,
    resizeMode: 'contain',
  },
  personalProfileSwich: {
    width: '100%',
    height: 50,
    resizeMode: 'cover',
  },
  profileContainer: {
    width: '85%',
    height: 65,
    flexDirection: 'row',
  },
  profileImage: {
    backgroundColor: '#ebebeb',
    width: 85,
    height: 85,
    borderRadius: 42.5,
    margin: 10,
    padding: 10,
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colors.textColor,
    top: 20,
  },
  profileBtnRow: {
    width: '85%',
    height: 100,
    flexDirection: 'row',
  },
  profileBtn: {
    width: '45%',
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 0.5,
    marginTop: 80,
    backgroundColor: colors.simpleBtnBackground,
  },
  sharingPersonalRow: {
    flexDirection: 'row',
    margin: 20,
    marginTop: Platform.OS === 'ios' ? 70 : 50,
    padding: 10,
  },
  sharingPersonalText: {
    fontSize: 18,
    color: colors.textColor,
  },
  infoImage: {
    width: 30,
    height: 30,
    tintColor: colors.textColor,
  },
  switch: {
    marginLeft: 5,
  },
  scrollContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0,
  },
  addLinksBtn: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    zIndex: 5,
    backgroundColor: colors.backgroundColor,
  },
  addLinksName: {
    fontSize: 22,
    top: 0,
    color: colors.addLinkTextColor,
  },
  addIcnonImage: {
    height: 22,
    width: 22,
    top: Platform.OS === 'ios' ? 5 : 0,
    tintColor: colors.addLinkTextColor,
  },
  whiteShadow: {
    position: 'absolute',
    width: '100%',
    height: 10,
    backgroundColor: '#000',
    zIndex: 10,
  },
  socialsImgContainer: {
    width: '100%',
    height: '100%',
  },
  socialsImg: {
    width: '100%',
    height: '100%',
  },
});
