import React, {Component} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import colors from '../ThemeColor/ThemeColor';

export default class mapConnectionList extends Component {
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
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.signupText}>Welcome Back</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'Email                                you@email.com'}
            style={styles.input}></TextInput>
          <TextInput placeholder={'Password'} style={styles.input}></TextInput>
        </View>
        <Text style={styles.forgotText}>{`\nForgot password?\n`}</Text>
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.btntext}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  },

  btntext: {
    fontSize: 20,
    color: '#fff',
  },
  forgotText: {
    alignSelf: 'flex-end',
    margin: 20,
  },
});
