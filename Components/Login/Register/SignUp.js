import axios from 'axios';
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

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      firstName: '',
      lastName: '',
      phoneOrEmail: '',
      message: '',
      loading: false,
      btnDisable: false,
      displayMessage: 'none',
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.signupText}>Sign Up</Text>
          {/* <Text style={styles.header}>
            Enter your email and password below:
          </Text> */}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'First Name'}
            style={styles.input}
            value={this.state.firstName}
            onChangeText={firstName => this.setState({firstName})}></TextInput>
          <TextInput
            placeholder={'Last Name'}
            style={styles.input}
            value={this.state.lastName}
            onChangeText={lastName => this.setState({lastName})}></TextInput>
          <TextInput
            placeholder={'Phone or Email'}
            style={styles.input}
            value={this.state.phoneOrEmail}
            onChangeText={phoneOrEmail =>
              this.setState({phoneOrEmail})
            }></TextInput>
        </View>
        <Text
          style={styles.messageText}
          displayMessage={this.state.displayMessage}>
          {this.state.message}
        </Text>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btn}
            disabled={this.state.btnDisable}
            onPress={() => {
              this.setState({
                loading: true,
                btnDisable: true,
                message: '',
                displayMessage: 'none',
              });

              if (
                this.state.firstName == '' ||
                this.state.lastName == '' ||
                this.state.phoneOrEmail == ''
              ) {
                this.setState({
                  loading: false,
                  btnDisable: false,
                  message: 'One or more field is empty!',
                });
              } else {
                Alert.alert(
                  '',
                  'Is this correct?\n' + this.state.phoneOrEmail,

                  [
                    {
                      text: 'Yes',
                      onPress: () => {
                        this.requestOtp();
                      },
                    },
                    {
                      text: 'No',
                      onPress: () => {
                        console.log('No Pressed');
                        this.setState({
                          loading: false,
                          btnDisable: false,
                        });
                      },
                    },
                  ],
                  {cancelable: false},
                );
              }
            }}>
            <Text style={styles.btntext}>Send Code</Text>
            <Spinner
              isVisible={this.state.loading}
              color="#ccc"
              size={25}
              type="Circle"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.alreadyText}>{`\nAlready Have an Account?\n`}</Text>
        <TouchableOpacity
          onPress={() =>
            Navigation.push(this.props.componentId, {
              component: {
                name: 'LoginWithEmail',
                options: {
                  layout: {
                    backgroundColor: '#fff',
                  },
                  topBar: {
                    title: {
                      text: 'LoginWithEmail',
                    },
                  },
                },
              },
            })
          }>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  requestOtp() {
    // this.setState({resendloading: true});
    axios
      .post('......', {
        ......
      })
      .then(response => {
        if (response.data.result.next == 'password') {
          this.setState({
            loading: false,
            btnDisable: false,
          });
          Navigation.push(this.props.componentId, {
            component: {
              name: 'HadAccLogin',
              options: {
                topBar: {
                  title: {
                    text: 'HadAccLogin',
                  },
                },
              },
              passProps: {
                passedName: this.state.firstName,
                passedLastName: this.state.lastName,
                passedPhoneOrEmail: this.state.phoneOrEmail,
              },
            },
          });
        } else if (response.data.result.next == 'verify') {
          this.setState({
            loading: false,
            btnDisable: false,
          });
          Navigation.push(this.props.componentId, {
            component: {
              name: 'RegisterCode',
              options: {
                topBar: {
                  title: {
                    text: 'RegisterCode',
                  },
                },
              },
              passProps: {
                passedName: this.state.firstName,
                passedLastName: this.state.lastName,
                passedPhoneOrEmail: this.state.phoneOrEmail,
              },
            },
          });
        }
        this.setState({resendloading: false});
      })
      .catch(error => {
        console.log(error.response);
        this.setState({message: error.response.data.message});
        if (error.response.status == 422) {
          this.setState({
            loading: false,
            btnDisable: false,
          });
          // Navigation.push(this.props.componentId, {
          //   component: {
          //     name: 'RegisterCode',
          //     options: {
          //       topBar: {
          //         title: {
          //           text: 'RegisterCode',
          //         },
          //       },
          //     },
          //     passProps: {
          //       passedName: this.state.firstName,
          //       passedLastName: this.state.lastName,
          //       passedPhoneOrEmail: this.state.phoneOrEmail,
          //     },
          //   },
          // });
        } else {
          this.setState({
            message: 'Something went wrong!',
            displayMessage: 'flex',
          });
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

// Navigation.setRoot({
//   root: {
//     bottomTabs: {
//       options: {
//         bottomTab: {},
//       },
//       children: [
//         {
//           stack: {
//             id: 'FIRST_TAB',
//             children: [
//               {
//                 component: {
//                   id: 'FIRST_SCREEN',
//                   name: 'PersonalProfile',
//                 },
//               },
//             ],
//             options: {
//               bottomTab: {
//                 icon: require('../../assets/images/person.png'),
//                 text: 'Home',
//               },
//             },
//           },
//         },
//         {
//           stack: {
//             id: 'SECOND_TAB',
//             children: [
//               {
//                 component: {
//                   id: 'SECOND_SCREEN',
//                   name: 'Connections',
//                 },
//               },
//             ],
//             options: {
//               bottomTab: {
//                 icon: require('../../assets/images/connections.png'),
//                 text: 'Connections',
//               },
//             },
//           },
//         },
//         {
//           stack: {
//             id: 'THIRD_TAB',
//             children: [
//               {
//                 component: {
//                   id: 'THIRD_SCREEN',
//                   name: 'QrCode',
//                 },
//               },
//             ],
//             options: {
//               bottomTab: {
//                 icon: require('../../assets/images/qr.png'),

//                 text: 'Share',
//               },
//             },
//           },
//         },
//         {
//           stack: {
//             id: 'FORTH_TAB',
//             children: [
//               {
//                 component: {
//                   id: 'FORTH_SCREEN',
//                   name: 'Insights',
//                 },
//               },
//             ],
//             options: {
//               bottomTab: {
//                 icon: require('../../assets/images/chart.png'),
//                 text: 'Insights',
//               },
//             },
//           },
//         },
//         {
//           stack: {
//             id: 'FIFTH_TAB',
//             children: [
//               {
//                 component: {
//                   id: 'FIFTH_SCREEN',
//                   name: 'SettingPage',
//                 },
//               },
//             ],
//             options: {
//               bottomTab: {
//                 icon: require('../../assets/images/dots.png'),
//                 text: 'Settings',
//               },
//             },
//           },
//         },
//       ],
//     },
//   },
// })
