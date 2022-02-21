import React, {Component} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import colors from '../../ThemeColor/ThemeColor';
import Spinner from 'react-native-spinkit';
import axios from 'axios';

import * as packageJson from './../../../package.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HadAccLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      password: '',
      message: '',
      token: '',
      loading: false,
      showToken: '',
      btnDisable: false,
      firstName: this.props.passedName,
      lastName: this.props.passedLastName,
      emailOrPhone: this.props.passedPhoneOrEmail,
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
    this.deviceInfo();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.signupText}>Password</Text>
          <Text style={styles.header}>
            You've already have an account, please enter your password or you
            can login without password
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            value={this.state.password}
            onChangeText={password => this.setState({password})}></TextInput>
        </View>
        <Text style={styles.messageText}>{this.state.message}</Text>

        <TouchableOpacity
          style={styles.btn}
          disabled={this.state.btnDisable}
          onPress={() => {
            this.setState({loading: true, btnDisable: true, message: ''});
            this.postLoginInfo();
          }}>
          <Text style={styles.btntext}>Log In</Text>
          <Spinner
            isVisible={this.state.loading}
            color="#ccc"
            size={25}
            type="Circle"
          />
        </TouchableOpacity>
        <View style={styles.btnRow}>
          <TouchableOpacity
            onPress={() => {
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
                    passedName: this.state.firstName,
                    passedLastName: this.state.lastName,
                    passedPhoneOrEmail: this.state.emailOrPhone,
                  },
                },
              });
            }}
            style={styles.LWPass}>
            <Text style={styles.header}>Login Without Password</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.setState({showToken: this.state.token});
            }}>
            <Text style={styles.btntext}>Show Stored TOKEN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.messageText}>{this.state.showToken}</Text> */}
      </View>
    );
  }

  storeTokenData = async TokenValue => {
    try {
      await AsyncStorage.setItem('@Token_ID', TokenValue);
    } catch (er) {
      console.log(er);
    }
  };

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
      // await messaging()
      //   .getToken()
      //   .then(token => {
      //     fcmToken = token;
      //   });
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
            // token: response.data.result.token,
            btnDisable: false,
            loading: false,
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
                          icon: require('./../../../assets/images/person.png'),
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
                          icon: require('./../../../assets/images/connections.png'),
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
                          icon: require('./../../../assets/images/qr.png'),

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
                          icon: require('./../../../assets/images/chart.png'),
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
                          icon: require('./../../../assets/images/dots.png'),
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
        if (error.response.status == 422) {
          console.log(error.response);
          this.setState({
            message: error.response.data.message,
            loading: false,
            btnDisable: false,
          });
        }
      });
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
    width: 40,
    height: 40,
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
  header: {
    color: '#000',
    marginBottom: 10,
  },
  signupText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#e6e6e6',
    width: '92%',
    height: 50,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
    height: 50,
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
    marginBottom: 30,
  },

  btntext: {
    fontSize: 20,
    color: '#fff',
    marginEnd: 10,
  },
  alreadyText: {
    color: '#000',
    marginTop: 30,
  },
  loginText: {
    fontSize: 22,
    color: '#000',
  },
  messageText: {
    alignSelf: 'flex-start',
    width: '100%',
    marginLeft: 15,
    marginBottom: 10,
    color: 'red',
  },
});
