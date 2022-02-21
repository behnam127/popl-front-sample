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

export default class InsightsNewConnection extends Component {
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
        <Text style={{...styles.text, color: '#808080'}}>insights</Text>
        <Text style={styles.headerText}>New Connections</Text>

        <Text style={styles.text}>
          The total number of new connections that you gained by scanning a
          business card, having someone tap 'connect with me' on your profile or
          meeting another Popl user
        </Text>
      </View>
    );
  }
}

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '45%',
    backgroundColor: '#fff',
    borderRadius: 30,
    bottom: 0,
    position: 'absolute',
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
  },
  cansel: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 10,
    top: Platform.OS === 'ios' ? 20 : 10,
    zIndex: 5,
    display: Platform.OS === 'ios' ? 'flex' : 'none',
  },
  headerText: {
    marginVertical: 20,
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginVertical: 30,
  },
  text: {
    color: '#000',
    width: '90%',
    fontSize: 16,
  },
});
