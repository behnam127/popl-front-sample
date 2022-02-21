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

export default class PopToOldIphone extends Component {
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
          Pop to Older iPhones
        </Text>
        <Text style={styles.headerText}>iPhone 6, 7, 8, X</Text>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.text}>
            To share to older iPhones, we recomand using your Popl QR code. this
            eill work for any iphone. You can also share by having theme tap the
            NFC widget in their contorol center.
          </Text>
          <Image
            style={styles.image}
            source={require('../../../assets/images/poptooldiphoneqr.jpg')}
          />
          <Text style={styles.title}>Important!</Text>
          <Text style={styles.text}>
            Their screen must be on, their airplaine mode must be off, and their
            camera must not be open.
          </Text>
          <View style={{height: 30}} />
          <Text style={styles.title}>Scan QR With Camera</Text>
          <Image
            style={styles.image}
            source={require('../../../assets/images/poptooldiphoneqr2.jpg')}
          />

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
PopToOldIphone.options = {
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
  },
});
