import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Share,
  SafeAreaView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import colors from './ThemeColor/ThemeColor';

export default class Header extends Component {
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
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() =>
            Share.share({
              title: 'Share Our App',
              message: 'Thank you for sharing our app!',
              // or
              // url: ,
            })
          }
          style={styles.messagesImg}>
          <Image
            style={styles.messagesImg}
            source={require('../assets/images/messages.png')}></Image>
        </TouchableOpacity>
        <View style={styles.appHeaderLogoContainer}>
          <Text style={styles.logoText}>Popl</Text>
        </View>
      </View>
    );
  }
}

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#fff',
  },
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    flex: 1,
    zIndex: 50,
  },
  messagesImg: {
    marginHorizontal: 6,
    height: 40,
    width: 40,
    alignSelf: 'flex-start',
    flex: 1,
    tintColor: colors.textColor,
    position: 'absolute',
    top: 5,
  },
  appHeaderLogoContainer: {
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
    color: colors.textColor,
  },
});
