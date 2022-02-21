import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Modal,
  FlatList,
  Dimensions,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import colors from '../ThemeColor/ThemeColor';
import MapView, {Marker} from 'react-native-maps';
import ConnectionsProfile from '../Connection/ConnectionsProfile';

export default class Map extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      coordinate: {
        latitude: 35.7236902,
        longitude: 51.442791,
      },
      listHeight: '15%',
      displayTopContent: 'flex',
      displayDownBtn: 'none',
      displayTopDash: 'flex',
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);

    // Navigation.showModal({
    //   stack: {
    //     children: [
    //       {
    //         component: {
    //           name: 'SignIn',
    //           options: {
    //             modalPresentationStyle: 'overCurrentContext',
    //             layout: {
    //               backgroundColor: 'rgba(0,0,0,0.5)',
    //             },

    //             topBar: {
    //               title: {
    //                 text: 'SignIn',
    //               },
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    // });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 35.7177313,
            longitude: 51.4224732,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.9421,
          }}
          style={styles.map}>
          <Marker coordinate={this.state.coordinate}>
            <Image
              style={styles.mapMarkerImage}
              source={require('../../assets/images/person2.jpeg')}
            />
          </Marker>
        </MapView>
        <TouchableOpacity
          onPress={() => Navigation.pop(this.props.componentId)}
          style={{...styles.backBtn, display: this.state.displayTopContent}}>
          <Image
            style={styles.backBtnImage}
            source={require('../../assets/images/back.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            ...styles.topTextContainer,
            display: this.state.displayTopContent,
          }}>
          <Text style={styles.topText}>
            Locations shown are only where you met each connection
          </Text>
        </View>
        <View
          style={{...styles.scrollContainer, height: this.state.listHeight}}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
            }}
            onScrollBeginDrag={() =>
              this.setState({
                listHeight: '100%',
                displayTopContent: 'none',
                displayDownBtn: 'flex',
                displayTopDash: 'none',
              })
            }>
            <View
              style={{
                ...styles.scrollTopDash,
                display: this.state.displayTopDash,
              }}></View>
            <TouchableOpacity
              style={{...styles.DownBtn, display: this.state.displayDownBtn}}
              onPress={() =>
                this.setState({
                  listHeight: '15%',
                  displayTopContent: 'flex',
                  displayDownBtn: 'none',
                  displayTopDash: 'flex',
                })
              }>
              <Text>Press</Text>
              <Image
                style={styles.downBtnImage}
                source={require('../../assets/images/down.png')}
              />
            </TouchableOpacity>
            <TextInput style={styles.search} placeholder={'Search'}></TextInput>

            <View>
              <TouchableOpacity
                onPress={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'ProfileOfConnections',
                      options: {
                        topBar: {
                          title: {
                            text: 'ProfileOfConnections',
                          },
                        },
                      },
                    },
                  })
                }
                style={styles.profileContainer}>
                <Image
                  style={styles.profileImage}
                  source={require('../../assets/images/person1.jpeg')}></Image>
                <View>
                  <Text style={styles.profileName}>
                    Jason - CEO @ Popl
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View style={styles.colors}>
                        <Image
                          style={styles.tick}
                          source={require('../../assets/images/tick.png')}
                        />
                      </View>
                      <Image
                        style={styles.proImage}
                        source={require('../../assets/images/proBlack.png')}></Image>
                    </View>
                  </Text>
                  <Text style={styles.profileDesc}>Los Angeles, CA</Text>
                  <Text style={styles.profileDesc}>Hi! id like to welc...</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'ProfileOfConnections',
                      options: {
                        topBar: {
                          title: {
                            text: 'ProfileOfConnections',
                          },
                        },
                      },
                    },
                  })
                }
                style={styles.profileContainer}>
                <Image
                  style={styles.profileImage}
                  source={require('../../assets/images/person2.jpeg')}></Image>
                <View>
                  <Text style={styles.profileName}>
                    Nick - COO of Popl
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View style={styles.colors}>
                        <Image
                          style={styles.tick}
                          source={require('../../assets/images/tick.png')}
                        />
                      </View>
                      <Image
                        style={styles.proImage}
                        source={require('../../assets/images/proBlack.png')}></Image>
                    </View>
                  </Text>
                  <Text style={styles.profileDesc}>Kansas City, MO</Text>
                  <Text style={styles.profileDesc}>Its Grea...</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'ProfileOfConnections',
                      options: {
                        topBar: {
                          title: {
                            text: 'ProfileOfConnections',
                          },
                        },
                      },
                    },
                  })
                }
                style={styles.profileContainer}>
                <Image
                  style={styles.profileImage}
                  source={require('../../assets/images/c1.png')}></Image>
                <View>
                  <Text style={styles.profileName}>
                    Popl
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View style={styles.colors}>
                        <Image
                          style={styles.tick}
                          source={require('../../assets/images/tick.png')}
                        />
                      </View>
                      <Image
                        style={styles.proImage}
                        source={require('../../assets/images/proBlack.png')}></Image>
                    </View>
                  </Text>
                  <Text style={styles.profileDesc}>Los Angeles, CA</Text>
                  <Text style={styles.profileDesc}>
                    Welcom to the Popl family
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'ProfileOfConnections',
                      options: {
                        topBar: {
                          title: {
                            text: 'ProfileOfConnections',
                          },
                        },
                      },
                    },
                  })
                }
                style={styles.profileContainer}>
                <Image
                  style={styles.profileImage}
                  source={require('../../assets/images/person3.jpeg')}></Image>
                <View>
                  <Text style={styles.profileName}>
                    Bry
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View style={styles.colors}>
                        <Image
                          style={styles.tick}
                          source={require('../../assets/images/tick.png')}
                        />
                      </View>
                      <Image
                        style={styles.proImage}
                        source={require('../../assets/images/proBlack.png')}></Image>
                    </View>
                  </Text>
                  <Text style={styles.profileDesc}>San Francisco, CA</Text>
                  <Text style={styles.profileDesc}>
                    Head OF Customer ser...
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <FlatList
              contentContainerStyle={{
                alignItems: 'flex-start',
                width: '100%',
                backgroundColor: '#fff',
                padding: 10,
              }}
              horizontal={false}
              showsHorizontalScrollIndicator={true}
              data={[
                {
                  key: 'p1',
                  profileImageUrl: require('../../assets/images/person1.jpeg'),
                  name: 'Jason - CEO @ Popl',
                  location: 'Los Angeles, CA',
                  message: 'Hi! id like to welc... ',
                },
                {
                  key: 'p2',
                  profileImageUrl: require('../../assets/images/person2.jpeg'),
                  name: 'Nick - COO of Popl',
                  location: 'Kansas City, MO',
                  message: 'Its Grea...',
                },
                {
                  key: 'p3',
                  profileImageUrl: require('../../assets/images/c1.png'),
                  name: 'Popl',
                  location: 'Los Angeles, CA',
                  message: 'Welcom to the Popl family',
                },
                {
                  key: 'p4',
                  profileImageUrl: require('../../assets/images/person3.jpeg'),
                  name: 'Bry',
                  location: 'San Francisco, CA',
                  message: 'Head OF Customer ser...',
                },
                {
                  key: 'p5',
                  profileImageUrl: require('../../assets/images/person3.jpeg'),
                  name: 'Bry',
                  location: 'San Francisco, CA',
                  message: 'Head OF Customer ser...',
                },
              ]}
              renderItem={({item}) => (
                <ConnectionsProfile
                  name={item.name}
                  location={item.location}
                  message={item.message}
                  profileImageUrl={item.profileImageUrl}
                />
              )}
            /> */}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

