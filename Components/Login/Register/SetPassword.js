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

export default class SetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      password: '',
      referralCode: '',
      token: this.props.passedToken,
      message: '',
      messageDisplay: 'none',
      loading: false,
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.signupText}>Set Password</Text>
          {/* <Text style={styles.header}>
            Enter your email and password below:
          </Text> */}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            value={this.state.password}
            onChangeText={password => this.setState({password})}></TextInput>
          <TextInput
            placeholder={'Referral Code'}
            style={styles.input}
            value={this.state.referralCode}
            onChangeText={referralCode =>
              this.setState({referralCode})
            }></TextInput>
        </View>
        <Text
          style={{...styles.messageText, display: this.state.messageDisplay}}>
          {this.state.message}
        </Text>
        <View style={styles.btnRow}>
          <TouchableOpacity
            onPress={() => {
              this.setState({messageDisplay: 'none', message: ''});
              if (this.state.password == '') {
                this.setState({
                  message: 'Password field is empty!',
                  messageDisplay: 'flex',
                });
              } else {
                this.setState({
                  messageDisplay: 'none',
                  message: '',
                });
                this.register();
              }
            }}
            style={styles.btn}>
            <Text style={styles.btntext}>Sign Up</Text>
            <Spinner
              isVisible={this.state.loading}
              color="#ccc"
              size={25}
              type="Circle"
            />
          </TouchableOpacity>
        </View>
        <Text>{this.state.token}</Text>
      </View>
    );
  }

  register() {
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
        console.log(response);
        this.setState({loading: false});
        alert(`let's go to homePage`);
      })
      .catch(error => {
        console.log(error.response);
        this.setState({
          message:
            error.response.data.message +
            '\n' +
            error.response.data.errors.password[0],
          messageDisplay: 'flex',
        });
        if (error.response.status == 422) {
        }
        this.setState({loading: false});
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
