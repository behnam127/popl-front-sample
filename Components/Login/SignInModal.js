import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LoginWithEmail from './LoginWithEmail';

export default class SignInModal extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appHeaderLogo}>
          <Text style={styles.logoText}>_____</Text>
        </View>
        <TouchableOpacity
          style={{
            ...styles.emailBtn,
            ...{backgroundColor: '#fff'},
          }}
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
          <Text style={styles.btntext}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/email.png')}></Image>
            {'   '}
            Sgin in with Email
          </Text>
        </TouchableOpacity>
        <Text style={styles.Or}>OR</Text>
        <TouchableOpacity
          style={{
            ...styles.socialBtn,
            ...{backgroundColor: '#e6e6e6'},
          }}
          onPress={() => {}}>
          <Text style={styles.btntext}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/google.png')}></Image>
            {'   '}
            Sign in with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.socialBtn,
            ...{backgroundColor: '#b3d9ff'},
          }}
          onPress={() => {}}>
          <Text style={styles.btntext}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/facebook.png')}></Image>
            {'   '}
            Sign in with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});
SignInModal.options = {
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '55%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRighttRadius: 20,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
  },
  appHeaderLogo: {
    alignSelf: 'center',
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: '40%',
    marginRight: '40%',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  emailBtn: {
    paddingVertical: 10,
    width: '85%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 10,
    top: 40,
  },
  btn: {
    paddingVertical: 10,
    width: '85%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    elevation: 10,
    top: 40,
  },
  socialBtn: {
    paddingVertical: 10,
    width: '85%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,

    top: 40,
  },
  btntext: {
    fontSize: 16,
    color: '#000',
    margin: 3,
  },
  Or: {
    color: '#000',
    marginTop: 70,
    fontSize: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 3,
    zIndex: 3,
    resizeMode: 'cover',
  },
});
