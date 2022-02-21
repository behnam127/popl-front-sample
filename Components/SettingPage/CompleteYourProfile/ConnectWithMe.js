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
import {Navigation} from 'react-native-navigation';

export default class ConnectWithMe extends Component {
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
        <Text style={styles.headerText}>Connect Button</Text>
        <Text style={styles.descText}>
          The "connect with me" button on your profile allows you to save the
          information of the person you are meeting
        </Text>
        <Image
          style={styles.image}
          source={require('../../../assets/images/c4.png')}
        />
        <Text style={styles.titleText}>How the button works:</Text>
        <Text style={styles.descText}>
          1. Share your Popl digital business card with someone
        </Text>
        <Text style={styles.descText}>
          2. Have them tap the "Connect with me" button on your profile and fill
          out the form
        </Text>
        <Text style={styles.descText}>
          3. Once complete, that person is saved as a Connection
        </Text>
        <TouchableOpacity
          onPress={() => Navigation.pop(this.props.componentId)}
          style={styles.button}>
          <Text style={styles.buttonText}>Gotit!</Text>
        </TouchableOpacity>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 30,
    marginTop: 50,
    fontWeight: '800',
    color: '#000',
    margin: 20,
    marginLeft: 35,
  },
  descText: {
    fontSize: 16,
    color: '#000',
    margin: 20,
    marginTop: 10,
    marginLeft: 35,
  },
  image: {
    alignSelf: 'center',
    width: '50%',
    height: '30%',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 20,
    resizeMode: 'contain',
    shadowOpacity: 0.1,
  },
  titleText: {
    fontSize: 22,
    color: '#000',
    fontWeight: '700',
    margin: 20,
    marginTop: 10,
    marginLeft: 35,
  },
  button: {
    width: '80%',
    height: 80,
    backgroundColor: '#000',
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
