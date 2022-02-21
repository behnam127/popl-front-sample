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
import LinearGradient from 'react-native-linear-gradient';
import ScanDevice from './ScanDevice';

export default class BeginActivation extends Component {
  static options(props) {
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
              source={require('../../assets/images/back.png')}></Image>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerText}>
          Tap the button to begin activation
        </Text>

        <View style={styles.emptyPhone}>
          <LinearGradient
            style={{
              width: '100%',
              height: '100%',
              zIndex: 10,
              alignItems: 'center',
            }}
            colors={['rgba(255,255,255,1)', 'rgba(0,0,0,0.0)']}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}>
            <Image
              style={styles.device}
              source={require('../../assets/images/c1.png')}
            />
            <Image
              resizeMode={'contain'}
              style={{width: '100%', height: '100%', zIndex: -1}}
              source={require('../../assets/images/emptyPhone.png')}
            />
          </LinearGradient>
        </View>
        <Text>Your Popl will be activated for</Text>
        <Text style={styles.headerTitle}>Behnam</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() =>
              Navigation.showModal({
                stack: {
                  children: [
                    {
                      component: {
                        name: 'ScanDevice',
                        options: {
                          modalPresentationStyle: 'overCurrentContext',
                          layout: {
                            backgroundColor: 'rgba(0,0,0,0.3)',
                          },

                          topBar: {
                            title: {
                              text: 'ScanDevice',
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              })
            }
            style={styles.btn}>
            <Text style={styles.btnText}>Begin Activation</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Navigation.registerComponent('ScanDevice', () => ScanDevice);

BeginActivation.options = {
  topBar: {
    title: {},
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000',
    paddingHorizontal: 30,
  },
  emptyPhone: {
    width: '70%',
    height: 300,
    alignSelf: 'center',
    marginTop: '20%',
    marginBottom: '10%',
    resizeMode: 'contain',
  },
  device: {
    width: 60,
    height: 60,
    top: -40,
    position: 'absolute',
  },
  btnContainer: {
    height: 80,
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
