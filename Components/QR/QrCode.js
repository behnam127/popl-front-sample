import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  Share,
  Linking,
  Platform,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import {sendEmail} from 'react-native-email-action';
import colors from '../ThemeColor/ThemeColor';

const options = {
  subject: 'My Popl Digital Business Card',
  body: 'Here is my digital business card: https://',
};

const operator = Platform.select({ios: '&', android: '?'});

export default class QrCode extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      myLink: 'Popl.me/8s7fh36',
      sendText:
        'Here is my digital business card: https://Popl.me/8s7fh36/share',
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <Text style={styles.headerText}>Sharing Personal Profile</Text>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Image
              source={require('../../assets/images/qrcode.png')}
              style={styles.QrImage}></Image>
          </View>
          <Text style={styles.copyText}>Tap to copy link</Text>
          <View style={{flex: 1}}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>
                Create custom QR{'  '}
                <Image
                  style={styles.proImage}
                  source={require('../../assets/images/proWhite.png')}></Image>
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>
              {this.state.myLink}
              {'       '}
              <Image
                style={styles.proImage}
                source={require('../../assets/images/copy.png')}></Image>
            </Text>
          </TouchableOpacity>
          <View style={styles.buttomBtnsContainer}>
            <TouchableOpacity
              onPress={() =>
                sendEmail({
                  subject: 'My Popl Digital Business Card',
                  body: `Here is my digital business card: 
                https://Popl.me/8s7fh36/share`,
                })
              }
              style={styles.bottomBtns}>
              <Image
                style={styles.bottomBtnsImage}
                source={require('../../assets/images/email.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`sms:${operator}body=${this.state.sendText}`)
              }
              style={styles.bottomBtns}>
              <Image
                style={styles.bottomBtnsImage}
                source={require('../../assets/images/chat.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Share.share({
                  title: 'Share Our App',
                  message: 'Thank you for sharing our app!',
                  // or
                  // url: ,
                })
              }
              style={styles.bottomBtns}>
              <Image
                style={styles.bottomBtnsImage}
                source={require('../../assets/images/upload.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtns}>
              <Image
                style={styles.bottomBtnsImage}
                source={require('../../assets/images/wallet.png')}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    flexDirection: 'column',
  },
  scroll: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: colors.backgroundColor,
  },
  headerText: {
    flex: 1,
    fontSize: 22,
    fontWeight: '800',
    color: colors.textColor,
    position: 'relative',
  },
  QrImage: {
    backgroundColor: colors.backgroundColor,
    width: '60%',
    aspectRatio: 1,
    position: 'relative',
    marginVertical: 15,
  },
  copyText: {
    flex: 0.5,
    color: colors.textColor,
  },
  btn: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.secondarySwitchBtnBackground,
    width: '65%',
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 10,
    marginVertical: 20,
  },
  btnText: {
    color: colors.secondarySwitchBtnText,
    fontSize: 18,
  },
  proImage: {
    width: 22,
    height: 22,
    tintColor: colors.textColor,
    resizeMode: 'contain',
  },
  link: {
    backgroundColor: colors.grayBtn,
    width: '90%',
    height: 50,
    margin: 10,
    borderRadius: 15,
    paddingLeft: 10,
    borderWidth: 0.5,
    borderColor: colors.grayBtn,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  linkText: {
    color: colors.textColor,
    fontSize: 16,
  },
  buttomBtnsContainer: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomBtns: {
    width: 65,
    height: 65,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 6,
    backgroundColor: colors.addLinksBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBtnsImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: colors.textColor,
  },
});
