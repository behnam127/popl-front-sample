import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import colors from '../ThemeColor/ThemeColor';

export default class Preview extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      offsetY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.addLinkAnimation();
  }

  addLinkAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.offsetY, {
          toValue: -100,
          duration: 10000,
          delay: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.offsetY, {
          toValue: 0,
          duration: 10000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 99999,
      },
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() =>
              Navigation.pop(this.props.componentId, {
                component: {
                  name: 'PersonalProfile',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'PersonalProfile',
                      },
                    },
                  },
                },
              })
            }
            style={styles.backBtn}>
            <Image
              style={styles.backBtn}
              source={require('../../assets/images/back.png')}></Image>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{alignItems: 'center'}}>
          <View style={styles.profileContainer}></View>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profile.png')}></Image>
          <Text style={styles.profileName}>Behnam</Text>
          <View style={styles.contactWithMeContainer}>
            <TouchableOpacity style={styles.contactWithMeBtn}>
              <Text style={styles.contactWithMeBtnText}>Connect With Me</Text>
            </TouchableOpacity>
            <Image
              style={styles.contactWithMeImage}
              source={require('../../assets/images/addContact.png')}></Image>
          </View>
          <View style={styles.scrollContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'AddLinks',
                    options: {
                      topBar: {
                        title: {
                          text: 'AddLinks',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.addLinksBtn}>
              <Text style={styles.addLinksName}>
                You have not added any Links yet
              </Text>
            </TouchableOpacity>

            <View style={styles.socialsImgContainer}>
              <LinearGradient
                style={{
                  width: '100%',
                  height: 100,
                  zIndex: 10,
                  position: 'absolute',
                }}
                colors={['rgba(255,255,255,1)', 'rgba(0,0,0,0.0)']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}></LinearGradient>
              <Animated.View
                style={{transform: [{translateY: this.state.offsetY}]}}>
                <Image
                  style={styles.socialsImg}
                  source={require('../../assets/images/socialsImg.png')}></Image>
              </Animated.View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#fff',
  },
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    height: 80,
  },
  backBtn: {
    width: 30,
    height: 30,
    top: Platform.OS === 'ios' ? 25 : 10,
    marginLeft: 10,
    flex: 1,
    alignItems: 'flex-start',
    zIndex: 5,
    tintColor: colors.textColor,
  },
  scroll: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  profileContainer: {
    width: '85%',
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    backgroundColor: '#f7f7f7',
    width: 170,
    height: 170,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 85,
    margin: 10,
    padding: 10,
    resizeMode: 'cover',
    position: 'relative',
    top: -100,
    marginBottom: -80,
  },
  profileName: {
    fontSize: 22,
    color: '#000',
  },
  contactWithMeContainer: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  contactWithMeBtn: {
    backgroundColor: '#000',
    paddingVertical: 20,
    width: '55%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,

    marginHorizontal: 20,
  },
  contactWithMeBtnText: {
    color: '#fff',
    fontSize: 18,
  },
  contactWithMeImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  scrollContainer: {
    width: '100%',
    height: 400,
    marginTop: 20,
  },
  addLinksBtn: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    zIndex: 5,
    backgroundColor: '#fff',
  },
  addLinksName: {
    fontSize: 16,
    top: 20,
  },

  whiteShadow: {
    position: 'absolute',
    width: '100%',
    height: 10,
    backgroundColor: '#000',

    zIndex: 10,
  },
  socialsImgContainer: {
    width: '100%',
    height: 100,
  },
  socialsImg: {
    width: '100%',
    height: 400,
  },
});
