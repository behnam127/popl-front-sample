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

export default class LeadCaptureMode extends Component {
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
          <Text style={{...styles.headerText}}>Pro Feature</Text>
          <Text style={{...styles.headerTitle}}>Lead Capture Mode</Text>
          <Text style={styles.text}>
            When lead capture mode is turned on, a lead capture from appears
            immediately when you share your digital business card with someone.
          </Text>
          <Image
            style={styles.image}
            source={require('../../assets/images/leadCaptureMode.jpg')}
          />
          <Text style={styles.title}>How the feature works:</Text>
          <Text style={styles.text}>
            1. Share your Popl digital business card with someone
          </Text>
          <Text style={styles.text}>
            2. Have them fill out the quick form that immediately pops up
          </Text>
          <Text style={styles.text}>3.</Text>
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

LeadCaptureMode.options = {
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
