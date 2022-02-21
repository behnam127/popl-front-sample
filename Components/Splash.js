import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  SafeAreaView,
  Animated,
  PlatformColor,
  Platform,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Spinner from 'react-native-spinkit';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    this.getTokenData();
    this.timer();
  }

  async timer() {
    this.interval = setInterval(() => {
      console.log('timer3s');
      if (!this.state.token) {
        this.navigatToLoginHome();
        clearInterval(this.interval);
      } else {
        this.navigateToPersonalProfile();
        clearInterval(this.interval);
      }
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTokenData = async () => {
    try {
      const TokenValue = await AsyncStorage.getItem('@Token_ID');
      this.setState({token: TokenValue});
      return TokenValue;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            color: '#000',
            fontSize: 100,
            fontWeight: 'bold',
            letterSpacing: 15,
          }}>
          P
          <Spinner
            isVisible={this.state.loading}
            color="#000"
            size={55}
            type="Circle"
            style={{marginBottom: Platform.OS == 'ios' ? 8 : 0}}
          />
          {Platform.OS == 'ios' ? ' ' : ''}
          pl
        </Text>
      </SafeAreaView>
    );
  }

  navigatToLoginHome() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Home',
        options: {
          bottomTabs: {
            visible: false,
          },
          topBar: {
            title: {
              text: 'Home',
            },
          },
        },
      },
    });
  }

  navigateToPersonalProfile() {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            bottomTab: {},
          },
          children: [
            {
              stack: {
                id: 'FIRST_TAB',
                children: [
                  {
                    component: {
                      id: 'FIRST_SCREEN',
                      name: 'PersonalProfile',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('./../assets/images/person.png'),
                    text: 'Home',
                  },
                },
              },
            },
            {
              stack: {
                id: 'SECOND_TAB',
                children: [
                  {
                    component: {
                      id: 'SECOND_SCREEN',
                      name: 'Connections',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('./../assets/images/connections.png'),
                    text: 'Connections',
                  },
                },
              },
            },
            {
              stack: {
                id: 'THIRD_TAB',
                children: [
                  {
                    component: {
                      id: 'THIRD_SCREEN',
                      name: 'QrCode',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('./../assets/images/qr.png'),

                    text: 'Share',
                  },
                },
              },
            },
            {
              stack: {
                id: 'FORTH_TAB',
                children: [
                  {
                    component: {
                      id: 'FORTH_SCREEN',
                      name: 'Insights',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('./../assets/images/chart.png'),
                    text: 'Insights',
                  },
                },
              },
            },
            {
              stack: {
                id: 'FIFTH_TAB',
                children: [
                  {
                    component: {
                      id: 'FIFTH_SCREEN',
                      name: 'SettingPage',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: require('./../assets/images/dots.png'),
                    text: 'Settings',
                  },
                },
              },
            },
          ],
        },
      },
    });
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
});
