import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Share,
  SafeAreaView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import UpgradePopup from '../UpgradeToPro/UpgradePopup';
import AddBtn from './AddBtn';
import Map from '../Map/Map';
import NFC from '../NFC/NFC';
import colors from '../ThemeColor/ThemeColor';
import ImagePickerScreen from '../CardScaning/ImagePickerScreen';

import ConnectionsProfile from './ConnectionsProfile';

export default class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      uniqueValue: 1,
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() =>
              Share.share({
                title: 'Share Our App',
                message: 'Thank you for sharing our app!',
                // or
                // url: ,
              })
            }
            style={styles.messagesImg}>
            <Image
              style={styles.messagesImg}
              source={require('../../assets/images/messages.png')}></Image>
          </TouchableOpacity>
          <View style={styles.topIconsContainer}>
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
              style={styles.topIcnon}>
              <Image
                source={require('../../assets/images/camera.png')}
                style={styles.topIcnonImage}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'Map',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'Map',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.topIcnon}>
              <Image
                source={require('../../assets/images/location.png')}
                style={styles.topIcnonImage}></Image>
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
              style={styles.topIcnon}>
              <Image
                source={require('../../assets/images/upgrade.png')}
                style={styles.topIcnonImage}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.topIcnon}
              onPress={() =>
                Navigation.showModal({
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'AddBtn',
                          options: {
                            modalPresentationStyle: 'overCurrentContext',
                            layout: {
                              backgroundColor: 'rgba(0,0,0,0.5)',
                            },

                            topBar: {
                              title: {
                                text: 'AddBtn',
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                })
              }>
              <Image
                source={require('../../assets/images/add.png')}
                style={styles.topIcnonImage}></Image>
            </TouchableOpacity>
          </View>
        </View>
        {/* Header End */}
        <View
          style={{
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <Text style={styles.headerText}>Connections</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'Search All Connections'}
            style={styles.input}></TextInput>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            Navigation.push(this.props.componentId, {
              component: {
                name: 'UpgradePopup',
                options: {
                  topBar: {
                    title: {
                      text: 'UpgradePopup',
                    },
                  },
                },
              },
            })
          }>
          <TouchableOpacity style={styles.btnInside}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.btnInsideText}>People</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: '5%',
              alignItems: 'center',
            }}>
            <Text style={styles.btnText}>
              Group{'  '}
              <Image
                style={styles.proImage}
                source={require('../../assets/images/proBlack.png')}></Image>
            </Text>
          </View>
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={{
            alignItems: 'flex-start',
            width: '100%',
            backgroundColor: colors.backgroundColor,
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
              fullName: 'Jason Alvarez-Cohen',
              jobTitle: 'CEO / Co-Founder @ Popl',
              fullDescription:
                'The mission at Popl is simple:\nHelp professionals network better using time-saving and eco-friendly technology',
            },
            {
              key: 'p2',
              profileImageUrl: require('../../assets/images/person2.jpeg'),
              name: 'Nick - COO of Popl',
              location: 'Kansas City, MO',
              message: 'Its Grea...',
              fullName: 'Nick',
              jobTitle: 'COO at Popl',
              fullDescription: 'COO & Co-founder @ Popl',
            },
            {
              key: 'p3',
              profileImageUrl: require('../../assets/images/c1.png'),
              name: 'Popl',
              location: 'Los Angeles, CA',
              message: 'Welcom to the Popl family',
              fullName: 'Popl',
              jobTitle: '',
              fullDescription: 'The future of networking',
            },
            {
              key: 'p4',
              profileImageUrl: require('../../assets/images/person3.jpeg'),
              name: 'Bry',
              location: 'San Francisco, CA',
              message: 'Head OF Customer ser...',
              fullName: 'Bry Johanson',
              jobTitle: 'Head of Customer Service',
              fullDescription:
                'The mission at Popl is simple: \nHelp professionals network better using time-saving and eco-friendly technology',
            },
          ]}
          renderItem={({item}) => (
            <ConnectionsProfile
              componentId={this.props.componentId}
              name={item.name}
              location={item.location}
              message={item.message}
              profileImageUrl={item.profileImageUrl}
              fullName={item.fullName}
              jobTitle={item.jobTitle}
              fullDescription={item.fullDescription}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}

Connections.options = {
  topBar: {
    title: {},
  },
  bottomTab: {},
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 35 : 0,
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    flex: 1,
    zIndex: 10,
  },
  messagesImg: {
    margin: 7,
    height: 40,
    width: 40,
    alignSelf: 'flex-start',
    flex: 1,
    tintColor: colors.textColor,
  },
  topIconsContainer: {
    alignSelf: 'center',
    position: 'relative',
    alignSelf: 'flex-end',
    marginRight: 15,
    flexDirection: 'row',
  },
  topIcnon: {
    backgroundColor: colors.backgroundColor,
    padding: 5,
  },
  topIcnonImage: {
    height: 40,
    width: 40,
    tintColor: colors.textColor,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    color: colors.textColor,
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  headerText: {
    fontSize: 30,
    marginTop: 50,
    fontWeight: '800',
    color: '#000',
    margin: 0,
    marginLeft: 35,
    color: colors.textColor,
  },
  inputContainer: {
    top: Platform.OS === 'ios' ? 50 : 20,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#f4f4f4',
    width: '80%',
    height: 60,
    margin: 10,
    borderRadius: 30,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: colors.textInputBackground,
    borderWidth: 1,
    borderColor: colors.textInputBorder,
  },
  btn: {
    width: '80%',
    height: 60,
    borderRadius: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginTop: Platform.OS === 'ios' ? 80 : 40,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
    backgroundColor: colors.primarySwitchBtnBackground,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primarySwitchBtnText,
    marginLeft: '10%',
  },
  btnInside: {
    width: '50%',
    height: '100%',
    backgroundColor: colors.secondarySwitchBtnBackground,
    borderRadius: 60,
    borderColor: '#bbb',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnInsideText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.secondarySwitchBtnText,
  },

  proImage: {
    width: 22,
    height: 22,
    tintColor: colors.textColor,
    resizeMode: 'contain',
  },
});
