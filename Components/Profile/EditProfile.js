import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TextInputBase,
  Switch,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import Preview from './Preview';
import colors from '../ThemeColor/ThemeColor';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class EditProfile extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      tick: 'none',
      currentTheme: colors.getTheme(),
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              ...styles.btn,
              ...{backgroundColor: colors.primarySwitchBtnBackground},
            }}
            onPress={() =>
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
              })
            }>
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
          <View style={styles.profileContainer}>
            <TouchableOpacity style={styles.editImageBtn}>
              <Text style={styles.editImageBtnText}>Edit Images</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profile.png')}></Image>
          <Image
            style={styles.logoPro}
            source={require('../../assets/images/logoPro.png')}></Image>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Name'}
              placeholderTextColor={colors.textColor}
              style={styles.input}></TextInput>
            <TextInput
              placeholder={'Location'}
              placeholderTextColor={colors.textColor}
              style={styles.input}></TextInput>
            <TouchableOpacity style={styles.switchToPro}>
              <Image
                style={styles.proImage}
                source={require('../../assets/images/proBlack.png')}></Image>
              <Text style={styles.switchToBusinessTitle}>
                Switch to a business profile
              </Text>
              <Text style={styles.switchToBusinessText}>
                Get Business features by upgrading to pro
              </Text>
            </TouchableOpacity>
            <TextInput
              multiline={true}
              numberOfLines={5}
              textAlignVertical={'top'}
              placeholder={'Personal Bio'}
              placeholderTextColor={colors.textColor}
              collapsable={true}
              style={{
                ...styles.input,
                alignItems: 'flex-start',
              }}></TextInput>
            <View style={styles.themeContainer}>
              <Text style={styles.themeText}>
                Custom Themes {'  '}{' '}
                <Image
                  style={styles.proImage}
                  source={require('../../assets/images/proBlack.png')}></Image>
              </Text>
              <View style={styles.colorPaletContainer}>
                <TouchableOpacity
                  style={{...styles.colors, backgroundColor: '#fff'}}>
                  <Image
                    style={{...styles.tick, display: 'flex'}}
                    source={require('../../assets/images/tick.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.colors, backgroundColor: '#000'}}>
                  <Image
                    style={{...styles.tick, display: this.state.tick}}
                    source={require('../../assets/images/tick.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.colors, backgroundColor: '#ffb3d9'}}>
                  <Image
                    style={{...styles.tick, display: this.state.tick}}
                    source={require('../../assets/images/tick.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.colors, backgroundColor: '#ff6600'}}>
                  <Image
                    style={{...styles.tick, display: this.state.tick}}
                    source={require('../../assets/images/tick.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.colors, backgroundColor: '#ff9933'}}>
                  <Image
                    style={{...styles.tick, display: this.state.tick}}
                    source={require('../../assets/images/tick.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.colors, backgroundColor: '#ffcc00'}}>
                  <Image
                    style={{...styles.tick, display: this.state.tick}}
                    source={require('../../assets/images/tick.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.colors, backgroundColor: '#009933'}}>
                  <Image
                    style={{...styles.tick, display: this.state.tick}}
                    source={require('../../assets/images/tick.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.colors, backgroundColor: '#0066ff'}}>
                  <Image
                    style={{...styles.tick, display: this.state.tick}}
                    source={require('../../assets/images/tick.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.colors, backgroundColor: '#cc33ff'}}>
                  <Image
                    style={{...styles.tick, display: this.state.tick}}
                    source={require('../../assets/images/tick.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.dividerLine}></View>
              <View style={styles.colorSwitchContainer}>
                <Text style={styles.colorSwitchBtnText}>
                  Color Your Link Icons
                </Text>
                <Switch
                  onPress={() =>
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
                    })
                  }
                  style={styles.colorSwitchBtn}
                  trackColor={{true: 'gray', false: 'darkgray'}}></Switch>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.saveProfileContainer}>
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
            style={{
              ...styles.previewProfileBtn,
              marginBottom: 10,
            }}>
            <Text style={styles.previewProfileBtnText}>
              Preview Your Personal Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Navigation.pop(this.props.componentId)}
            style={styles.saveProfileBtn}>
            <Text style={styles.saveProfileBtnText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
Navigation.registerComponent('Preview', () => Preview);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },

  scroll: {
    width: '100%',
    height: '85%',
    backgroundColor: colors.backgroundColor,
  },
  btn: {
    width: '85%',
    height: 50,
    borderRadius: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginTop: 40,
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
    width: 20,
    height: 20,
    marginBottom: 10,
    tintColor: colors.textColor,
    resizeMode: 'contain',
  },
  proReversImage: {
    width: 20,
    height: 20,
    marginBottom: 10,
    tintColor: colors.backgroundColor,
  },
  profileContainer: {
    width: '85%',
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editImageBtn: {
    position: 'absolute',
    top: 10,
    right: 20,
    borderRadius: 15,
    height: 30,
    backgroundColor: colors.backgroundColor,
    padding: 5,
    paddingHorizontal: 20,
  },
  editImageBtnText: {
    color: colors.textColor,
  },
  profileImage: {
    backgroundColor: '#f7f7f7',
    width: 170,
    height: 170,
    borderWidth: 5,
    borderColor: colors.backgroundColor,
    borderRadius: 85,
    margin: 10,
    padding: 10,
    resizeMode: 'cover',
    position: 'relative',
    top: -100,
    marginBottom: -80,
  },
  logoPro: {
    width: 65,
    height: 65,
    position: 'relative',
    top: -105,
    left: 80,
    borderWidth: 5,
    borderRadius: 100,
    borderColor: colors.backgroundColor,
  },
  inputContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 30,
    top: -30,
  },
  input: {
    backgroundColor: colors.addingLinksTopContainer,
    width: '85%',
    height: 50,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
    color: colors.textColor,
  },

  saveProfileContainer: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    flexDirection: 'column',
  },
  saveProfileBtn: {
    backgroundColor: colors.textColor,
    paddingVertical: 10,
    width: '80%',
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
  },
  saveProfileBtnText: {
    color: colors.backgroundColor,
    fontSize: 18,
  },
  previewProfileBtn: {
    backgroundColor: colors.grayBtn,
    paddingVertical: 10,
    width: '80%',
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
  },
  previewProfileBtnText: {
    color: colors.grayBtnText,
    fontSize: 18,
  },
  saveProfileImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  switchToPro: {
    height: 100,
    width: '85%',
    backgroundColor: colors.addingLinksTopContainer,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  switchToBusinessTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textColor,
  },
  switchToBusinessText: {
    fontSize: 14,
    color: colors.textColor,
  },
  themeContainer: {
    height: 170,
    width: '85%',
    backgroundColor: colors.addingLinksTopContainer,
    borderRadius: 10,
    padding: 10,
  },
  themeText: {
    fontSize: 14,
    height: 30,
    marginBottom: 20,
    color: colors.textColor,
  },
  colorPaletContainer: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  colors: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tick: {
    height: 25,
    width: 25,
  },
  dividerLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
  colorSwitchContainer: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  colorSwitchBtnText: {
    color: colors.textColor,
    flex: 1,
    alignSelf: 'flex-start',
  },
  colorSwitchBtn: {
    flex: 1,
    alignSelf: 'flex-end',
  },
});
