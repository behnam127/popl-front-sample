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
import PopToNewIphone from './PopToNewIphone';
import PopToOldIphone from './PopToOldIphone';
import PopToAndroid from './PopToAndroid';
import PopWithQRCode from './PopWithQRCode';

export default class HowToPop extends Component {
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

        <Text style={styles.headerTitle}>How to Pop or Scan</Text>
        <Text style={styles.headerText}>
          Choose the device you are sharing to
        </Text>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.btnsContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'PopToNewIphone',
                    options: {
                      topBar: {
                        title: {
                          text: 'PopToNewIphone',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <View style={styles.btnsTextContainer}>
                <Text style={styles.btnsText}>Pop to new iphones</Text>
                <Text style={styles.btnsText2}>iphone XR and newer</Text>
              </View>
              <Image
                resizeMode={'contain'}
                style={styles.deviceImage}
                source={require('../../../assets/images/iphone12.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'PopToOldIphone',
                    options: {
                      topBar: {
                        title: {
                          text: 'PopToOldIphone',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <View style={styles.btnsTextContainer}>
                <Text style={styles.btnsText}>Pop to old iphones</Text>
                <Text style={styles.btnsText2}>iphone X and older</Text>
              </View>
              <Image
                resizeMode={'contain'}
                style={styles.deviceImage}
                source={require('../../../assets/images/iphonex.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'PopToAndroid',
                    options: {
                      topBar: {
                        title: {
                          text: 'PopToAndroid',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <View style={styles.btnsTextContainer}>
                <Text style={styles.btnsText}>Pop to androids</Text>
                <Text style={styles.btnsText2}>Must have NFC on</Text>
              </View>
              <Image
                resizeMode={'contain'}
                style={styles.deviceImage}
                source={require('../../../assets/images/androidPhone.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'PopWithQRCode',
                    options: {
                      topBar: {
                        title: {
                          text: 'PopWithQRCode',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <View style={styles.btnsTextContainer}>
                <Text style={styles.btnsText}>Pop with QR Code</Text>
                <Text style={styles.btnsText2}>All Phones</Text>
              </View>
              <Image
                resizeMode={'contain'}
                style={styles.deviceImage}
                source={require('../../../assets/images/QRCodeicon.jpeg')}></Image>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Live Chat With Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Navigation.registerComponent('PopToNewIphone', () => PopToNewIphone);
Navigation.registerComponent('PopToOldIphone', () => PopToOldIphone);
Navigation.registerComponent('PopToAndroid', () => PopToAndroid);
Navigation.registerComponent('PopWithQRCode', () => PopWithQRCode);

HowToPop.options = {
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
    padding: 30,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 30,
  },
  scroll: {
    paddingBottom: 90,
    marginBottom: 0,
    height: '100%',
  },
  btnsContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 0,
    marginTop: 15,
    marginBottom: 15,
  },
  btns: {
    width: '95%',
    height: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    margin: 15,
    alignItems: 'center',
    borderTopColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  btnsTextContainer: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  btnsText: {
    fontWeight: '800',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnsText2: {
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceImage: {
    flex: 1,
    height: '80%',
    justifyContent: 'flex-start',
    position: 'relative',
    bottom: -10,
  },

  btnContainer: {
    height: 130,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    width: '65%',
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  proImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
});
