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

import BeginActivation from './BeginActivation';

export default class ActivateDevice extends Component {
  static options() {
    return {
      statusbar: false,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      offsetY: new Animated.Value(0),
      deviceImageURL: null,
    };
  }

  componentDidMount() {
    this.hideOnboarding();
  }

  hideOnboarding() {
    console.log('hiding'); // <-------- prints out when button pressed
    Animated.timing(this.state.offsetY, {
      toValue: -130,
      duration: 1000,
      useNativeDriver: true,
    }).start();
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
              source={require('../../assets/images/back.png')}></Image>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>Activate a Popl Device</Text>
        <Text style={styles.headerText}>
          Choose the device you are activating
        </Text>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.btnsContainer}>
            <TouchableOpacity
              onPress={() => {
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'BeginActivation',
                    id: 'BeginActivation',
                    passProps: {
                      deviceImageURL: require('../../assets/images/devices/popl.png'),
                    },
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'BeginActivation',
                        },
                      },
                    },
                  },
                });
              }}
              style={styles.btns}>
              <Image
                style={styles.deviceImage}
                source={require('../../assets/images/devices/popl.png')}></Image>
              <Text style={styles.btnsText}>Popl</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'BeginActivation',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'BeginActivation',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <Image
                style={styles.deviceImage}
                source={require('../../assets/images/devices/band.png')}></Image>
              <Text style={styles.btnsText}>Band</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'BeginActivation',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'BeginActivation',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <Image
                style={styles.deviceImage}
                source={require('../../assets/images/devices/card.png')}></Image>
              <Text style={styles.btnsText}>Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'BeginActivation',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'BeginActivation',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <Image
                style={styles.deviceImage}
                source={require('../../assets/images/devices/keychain.png')}></Image>
              <Text style={styles.btnsText}>Keychain</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'BeginActivation',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'BeginActivation',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <Image
                style={styles.deviceImage}
                source={require('../../assets/images/devices/poplXL.png')}></Image>
              <Text style={styles.btnsText}>Popl XL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'BeginActivation',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'BeginActivation',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <Image
                style={styles.deviceImage}
                source={require('../../assets/images/devices/nomadcase.png')}></Image>
              <Text style={styles.btnsText}>Nomad Case</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'BeginActivation',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'BeginActivation',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <Image
                style={styles.deviceImage}
                source={require('../../assets/images/devices/handlxpopl.png')}></Image>
              <Text style={styles.btnsText}>Handl x Popl</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'BeginActivation',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'BeginActivation',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.btns}>
              <Image
                style={styles.deviceImage}
                source={require('../../assets/images/devices/moftxpopl.png')}></Image>
              <Text style={styles.btnsText}>Moft x Popl</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Animated.View
          style={{
            transform: [{translateY: this.state.offsetY}],
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'BeginActivation',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'BeginActivation',
                      },
                    },
                  },
                },
              })
            }
            style={styles.discountContainer}>
            <View>
              <Text style={styles.headerTitle}>Get a Popl Device</Text>
              <Text style={styles.headerText}>20% off</Text>
            </View>
            <View>
              <Image
                style={styles.discountImage}
                source={require('../../assets/images/devices.png')}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

Navigation.registerComponent('BeginActivation', () => BeginActivation);

ActivateDevice.options = {
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
    marginBottom: 130,
    height: '100%',
  },
  btnsContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  btns: {
    width: 120,
    height: 100,
    borderColor: '#e2e2e2',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    margin: 15,
    alignItems: 'center',
    borderTopColor: '#fff',
  },
  btnsText: {
    color: '#000',
    width: 60,
    alignItems: 'center',
    textAlign: 'center',
  },
  deviceImage: {
    width: 70,
    height: 50,
    position: 'relative',
    top: -20,
    resizeMode: 'contain',
  },
  discountContainer: {
    width: '100%',
    height: 130,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 10,
    zIndex: 5,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -130,
    flexDirection: 'row',
  },
  discountImage: {
    height: 130,
    width: 135,
  },
});
