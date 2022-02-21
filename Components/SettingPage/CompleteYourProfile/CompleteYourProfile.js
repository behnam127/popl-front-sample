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
import Slider from '@react-native-community/slider';
import ActivateDevice from '../ActivateDevice';
import EditProfile from '../../Profile/EditProfile';
import AddLinks from '../../Profile/AddLinks/AddLinks';
import QrCode from '../../QR/QrCode';
import ConnectWithMe from './ConnectWithMe';
import UpgradePopup from '../../UpgradeToPro/UpgradePopup';

export default class CompleteYourProfile extends Component {
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

        <Text style={{...styles.headerTitle, marginLeft: 35}}>
          Complete Your profile
        </Text>
        <Text style={styles.headerText}>
          Complete this checklist to get the most out of your Popl digital
          business card
        </Text>
        <View style={styles.completeProfile}>
          <View style={styles.completeProfileHeader}></View>
          <View style={styles.completeProfileSliderContainer}>
            <Slider
              minimumTrackTintColor="#000"
              minim
              maximumTrackTintColor="#f6f6f6"
              thumbTintColor="#f2f2f2"
              style={styles.completeProfileSlider}></Slider>
          </View>

          <View style={styles.completeProfileContainer}>
            <Text style={styles.completeProfileText}>0% Complete</Text>
            <Text style={styles.completeProfileSerial}>0/8 Task Done</Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'ActivateDevice',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'ActivateDevice',
                      },
                    },
                  },
                },
              })
            }
            style={styles.bigBtn}>
            <View style={styles.bigBtnImagesContainer}>
              <Image
                style={{...styles.bigBtnImages, height: 140}}
                source={require('../../../assets/images/c1.png')}
              />
            </View>

            <View
              style={{
                ...styles.bigBtnImageBackground,
                backgroundColor: '#e6f9ff',
              }}></View>
            <Text style={styles.bigBtnTitle}>
              Activate your first Popl Device
            </Text>
            <Text style={styles.bigBtnDescription}>
              Activate a Popl device to start popping your info to others
            </Text>
            <View style={styles.btnsBottomSection}>
              <View style={styles.goActivate}>
                <Text>Go Activate{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/forward.png')}
                />
              </View>
              <View style={styles.goActivate}>
                <Text>Incomplete{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/redFalse.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'EditProfile',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'EditProfile',
                      },
                    },
                  },
                },
              })
            }
            style={styles.bigBtn}>
            <View style={styles.bigBtnImagesContainer}>
              <Image
                style={styles.bigBtnImages}
                source={require('../../../assets/images/c2.png')}
              />
            </View>
            <View
              style={{
                ...styles.bigBtnImageBackground,
                backgroundColor: '#ccffff',
              }}></View>
            <Text style={styles.bigBtnTitle}>Add a profile picture</Text>
            <Text style={styles.bigBtnDescription}>
              Make your digital business card more engaging by adding a picture
            </Text>
            <View style={styles.btnsBottomSection}>
              <View style={styles.goActivate}>
                <Text>Add a Photo{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/forward.png')}
                />
              </View>
              <View style={styles.goActivate}>
                <Text>Incomplete{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/redFalse.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'AddLinks',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'AddLinks',
                      },
                    },
                  },
                },
              })
            }
            style={styles.bigBtn}>
            <View style={styles.bigBtnImagesContainer}>
              <Image
                style={styles.bigBtnImages}
                source={require('../../../assets/images/c3.png')}
              />
            </View>
            <View
              style={{
                ...styles.bigBtnImageBackground,
                backgroundColor: '#ccffe6',
              }}></View>
            <Text style={styles.bigBtnTitle}>Add your first link</Text>
            <Text style={styles.bigBtnDescription}>
              Add links to your profile so others can connect with you on
              different platforms
            </Text>
            <View style={styles.btnsBottomSection}>
              <View style={styles.goActivate}>
                <Text>Add a Link{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/forward.png')}
                />
              </View>
              <View style={styles.goActivate}>
                <Text>Incomplete{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/redFalse.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'ConnectWithMe',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'ConnectWithMe',
                      },
                    },
                  },
                },
              })
            }
            style={styles.bigBtn}>
            <View style={styles.bigBtnImagesContainer}>
              <Image
                style={styles.bigBtnImages}
                source={require('../../../assets/images/c4.png')}
              />
            </View>
            <View
              style={{
                ...styles.bigBtnImageBackground,
                backgroundColor: '#ccffcc',
              }}></View>
            <Text style={styles.bigBtnTitle}>Capture a Lead</Text>
            <Text style={styles.bigBtnDescription}>
              Start capturing leads and buildin your network on Popl. use the
              "connect with me" button on your profile
            </Text>
            <View style={styles.btnsBottomSection}>
              <View style={styles.goActivate}>
                <Text>Go to Connections{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/forward.png')}
                />
              </View>
              <View style={styles.goActivate}>
                <Text>Incomplete{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/redFalse.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'QrCode',
                  options: {
                    bottomTabs: {
                      visible: true,
                    },
                    topBar: {
                      title: {
                        text: 'QrCode',
                      },
                    },
                  },
                },
              })
            }
            style={styles.bigBtn}>
            <View style={styles.bigBtnImagesContainer}>
              <Image
                style={styles.bigBtnImages}
                source={require('../../../assets/images/c5.png')}
              />
            </View>
            <View
              style={{
                ...styles.bigBtnImageBackground,
                backgroundColor: '#ffffcc',
              }}></View>
            <Text style={styles.bigBtnTitle}>
              Add your Popl QR code to your Digital Wallet
            </Text>
            <Text style={styles.bigBtnDescription}>
              Quickly access your Popl QR code from your Apple or Google wallet
            </Text>
            <View style={styles.btnsBottomSection}>
              <View style={styles.goActivate}>
                <Text>Add to Wallet{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/forward.png')}
                />
              </View>
              <View style={styles.goActivate}>
                <Text>Incomplete{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/redFalse.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'QrCode',
                  options: {
                    bottomTabs: {
                      visible: true,
                    },
                    topBar: {
                      title: {
                        text: 'QrCode',
                      },
                    },
                  },
                },
              })
            }
            style={styles.bigBtn}>
            <View style={styles.bigBtnImagesContainer}>
              <Image
                style={styles.bigBtnImages}
                source={require('../../../assets/images/c6.png')}
              />
            </View>
            <View
              style={{
                ...styles.bigBtnImageBackground,
                backgroundColor: '#ffe6e6',
              }}></View>
            <Text style={styles.bigBtnTitle}>Preform a Pop!</Text>
            <Text style={styles.bigBtnDescription}>
              Use your Popl device or in-app QR code to share your info with
              somone
            </Text>
            <View style={styles.btnsBottomSection}>
              <View style={styles.goActivate}>
                <Text>Go to QR Code{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/forward.png')}
                />
              </View>
              <View style={styles.goActivate}>
                <Text>Incomplete{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/redFalse.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'ImagePickerScreen',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'ImagePickerScreen',
                      },
                    },
                  },
                },
              })
            }
            style={styles.bigBtn}>
            <View style={styles.bigBtnImagesContainer}>
              <Image
                style={styles.bigBtnImages}
                source={require('../../../assets/images/c7.png')}
              />
            </View>
            <View
              style={{
                ...styles.bigBtnImageBackground,
                backgroundColor: '#ccffff',
              }}></View>
            <Text style={styles.bigBtnTitle}>Scan a Business Card</Text>
            <Text style={styles.bigBtnDescription}>
              Use our AI powered business card scanner to turn a paper business
              card into a digital connection
            </Text>
            <View style={styles.btnsBottomSection}>
              <View style={styles.goActivate}>
                <Text>Go to Scanner{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/forward.png')}
                />
              </View>
              <View style={styles.goActivate}>
                <Text>Incomplete{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/redFalse.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'UpgradePopup',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'UpgradePopup',
                      },
                    },
                  },
                },
              })
            }
            style={styles.bigBtn}>
            <View style={styles.bigBtnImagesContainer}>
              <Image
                style={{...styles.bigBtnImages, height: 140}}
                source={require('../../../assets/images/proBlack.png')}
              />
            </View>
            <View
              style={{
                ...styles.bigBtnImageBackground,
                backgroundColor: '#ffe6ff',
              }}></View>
            <Text style={styles.bigBtnTitle}>Try Popl Pro for Free</Text>
            <Text style={styles.bigBtnDescription}>
              Experience the next level of networking with a free trial of popl
              Pro
            </Text>
            <View style={styles.btnsBottomSection}>
              <View style={styles.goActivate}>
                <Text>Upgrade{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/forward.png')}
                />
              </View>
              <View style={styles.goActivate}>
                <Text>Incomplete{'  '}</Text>
                <Image
                  style={styles.smallImage}
                  source={require('../../../assets/images/redFalse.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

Navigation.registerComponent('ActivateDevice', () => ActivateDevice);
Navigation.registerComponent('EditProfile', () => EditProfile);
Navigation.registerComponent('AddLinks', () => AddLinks);
Navigation.registerComponent('ConnectWithMe', () => ConnectWithMe);
Navigation.registerComponent('QrCode', () => QrCode);
Navigation.registerComponent('UpgardePopup', () => UpgardePopup);

CompleteYourProfile.options = {
  topBar: {
    title: {},
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    marginVertical: 20,
  },

  headerText: {
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 30,
  },
  completeProfile: {
    width: '90%',
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  completeProfileHeader: {
    flexDirection: 'row',
  },

  completeProfileSliderContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#fff',
    top: 20,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  completeProfileSlider: {
    width: '100%',
    height: 30,
  },
  completeProfileContainer: {
    flexDirection: 'row',
    top: 10,
  },
  completeProfileText: {
    flex: 5,
    fontSize: 15,
    color: '#000',
    marginLeft: 5,
    padding: 0,
  },
  completeProfileSerial: {
    flex: 3,
    fontSize: 15,
    color: '#000',
  },
  scroll: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 30,
  },
  bigBtn: {
    height: 320,
    width: 300,
    margin: 10,
    marginVertical: 70,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
    alignSelf: 'center',
  },
  bigBtnImagesContainer: {
    height: 230,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    top: -70,
    zIndex: 15,
  },
  bigBtnImages: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  bigBtnImageBackground: {
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    zIndex: 2,
  },
  bigBtnTitle: {
    marginVertical: 15,
    paddingHorizontal: 25,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  bigBtnDescription: {
    paddingHorizontal: 25,
    color: '#959595',
  },
  btnsBottomSection: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingTop: 15,
  },
  goActivate: {
    marginLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  smallImage: {
    width: 15,
    height: 15,
  },
});
