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
import QrCode from '../../QR/QrCode';

export default class PopWithQRCode extends Component {
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
          Pop with Your QR Code
        </Text>
        <Text style={styles.headerText}>All iPhone and Android Phones</Text>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.text}>
            To share with your Popl QR code, open the Popl app and tap the QR
            code symbol in the top left. Most devices don't need a QR scanner
            app to read your QR, just use the normal camera
          </Text>
          <Image
            style={styles.image}
            source={require('../../../assets/images/popwithqr.jpg')}
          />
          <Text style={styles.title}>Important!</Text>
          <Text style={styles.text}>
            You can add your QR code to your Apple or Google wallet. this allows
            you to share your Popl digital business card faster than ever
          </Text>
          <View style={{height: 30}} />
          <Text style={styles.title}>Custom QR Codes</Text>
          <Text style={styles.text}>
            Did you know you can create your own branded QR code right in Popl?
            Create your own, save to camera roll, then print on flyers, cards,
            signs, windows and more
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'QrCode',
                    options: {
                      topBar: {
                        title: {
                          text: 'QrCode',
                        },
                      },
                    },
                  },
                })
              }>
              <Text
                style={{...styles.text, fontWeight: '800', color: '#3399ff'}}>
                Tap here to create your own
              </Text>
            </TouchableOpacity>
          </Text>
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

Navigation.registerComponent('QrCode', () => QrCode);

PopWithQRCode.options = {
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
