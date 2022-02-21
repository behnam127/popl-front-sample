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
import QrCode from '../QR/QrCode';

export default class PoplDirect extends Component {
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
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.headerContainer}></View>
          <Text style={{...styles.headerText}}>Instant Traffic</Text>
          <Text style={{...styles.headerTitle}}>Popl Direct</Text>
          <Text style={styles.text}>
            Pople Direct allows you to pop anyone directly to a link of your
            choice, without going to your full profile
          </Text>
          <Image
            style={styles.image}
            source={require('../../assets/images/poplDirect.jpg')}
          />
          <Text style={styles.title}>How Popl Direct works:</Text>
          <Text style={styles.text}>
            🔹 Drag and drop the link you want to share directly to the first
            slot on your profile
          </Text>
          <Text style={styles.text}>
            🔹 Toggle On the Popl Direct toggle on your profile
          </Text>
          <Text style={styles.text}>
            🔹 Share with your Popl device or QR code and see the link go
            directly to that first link
          </Text>
          <TouchableOpacity
            onPress={() => {
              Navigation.pop(this.props.componentId);
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>Got it!</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

Navigation.registerComponent('QrCode', () => QrCode);

PoplDirect.options = {
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
    color: '#808080',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  scroll: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 30,
    alignItems: 'center',
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
  btn: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    width: 250,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
});
