import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import MyAccounts from './MyAccounts';
import ActivateDevice from './ActivateDevice';
import HowToPop from './HowToPop/HowToPop';
import ProfileLink from './ProfileLink';
import LeadCaptureMode from './LeadCaptureMode';
import UpgradePopup from '../UpgradeToPro/UpgradePopup';
import CompleteYourProfile from './CompleteYourProfile/CompleteYourProfile';
import colors from '../ThemeColor/ThemeColor';

export default class SettingPage extends Component {
  static options() {
    return {};
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
    return (
      <View style={styles.container}>
        <Header />
        <View
          style={{
            alignItems: 'flex-start',
            width: '100%',
            height: 140,
            marginTop: 10,
            zIndex: 5,
          }}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <ScrollView
          contentContainerStyle={{alignItems: 'center'}}
          style={styles.scroll}>
          {/* accounts part */}
          <View style={styles.accountsContainer}>
            <View style={styles.accountsContainerHeader}>
              <Text style={styles.accountsContainerHeaderText}>
                My Accounts
              </Text>
              <Text style={styles.accountsContainerHeaderNumber}>1</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'MyAccounts',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'MyAccounts',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.accountsBtn}>
              <Image
                style={styles.accountsBtnImage}
                source={require('../../assets/images/profile.png')}
              />
              <Text style={styles.accountsBtnText}>Behnam</Text>
              <Image
                style={{
                  flex: 1,
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  backgroundColor: colors.addLinksBackgroundColor,
                  tintColor: colors.textColor,
                }}
                source={require('../../assets/images/down.png')}></Image>
            </TouchableOpacity>
          </View>
          {/* second part */}
          <View style={styles.secondPartContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'ActivateDevice',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'ActivateDevice',
                        },
                      },
                    },
                  },
                })
              }
              style={{...styles.BtnContainer, marginBottom: 20}}>
              <Text style={styles.accountsContainerHeaderText}>
                Activate a Popl Device
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'HowToPop',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'HowToPop',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.BtnContainer}>
              <Text style={styles.accountsContainerHeaderText}>How to Pop</Text>
            </TouchableOpacity>
          </View>
          {/* third part */}

          {/* go pro */}
          <View style={styles.signOut}>
            <TouchableOpacity
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
              style={styles.BtnContainer}>
              <Text style={styles.accountsContainerHeaderText}>Go Pro</Text>
            </TouchableOpacity>
          </View>
          {/* lead Capture */}
          <TouchableOpacity
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
            style={styles.leadCaptureRow}>
            <View style={{flex: 3}}>
              <Text style={styles.leadCaptureText}>Lead Capture Mode</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'LeadCaptureMode',
                      options: {
                        topBar: {
                          title: {
                            text: 'LeadCaptureMode',
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
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Switch
                style={styles.switch}
                trackColor={{true: 'gray', false: 'darkgray'}}></Switch>
            </View>
          </TouchableOpacity>
          {/* complete your profile */}
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'CompleteYourProfile',
                  options: {
                    topBar: {
                      title: {
                        text: 'CompleteYourProfile',
                      },
                    },
                  },
                },
              })
            }
            style={styles.completeProfile}>
            <View style={styles.completeProfileHeader}>
              <Text style={styles.completeProfileHeaderText}>
                Complete Your Profile
              </Text>
            </View>
            <View style={styles.completeProfileSliderContainer}>
              <Slider
                minimumTrackTintColor="#000"
                minim
                maximumTrackTintColor="#f6f6f6"
                thumbTintColor="#f2f2f2"
                style={styles.completeProfileSlider}></Slider>
            </View>

            <View style={styles.completeProfileContainer}>
              <Text style={styles.completeProfileText}>0 Complete</Text>
              <Text style={styles.completeProfileSerial}>0/7 Task Done</Text>
            </View>
          </TouchableOpacity>
          {/* profile link */}
          <View style={styles.profileLink}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'ProfileLink',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'ProfileLink',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.profileLinkContainer}>
              <Text style={styles.profileLinkText}>Profile Link</Text>
              <Text style={styles.profileLinkSerial}>8LHYPmV</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.getPopleDevice}>
            <TouchableOpacity style={styles.BtnContainer}>
              <Text style={styles.accountsContainerHeaderText}>
                Get a Popl Device
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signOut}>
            <TouchableOpacity style={styles.BtnContainer}>
              <Text style={styles.accountsContainerHeaderText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.version}>
            <Text style={styles.versionText}>Version 4.0.8</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
