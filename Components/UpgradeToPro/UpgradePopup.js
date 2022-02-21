import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Connections from '../Connection/Connections';
import Header from '../Header';

export default class UpgradePopup extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            Navigation.pop(this.props.componentId);
            Navigation.dismissModal(this.props.componentId);
          }}
          style={styles.cansel}>
          <Image
            style={styles.cansel}
            source={require('../../assets/images/cansel.png')}></Image>
        </TouchableOpacity>

        <ScrollView style={styles.scroll}>
          <Text style={styles.upgardeTitle}>Upgrade to Pro</Text>
          <Text style={styles.upgardeText}>
            Scroll down to see some of the incredible feachures you get with
            Popl Pro
          </Text>

          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/images/upgardeimage.png')}
          />
          <Text style={styles.proFeature}>Pro Feature</Text>
          <Text style={styles.upgardeTitle}>Personal + Business Mode</Text>
          <Text style={styles.upgardeText}>
            Build both a personal and business profile and instantly switch
            between them whenever you'd like
          </Text>

          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/images/upgardeimage2.jpg')}
          />
          <Text style={styles.proFeature}>Pro Feature</Text>
          <Text style={styles.upgardeTitle}>
            Capture Leads and Build your Network
          </Text>
          <Text style={styles.upgardeText}>
            Capture leads using Popl and favorite, group, sort and manage them
            all from here. Start your conections now
          </Text>

          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/images/upgradeimage3.jpg')}
          />
        </ScrollView>
        <View style={styles.priceContainer}>
          <TouchableOpacity
            style={{...styles.btn, ...{backgroundColor: '#f2f2f2'}}}
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'Login',
                  options: {
                    topBar: {
                      title: {
                        text: 'Login',
                      },
                    },
                  },
                },
              })
            }>
            <TouchableOpacity style={styles.btnInside}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={styles.btnInsideText}>Yearly</Text>
                <Text style={styles.btnInsidePrice}>$47.99</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: '5%',
                alignItems: 'center',
              }}>
              <Text style={styles.btnText}>Montly</Text>
              <Text style={styles.btnInsidePrice}>$4.99</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btnText2}>Try 2 Weeks Free</Text>
          </TouchableOpacity>
          <Text>2 weeks free trial. Cansel anytime</Text>
        </View>
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
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
  },
  cansel: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 10,
    top: Platform.OS === 'ios' ? 20 : 10,
    zIndex: 5,
  },
  scroll: {
    width: '100%',
    height: '65%',
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },

  upgardeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginLeft: 20,
    marginTop: 20,
    marginRight: 60,
    top: Platform.OS === 'ios' ? 0 : 0,
  },
  upgardeText: {
    fontSize: 17,
    color: '#000',
    margin: 20,
    marginRight: 60,
  },
  image: {
    height: 250,
    width: '100%',
    margin: 10,
  },
  proFeature: {
    marginLeft: 22,
    marginBottom: -15,
    fontSize: 16,
    color: '#909090',
  },

  // Price Container
  priceContainer: {
    width: '100%',
    height: '35%',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 40,
    alignItems: 'center',
  },
  btn: {
    width: '80%',
    height: 60,
    borderRadius: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginLeft: '10%',
  },
  btnInside: {
    width: '50%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#bbb',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnInsideText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  btnInsidePrice: {
    fontSize: 16,
    color: '#000',
  },
  btn2: {
    padding: 10,
    backgroundColor: '#000',
    width: '80%',
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  btnText2: {
    fontSize: 20,
    color: '#fff',
  },
});
