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
import Spinner from 'react-native-spinkit';
import axios from 'axios';

import * as packageJson from './../../../package.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      verifyCode: '',
      phoneOrEmail: this.props.passedPhoneOrEmail,
      timer: 60,
      timerText: '(60 s)',
      resendButtonDisable: true,
      loading: false,
      resendloading: false,
      resendOpacity: 0.5,
      message: '',
      displayMessage: 'none',
      displayErrMessage: 'none',
      firstName: this.props.passedName,
      lastName: this.props.passedLastName,
      token: '',
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
    //this.timerInterval();
    this.requestOtp();
    this.deviceInfo();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  timerInterval() {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1,
        timerText: '(' + (this.state.timer - 1) + ' s)',
      });
      if (this.state.timer == 0) {
        clearInterval(this.interval);
        this.setState({
          resendButtonDisable: false,
          timerText: '',
          resendOpacity: 1,
        });
      }
    }, 1000);
  }

  resendCode() {
    clearInterval(this.interval);
    this.setState({
      resendButtonDisable: true,
      resendOpacity: 0.5,
      timer: 60,
      timerText: '(60 s)',
      loading: false,
    });
    // when request => ok
    this.timerInterval();
  }

  storeTokenData = async TokenValue => {
    try {
      await AsyncStorage.setItem('@Token_ID', TokenValue);
    } catch (er) {
      console.log(er);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {/* <Text style={styles.signupText}>Registering</Text> */}
          <Text style={styles.header}>
            {`Enter the Code that we've send you to\n` +
              this.state.phoneOrEmail}
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
        </View>
        <Text
          style={{
            color: 'green',
            backgroundColor: '#ccffe6',
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            display: this.state.displayMessage,
          }}>
          {this.state.message}
        </Text>
        <Text
          style={{
            color: 'red',
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            display: this.state.displayErrMessage,
          }}>
          {this.state.message}
        </Text>
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.setState({
                resendButtonDisable: true,
                resendOpacity: 1,
                timerText: '',
                loading: true,
                btnDisable: true,
                message: '',
                displayMessage: 'none',
              });
              this.otpVerify();
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
          disabled={this.state.resendButtonDisable}
          style={{
            opacity: this.state.resendOpacity,
            marginTop: 0,
          }}
          onPress={() => {
            this.resendCode();
            this.requestOtp();
            this.setState({displayMessage: 'none', displayErrMessage: 'none'});
          }}>
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
      </View>
    );
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

  otpVerify() {
    this.setState({loading: true});

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
        // alert(response.status);
        console.log(response.data);

        if (!response.data.hasError) {
          this.storeTokenData(response.data.result.token);
          this.setState({
            // token: response.data.result.token,
            btnDisable: false,
            loading: false,
          });
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
        } else if (response.data.hasError) {
          this.setState({
            message: response.data.message[0].text,
            loading: false,
            btnDisable: false,
            displayMessage: 'none',
            displayErrMessage: 'flex',
          });
        }
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status == 422) {
          console.log(error.response);
          this.setState({
            message: error.response.data.message,
            loading: false,
            btnDisable: false,
            displayMessage: 'none',
            displayErrMessage: 'flex',
          });
        }
      });
  }

  requestOtp() {
    this.resendCode();
    axios
      .post('......', {
        ....
      })
      .then(response => {
        if (response.data.result.next == 'otp_verify') {
          this.setState({
            message: 'Done! New code was sent to ' + this.state.phoneOrEmail,
            displayMessage: 'flex',
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
});
