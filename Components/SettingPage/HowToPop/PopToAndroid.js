import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollViewBase,
  ScrollView,
  Animated,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class PopToAndroid extends Component {
  static options() {
    return {
      statusbar: false,
    };
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => Navigation.pop(this.props.componentId)}
            style={styles.backBtn}>
            <Image
              style={styles.backBtn}
              source={require('../../../assets/images/back.png')}></Image>
          </TouchableOpacity>
        </View>

        <Text style={{...styles.headerTitle, marginLeft: 30}}>
          Pop to Androids
        </Text>
        <Text style={styles.headerText}>
          Every Android with NFC (almost all)
        </Text>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.text}>
            To share to Androids, slide your Popl device around the center back
            area of their phone. Every Android has a slightly different spot for
            their NFC reader, but generally it's near the center.
          </Text>
          <Image
            style={styles.image}
            source={require('../../../assets/images/poptoandroid.jpg')}
          />
          <Text style={styles.title}>Important!</Text>
          <Text style={styles.text}>
            Unlike iPhones, Android have the ability to turn NFC off in
            settings. Before popping to an Android, make sure their NFC is
            Turned on. To turn NFC on, serach 'NFC' in the Android phone
            settings
          </Text>
          <View style={{height: 30}} />
          <Text style={styles.title}>Perfect Technique 📲 </Text>
          <Text style={styles.text}>Here's a demo of sharing to Androids</Text>

          <Image
            style={styles.qrImage}
            source={require('../../../assets/images/qr.png')}
          />
          <Text style={styles.title}>You Always Have a Backup</Text>
          <Text style={styles.text}>
            if you've tried everything and your Popl device is still not
            working, you can always use your Popl QR code to share your profile!
            Your Pople QR code can be found in the top left of your profile
          </Text>
        </ScrollView>
      </View>
    );
  }
}
PopToAndroid.options = {
  topBar: {
    title: {},
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    height: 60,
    padding: 30,
  },
  backBtn: {
    width: 30,
    height: 30,
    flex: 1,
    alignItems: 'flex-start',
    zIndex: 5,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#000',
    alignSelf: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
    alignSelf: 'flex-start',
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 30,
  },
  scroll: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 30,
    alignItems: 'center',
    paddingVertical: 30,
  },
  text: {
    color: '#000',
    fontSize: 16,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  qrImage: {
    alignSelf: 'flex-start',
    width: 40,
    height: 40,
    marginTop: 200,
  },
});
