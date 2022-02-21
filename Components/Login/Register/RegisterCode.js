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
import OTPInputView from '@twotalltotems/react-native-otp-input';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import Clipboard from '@react-native-clipboard/clipboard';
import Spinner from 'react-native-spinkit';

import * as packageJson from './../../../package.json';

export default class RegisterCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      verifyCode: '',
      timer: 60,
      timerText: '(60 s)',
      resendButton: true,
      loading: false,
      btnDisable: false,
      resendloading: false,
      resendOpacity: 0.5,
      firstName: this.props.passedName,
      lastName: this.props.passedLastName,
      phoneOrEmail: this.props.passedPhoneOrEmail,
      message: '',
      displayMessgae: 'none',
      displayMessgae2: 'none',
      token: '',
      showToken: '',
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
    this.timerInterval();
    this.deviceInfo();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  storeTokenData = async TokenValue => {
    try {
      await AsyncStorage.setItem('@Token_ID', TokenValue);
    } catch (er) {
      console.log(er);
    }
  };

  timerInterval() {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1,
        timerText: '(' + (this.state.timer - 1) + ' s)',
      });
      if (this.state.timer === 0) {
        clearInterval(this.interval);
        this.setState({
          resendButton: false,
          timerText: '',
          resendOpacity: 1,
        });
      }
    }, 1000);
  }

  resendCode() {
    this.setState({
      resendButton: true,
      resendOpacity: 0.5,
      timer: 60,
      timerText: '(60 s)',
      loading: false,
    });
    // when request => ok
    this.timerInterval();
    this.findAction();
  }

  findAction() {
    this.setState({resendloading: true});
    axios
      .post('......', {
       .....
      })
      .then(response => {
        if (response.data.result.next == 'verify') {
          this.setState({
            message: 'New code was sent to ' + this.state.phoneOrEmail,
            displayMessgae: 'flex',
          });
        }

        this.setState({resendloading: false});
      })
      .catch(error => {
        console.log(error);

        this.setState({resendloading: false});
      });
  }

  requestOtp() {
    this.setState({resendloading: true});
    axios
      .post('.....', {
        .......
      })
      .then(response => {
        if (response.data.result.next == 'verify') {
          this.setState({
            message: 'Done! New code was sent to ' + this.state.phoneOrEmail,
            displayMessgae: 'flex',
          });
        } else {
          Navigation.pop(this.props.componentId);
        }

        this.setState({resendloading: false});
        this.resendCode();
      })
      .catch(error => {
        console.log(error);
        if (error.response.status == 422) {
          Navigation.pop(this.props.componentId);

          alert(error.response.data.errors.phone[0]);
        }
        this.setState({resendloading: false});
      });
  }

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

  verify() {
    this.setState({loading: true, btnDisable: true});
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
        // this.setresponseData(response);
        if (!response.data.hasError) {
          this.setState({token: response.data.result.token});
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
                          icon: require('../../../assets/images/person.png'),
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
                          icon: require('../../../assets/images/connections.png'),
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
                          icon: require('../../../assets/images/qr.png'),

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
                          icon: require('../../../assets/images/chart.png'),
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
                          icon: require('../../../assets/images/dots.png'),
                          text: 'Settings',
                        },
                      },
                    },
                  },
                ],
              },
            },
          });

          // alert(this.state.token);
          this.setState({loading: false});
          console.log(response.data);
          Navigation.push(this.props.componentId, {
            component: {
              name: 'SetPassword',
              options: {
                topBar: {
                  title: {
                    text: 'SetPassword',
                  },
                },
              },
              passProps: {
                passedName: this.state.firstName,
                passedLastName: this.state.lastName,
                passedPhoneOrEmail: this.state.phoneOrEmail,
                passedToken: this.state.token,
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
        console.log(error.response);
        this.setState({message: error.response.data.message});
        if (error.response.status == 422) {
          console.log(error.response);
          this.setState({
            // message: error.response.data,
            btnDisable: false,
          });
        }
        this.setState({loading: false});
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {/* <Text style={styles.signupText}>Registering</Text> */}
          <Text style={styles.header}>
            {`Enter the Code that we've send you to\n` +
              this.state.phoneOrEmail}
            {}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <OTPInputView
            style={{width: '100%', height: 90}}
            pinCount={4}
            value={this.state.verifyCode}
            onCodeChanged={verifyCode => {
              this.setState({verifyCode});
            }}
            autoFocusOnLoad
            editable={true}
            codeInputFieldStyle={{
              width: 60,
              height: 60,
              borderWidth: 0.5,
              borderBottomWidth: 2,
              color: '#000',
              borderRadius: 10,
              fontSize: 20,
              backgroundColor: '#fff',
            }}
          />
          {/* <TextInput
            placeholder={'Insert the Code'}
            style={styles.input}
            value={this.state.verifyCode}
            onChangeText={verifyCode =>
              this.setState({verifyCode})
            }></TextInput> */}
        </View>
        <Text
          style={{
            color: 'green',
            backgroundColor: '#ccffe6',
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            display: this.state.displayMessgae,
          }}>
          {this.state.message}
        </Text>
        <Text
          style={{
            color: 'red',
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            display: this.state.displayMessgae2,
          }}>
          {this.state.message}
        </Text>
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              clearInterval(this.interval);
              if (this.state.verifyCode == '') {
                this.setState({
                  message: `You didn't insert the code yet!`,
                  displayMessgae: 'none',
                  displayMessgae2: 'flex',
                });
              } else {
                this.verify();
                this.setState({
                  resendButton: false,
                  resendOpacity: 1,
                  timerText: '',
                  displayMessgae: 'none',
                  displayMessgae2: 'none',
                });
              }
            }}>
            <Text style={styles.btntext}>Verify</Text>
            <Spinner
              isVisible={this.state.loading}
              color="#ccc"
              size={25}
              type="Circle"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.alreadyText}>{`\nDidn't recieve code?\n`}</Text>

        <TouchableOpacity
          disabled={this.state.resendButton}
          style={{
            opacity: this.state.resendOpacity,
            marginTop: 0,
          }}
          onPress={() => this.resendCode()}>
          <Text
            style={[
              styles.resendText,
              {
                display: this.state.resendloading ? 'none' : 'flex',
              },
            ]}>
            Resend Code {this.state.timerText}
          </Text>
        </TouchableOpacity>
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
    alignSelf: 'flex-start',
    lineHeight: 30,
    marginBottom: 30,
    marginTop: 30,
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
    marginBottom: 40,
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
  resendText: {
    fontSize: 20,
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