Navigation.registerComponent('MyAccounts', () => MyAccounts);
Navigation.registerComponent('UpgradePopup', () => UpgradePopup);
Navigation.registerComponent('ActivateDevice', () => ActivateDevice);
Navigation.registerComponent('HowToPop', () => HowToPop);
Navigation.registerComponent('ProfileLink', () => ProfileLink);
Navigation.registerComponent('LeadCaptureMode', () => LeadCaptureMode);
Navigation.registerComponent('CompleteYourProfile', () => CompleteYourProfile);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: colors.backgroundColor,
  },
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 30,
    top: 50,
    fontWeight: '800',
    color: colors.textColor,
    margin: 20,
    marginLeft: 35,
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
  accountsContainer: {
    width: '90%',
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: colors.tripleBtnBackground,
    padding: 20,
    borderRadius: 10,
  },
  accountsContainerHeader: {
    flexDirection: 'row',
  },
  accountsContainerHeaderText: {
    flex: 9,
    fontSize: 15,
    color: colors.textColor,
    marginLeft: 5,
    padding: 0,
  },
  accountsContainerHeaderNumber: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: colors.textColor,
  },
  accountsBtn: {
    width: '100%',
    height: 40,
    backgroundColor: colors.addLinksBackgroundColor,
    top: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  accountsBtnImage: {
    flex: 1,
    width: 30,
    height: 30,
  },
  accountsBtnText: {
    fontWeight: '600',
    color: colors.textColor,
    marginLeft: 10,
    fontSize: 16,
    flex: 8,
  },
  secondPartContainer: {
    width: '90%',
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: colors.tripleBtnBackground,
    padding: 20,
    borderRadius: 10,
  },
  BtnContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  thirdPartContainer: {
    width: '90%',
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: colors.tripleBtnBackground,
    padding: 20,
    borderRadius: 10,
  },
  leadCaptureRow: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: colors.tripleBtnBackground,
    borderRadius: 10,
    padding: 20,
  },
  leadCaptureText: {
    fontSize: 15,
    color: colors.textColor,
    marginLeft: 10,
  },
  infoImage: {
    width: 30,
    height: 30,
    tintColor: colors.textColor,
  },
  switch: {
    marginLeft: 5,
  },
  profileLinkContainer: {
    flexDirection: 'row',
  },
  profileLinkText: {
    flex: 5,
    fontSize: 15,
    color: colors.textColor,
    marginLeft: 5,
    padding: 0,
  },
  profileLinkSerial: {
    flex: 3,
    fontSize: 18,
    fontWeight: '600',
    color: colors.textColor,
  },
  completeProfile: {
    width: '90%',
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: colors.tripleBtnBackground,
    padding: 20,
    borderRadius: 10,
  },
  completeProfileHeader: {
    flexDirection: 'row',
  },
  completeProfileHeaderText: {
    flex: 9,
    fontSize: 15,
    color: colors.textColor,
    marginLeft: 5,
    padding: 0,
  },
  completeProfileSliderContainer: {
    width: '100%',
    height: 20,
    backgroundColor: colors.tripleBtnBackground,
    top: 20,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  completeProfileSlider: {
    width: '100%',
    height: 30,
  },
  completeProfileContainer: {
    flexDirection: 'row',
    top: 10,
  },
  completeProfileText: {
    flex: 5,
    fontSize: 15,
    color: colors.textColor,
    marginLeft: 5,
    padding: 0,
  },
  completeProfileSerial: {
    flex: 3,
    fontSize: 15,
    color: colors.textColor,
  },

  profileLink: {
    width: '90%',
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: colors.tripleBtnBackground,
    padding: 20,
    borderRadius: 10,
  },
  getPopleDevice: {
    width: '90%',
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: colors.tripleBtnBackground,
    padding: 20,
    borderRadius: 10,
  },
  signOut: {
    width: '90%',
    marginHorizontal: 20,
    backgroundColor: colors.tripleBtnBackground,
    padding: 20,
    margin: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  version: {
    width: '90%',
    marginHorizontal: 20,
    margin: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  versionText: {
    flex: 9,
    fontSize: 15,
    color: colors.addLinkTextColor,
    marginLeft: 5,
    padding: 0,
  },
});