Map.options = {
  topBar: {
    visible: false,

    title: {
      color: colors.backgroundColor,
    },

    backButton: {
      color: colors.textColor,
    },
    background: {
      color: colors.backgroundColor,
    },
  },
  bottomTab: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapMarkerImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  backBtn: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    top: Platform.OS === 'ios' ? 60 : 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
  },
  backBtnImage: {
    width: '60%',
    height: '60%',
  },
  topTextContainer: {
    position: 'absolute',
    width: '70%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    top: Platform.OS === 'ios' ? 60 : 10,
    right: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
  },
  topText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  scrollContainer: {
    width: '100%',
    backgroundColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
  },
  scroll: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 10,
  },
  scrollTopDash: {
    borderWidth: 1,
    height: 1,
    width: 40,
    marginVertical: 10,
    borderColor: '#000',
  },
  DownBtn: {
    width: 50,
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  downBtnImage: {
    width: 50,
    height: 50,
  },
  search: {
    width: '90%',
    height: 50,
    backgroundColor: '#e2e2e2',
    borderRadius: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },

  ///profiles
  profileContainer: {
    width: Dimensions.get('window').width,
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
    bottom: 30,
  },
  profileImage: {
    backgroundColor: colors.primarySwitchBtnBackground,
    width: 75,
    height: 75,
    borderRadius: 100,
    margin: 10,
    padding: 10,
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.textColor,

    top: 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileDesc: {
    fontSize: 12,
    color: colors.textColor,
    top: 20,
  },
  proImage: {
    width: 22,
    height: 22,
    marginLeft: 3,
    tintColor: colors.textColor,
    resizeMode: 'contain',
  },
  colors: {
    height: 20,
    width: 20,
    backgroundColor: '#80bfff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tick: {
    height: 10,
    width: 10,
    tintColor: '#fff',
  },
});
