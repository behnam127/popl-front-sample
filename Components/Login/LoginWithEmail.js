import React, {Component} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Spinner from 'react-native-spinkit';
import * as functions from '../Globals/functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
// import messaging from '@react-native-firebase/messaging';

import {Navigation} from 'react-native-navigation';
import colors from '../ThemeColor/ThemeColor';
import Styles from '../Profile/AddLinks/Styles';
import axios from 'axios';

import * as packageJson from './../../package.json';

export default class LoginWithEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      password: '',
      emailOrPhone: '',
      message: '',
      token: '',
      loading: false,
      showToken: '',
      btnDisable: false,
      // deviceName: '',
      // deviceID: '',
      // deviceOs: '',
      // deviceOsVersion: '',
      // appVersion: '',
      // fcmToken: '',
    };
  }

  componentDidMount() {
    this.deviceInfo();
  }

  storeTokenData = async TokenValue => {
    try {
      await AsyncStorage.setItem('@Token_ID', TokenValue);
    } catch (er) {
      console.log(er);
    }
  };

  // async deviceInfo() {
  //   this.setState({
  //     deviceName: await DeviceInfo.getDeviceName(),
  //     deviceID: await DeviceInfo.getUniqueId(),
  //     deviceOs: await Platform.OS,
  //     deviceOsVersion: await DeviceInfo.getSystemVersion(),
  //     appVersion: packageJson.version,
  //     // messaging()
  //     //     .then(Ftoken => {
  //     //       fcmToken = Ftoken;
  //     //     })
  //   });
  // }

  async deviceInfo() {
    try {
      var {
        deviceName,
        deviceID,
        deviceOs,
        deviceOsVersion,
        appVersion,
        fcmToken,
      } = '';
      deviceName = await DeviceInfo.getDeviceName();
      deviceID = await DeviceInfo.getUniqueId();
      deviceOs = await Platform.OS;
      deviceOsVersion = await DeviceInfo.getSystemVersion();
      appVersion = packageJson.version;
      // await messaging().then(token => {
      //   fcmToken = token;
      // });
      this.setState({
        deviceName,
        deviceID,
        deviceOs,
        deviceOsVersion,
        appVersion,
        fcmToken,
      });
    } catch (error) {
      console.log(error);
    }
  }

  postLoginInfo() {
    axios
      .post(
        'https:...........................',
        {
          ........
         
        },
        {
          headers: {
           ......
          },
        },
      )
      .then(response => {
        console.log(response.data);

        if (!response.data.hasError) {
          this.setState({
            token: response.data.result.token,
            btnDisable: false,
            loading: false,
            message: '',
          });
          this.storeTokenData(response.data.result.token);

          Navigation.setRoot({
            root: {
              bottomTabs: {
                options: {
                  bottomTab: {},
                },
                children: [
                  {
                    stack: {
                      id: 'FIRST_TAB',
                      children: [
                        {
                          component: {
                            id: 'FIRST_SCREEN',
                            name: 'PersonalProfile',
                          },
                        },
                      ],
                      options: {
                        bottomTab: {
                          icon: require('../../assets/images/person.png'),
                          text: 'Home',
                        },
                      },
                    },
                  },
                  {
                    stack: {
                      id: 'SECOND_TAB',
                      children: [
                        {
                          component: {
                            id: 'SECOND_SCREEN',
                            name: 'Connections',
                          },
                        },
                      ],
                      options: {
                        bottomTab: {
                          icon: require('../../assets/images/connections.png'),
                          text: 'Connections',
                        },
                      },
                    },
                  },
                  {
                    stack: {
                      id: 'THIRD_TAB',
                      children: [
                        {
                          component: {
                            id: 'THIRD_SCREEN',
                            name: 'QrCode',
                          },
                        },
                      ],
                      options: {
                        bottomTab: {
                          icon: require('../../assets/images/qr.png'),

                          text: 'Share',
                        },
                      },
                    },
                  },
                  {
                    stack: {
                      id: 'FORTH_TAB',
                      children: [
                        {
                          component: {
                            id: 'FORTH_SCREEN',
                            name: 'Insights',
                          },
                        },
                      ],
                      options: {
                        bottomTab: {
                          icon: require('../../assets/images/chart.png'),
                          text: 'Insights',
                        },
                      },
                    },
                  },
                  {
                    stack: {
                      id: 'FIFTH_TAB',
                      children: [
                        {
                          component: {
                            id: 'FIFTH_SCREEN',
                            name: 'SettingPage',
                          },
                        },
                      ],
                      options: {
                        bottomTab: {
                          icon: require('../../assets/images/dots.png'),
                          text: 'Settings',
                        },
                      },
                    },
                  },
                ],
              },
            },
          });
        } else if (response.data.hasError) {
          this.setState({
            message: response.data.message[0].text,
            loading: false,
            btnDisable: false,
          });
        }
      })
      .catch(error => {
        this.setState({
          btnDisable: false,
          loading: false,
          // message: '',
        });
        if (error.response.status == 422) {
          console.log(error.response);
          this.setState({
            message: 'Check your Phone or Email!',
            loading: false,
            btnDisable: false,
          });
        } else {
          this.setState({
            message: 'Netwok Error!',
            loading: false,
            btnDisable: false,
          });
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.signupText}>Welcome Back</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="email-address"
            placeholder={'Email or Phone'}
            value={this.state.emailOrPhone}
            placeholderTextColor="#ccccd0"
            onChangeText={emailOrPhone => this.setState({emailOrPhone})}
            style={styles.input}></TextInput>
          <TextInput
            placeholder={'Password'}
            style={styles.input}
            secureTextEntry
            placeholderTextColor="#ccccd0"
            onChangeText={password => this.setState({password})}></TextInput>
        </View>
        <Text style={styles.messageText}>{this.state.message}</Text>
        <TouchableOpacity
          onPress={() => {
            if (this.state.emailOrPhone == '') {
              alert('Email or Phone number must be Entered!');
            } else {
              Alert.alert(
                '',
                'Is this correct?\n' + this.state.emailOrPhone,

                [
                  {
                    text: 'Yes',
                    onPress: () =>
                      Navigation.push(this.props.componentId, {
                        component: {
                          name: 'LoginOTP',
                          options: {
                            layout: {
                              backgroundColor: '#fff',
                            },
                            topBar: {
                              title: {
                                text: 'LoginOTP',
                              },
                            },
                          },
                          passProps: {
                            passedPhoneOrEmail: this.state.emailOrPhone,
                          },
                        },
                      }),
                  },
                  {text: 'No', onPress: () => console.log('No Pressed')},
                ],
                {cancelable: false},
              );
            }
          }}
          style={styles.LWPass}>
          <Text style={styles.header}>Login Without Password</Text>
        </TouchableOpacity>
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btn}
            disabled={this.state.btnDisable}
            onPress={() => {
              this.setState({loading: true, btnDisable: true, message: ''});
              if (this.state.emailOrPhone == '' || this.state.password == '') {
                this.setState({
                  loading: false,
                  btnDisable: false,
                  message: 'One or more field is empty!',
                });
              } else {
                this.setState({loading: true, btnDisable: true, message: ''});
                this.postLoginInfo();
              }
            }}>
            <Text style={styles.btntext}>Log In</Text>
            <Spinner
              isVisible={this.state.loading}
              color="#ccc"
              size={25}
              type="Circle"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.setState({showToken: this.state.token});
            }}>
            <Text style={styles.btntext}>Show Stored TOKEN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.messageText}>{this.state.showToken}</Text>
      </View>
    );
  }
}

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: colors.backgroundColor,
  },
  topBar: {
    title: {
      color: 'white',
    },

    backButton: {
      color: colors.textColor,
    },
    background: {
      color: colors.backgroundColor,
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
    color: colors.backgroundColor,
  },
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '95%',
  },
  headerContainer: {
    alignItems: 'flex-start',
    width: '95%',
  },

  signupText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#e6e6e6',
    width: '92%',
    height: 50,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  btnRow: {
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#000',
    paddingVertical: 20,
    width: '90%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 10,
    flexDirection: 'row',
  },

  btntext: {
    fontSize: 20,
    color: '#fff',
    marginHorizontal: 20,
  },
  forgotText: {
    alignSelf: 'flex-end',
    margin: 20,
  },
  messageText: {
    alignSelf: 'flex-start',
    width: '100%',
    marginLeft: 15,
    marginBottom: 10,
    color: 'red',
  },
  LWPass: {
    width: '90%',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
});
