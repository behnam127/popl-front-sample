import {TestScheduler} from '@jest/core';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

export default class ScanDevice extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      log: 'Ready...',
      text: '',
    };
  }
  componentDidMount() {
    NfcManager.start();
  }

  componentWillUnmount() {
    this._cleanUp();
  }

  _cleanUp = () => {
    NfcManager.cancelTechnologyRequest().catch(() => 0);
  };

  readData = async () => {
    try {
      let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
      let resp = await NfcManager.requestTechnology(tech, {
        alertMessage: 'Ready to do some custom Mifare cmd!',
      });

      let cmd =
        Platform.OS === 'ios'
          ? NfcManager.sendMifareCommandIOS
          : NfcManager.transceive;

      resp = await cmd([0x3a, 4, 4]);
      let payloadLength = parseInt(resp.toString().split(',')[1]);
      let payloadPages = Math.ceil(payloadLength / 4);
      let startPage = 5;
      let endPage = startPage + payloadPages - 1;

      resp = await cmd([0x3a, startPage, endPage]);
      bytes = resp.toString().split(',');
      let text = '';

      for (let i = 0; i < bytes.length; i++) {
        if (i < 5) {
          continue;
        }

        if (parseInt(bytes[i]) === 254) {
          break;
        }

        text = text + String.fromCharCode(parseInt(bytes[i]));
      }

      this.setState({
        log: text,
      });

      this._cleanUp();
    } catch (ex) {
      this.setState({
        log: ex.toString(),
      });
      this._cleanUp();
    }
  };

  writeData = async () => {
    if (!this.state.text) {
      Alert.alert('Nothing to write');
      return;
    }
    try {
      let tech = Platform.OS === 'ios' ? NfcTech.MifareIOS : NfcTech.NfcA;
      let resp = await NfcManager.requestTechnology(tech, {
        alertMessage: 'Ready to do some custom Mifare cmd!',
      });

      let text = this.state.text;
      let fullLength = text.length + 7;
      let payloadLength = text.length + 3;

      let cmd =
        Platform.OS === 'ios'
          ? NfcManager.sendMifareCommandIOS
          : NfcManager.transceive;

      resp = await cmd([0xa2, 0x04, 0x03, fullLength, 0xd1, 0x01]); // 0x0C is the length of the entry with all the fluff (bytes + 7)
      resp = await cmd([0xa2, 0x05, payloadLength, 0x54, 0x02, 0x65]); // 0x54 = T = Text block, 0x08 = length of string in bytes + 3

      let currentPage = 6;
      let currentPayload = [0xa2, currentPage, 0x6e];

      for (let i = 0; i < text.length; i++) {
        currentPayload.push(text.charCodeAt(i));
        if (currentPayload.length == 6) {
          resp = await cmd(currentPayload);
          currentPage += 1;
          currentPayload = [0xa2, currentPage];
        }
      }

      // close the string and fill the current payload
      currentPayload.push(254);
      while (currentPayload.length < 6) {
        currentPayload.push(0);
      }

      resp = await cmd(currentPayload);

      this.setState({
        log: resp.toString(),
      });

      this._cleanUp();
    } catch (ex) {
      this.setState({
        log: ex.toString(),
      });
      this._cleanUp();
    }
  };

  onChangeText = text => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Ready to Scan</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.onChangeText}
          autoCompleteType="off"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#888888"
          placeholder="Enter text here"
        />

        <TouchableOpacity style={styles.buttonWrite} onPress={this.writeData}>
          <Text style={styles.buttonText}>Write</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRead} onPress={this.readData}>
          <Text style={styles.buttonText}>Read</Text>
        </TouchableOpacity>

        <View style={styles.log}>
          <Text>{this.state.log}</Text>
        </View>
        <Text style={styles.text}>
          Hold your Popl to the middle back of your phone to activate it
        </Text>
        <TouchableOpacity
          onPress={() => Navigation.dismissAllModals(this.props.ComponentId)}
          style={styles.btn}>
          <Text style={styles.text}>cansel</Text>
        </TouchableOpacity>
      </SafeAreaView>
      // <View style={styles.container}>
      //   <Text style={styles.headerText}>Ready to Scan</Text>
      //   <Image
      //     style={styles.image}
      //     source={require('../../assets/images/redytoscan.png')}
      //   />
      //   <Text style={styles.text}>
      //     Hold your Popl to the middle back of your phone to activate it
      //   </Text>
      //   <TouchableOpacity
      //     onPress={() => Navigation.dismissAllModals(this.props.ComponentId)}
      //     style={styles.btn}>
      //     <Text style={styles.text}>cansel</Text>
      //   </TouchableOpacity>
      // </View>
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

const styles = StyleSheet.create({
  headerText: {
    margin: 10,
    marginTop: 20,
    fontSize: 24,
    fontWeight: '500',
    marginLeft: 10,
    color: '#909090',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginVertical: 30,
  },
  text: {
    color: '#000',
    width: '70%',
    textAlign: 'center',
    fontSize: 16,
  },
  btn: {
    width: '70%',
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    width: '95%',
    height: '55%',
    backgroundColor: '#fff',
    borderRadius: 30,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 40,
    borderRadius: 10,
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#ccc',
    width: '80%',
  },
  buttonWrite: {
    width: '80%',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#9D2235',
  },
  buttonRead: {
    width: '80%',
    marginLeft: 20,
    marginRight: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#006C5B',
  },
  buttonText: {
    color: '#ffffff',
  },
  log: {
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
