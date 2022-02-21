import React, {Component} from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

// const opacity = value.interpolate({
//   inputRange: [0, 1],
//   outputRange: [1, 0.2],
// });

// const value = useRef(new Animated.Value(0)).current;

export default class Home extends Component {
  static options() {
    return {
      statusbar: false,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      offsetY: new Animated.Value(0),
      offsetY2: new Animated.Value(0),
      offsetY3: new Animated.Value(0),
    };
  }
  componentDidMount() {
    this.hideOnboarding();
    this.hideOnboarding2();
    this.hideOnboarding3();
  }

  hideOnboarding() {
    console.log('hiding'); // <-------- prints out when button pressed
    Animated.timing(this.state.offsetY, {
      toValue: -160,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  hideOnboarding2() {
    console.log('hiding'); // <-------- prints out when button pressed
    Animated.timing(this.state.offsetY2, {
      toValue: -160,
      duration: 1000,
      delay: 5000,
      useNativeDriver: true,
    }).start();
  }

  hideOnboarding3() {
    console.log('hiding'); // <-------- prints out when button pressed
    Animated.timing(this.state.offsetY3, {
      toValue: -160,
      duration: 10,
      delay: 10000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{position: 'absolute', top: 30, fontSize: 24}}>Popl</Text>
        <Animated.View style={{transform: [{translateY: this.state.offsetY}]}}>
          <TouchableOpacity>
            <View style={styles.slider}>
              <Text style={styles.sliderTitle}>
                Popl is your digital business card
              </Text>
              <Text style={styles.sliderText}>
                More connections, More leads, More sales
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{transform: [{translateY: this.state.offsetY2}]}}>
          <TouchableOpacity>
            <View style={styles.slider2}>
              <Text style={styles.sliderTitle}>Instantly Share Anything</Text>
              <Text style={styles.sliderText}>
                With a tap of your device or scan of your QR
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{transform: [{translateY: this.state.offsetY3}]}}>
          <TouchableOpacity>
            <View style={styles.slider3}></View>
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={{...styles.btn, ...{backgroundColor: '#f2f2f2'}}}
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'SignUp',
                  options: {
                    topBar: {
                      title: {
                        text: 'SignUp',
                      },
                    },
                  },
                },
              })
            }>
            <Text style={{...styles.btntext, ...{color: '#000'}}}>
              Create an contact
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.btn,
              ...{backgroundColor: '#000'},
            }}
            onPress={() =>
              Navigation.showModal({
                stack: {
                  children: [
                    {
                      component: {
                        name: 'SignInModal',
                        options: {
                          modalPresentationStyle: 'overCurrentContext',
                          layout: {
                            backgroundColor: 'rgba(0,0,0,0.5)',
                          },

                          topBar: {
                            title: {
                              text: 'SignInModal',
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              })
            }>
            <Text style={styles.btntext}>Already have an account? Sgin in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
Home.options = {
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
    title: {
      text: 'Home',
    },
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slider: {
    //position: 'absolute',

    width: '100%',
  },
  slider2: {
    //position: 'absolute',
    top: -50,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 5,
    backgroundColor: '#fff',
  },
  slider3: {
    //position: 'absolute',
    top: -120,
    width: 400,
    height: 100,
    paddingHorizontal: 20,
    zIndex: 6,
    backgroundColor: '#fff',
  },
  sliderTitle: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    color: '#000',
  },
  sliderText: {
    fontSize: 15,
    color: '#000',
  },
  btnRow: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 7,
  },
  btn: {
    paddingVertical: 25,
    width: '85%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 10,
  },
  btntext: {
    fontSize: 16,
    color: '#fff',
  },
});
