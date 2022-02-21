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
  TextInput,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class ProfileLink extends Component {
  static options() {
    return {
      statusbar: false,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      link: 'k8LY9vP',
    };
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

        <Text style={styles.headerTitle}>Edit your profile link</Text>
        <Text style={styles.headerText}>
          Choose a profile link for your popl digital business card
        </Text>
        <View style={styles.textInputContainer}>
          <View placeholder={'Profile Link'} style={styles.link}>
            <Text>Profile Link</Text>
            <TextInput style={styles.linkText}>{this.state.link}</TextInput>
          </View>
        </View>
        <Text style={styles.showingLink}>
          popleme.co/<Text style={styles.linkText}>{this.state.link}</Text>
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
ProfileLink.options = {
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

  btnContainer: {
    height: 130,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#404040',
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
  textInputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    color: '#000',
    fontSize: 16,
    alignSelf: 'center',
    position: 'absolute',
    width: '55%',
    alignSelf: 'flex-end',
  },
  link: {
    backgroundColor: '#e6e6e6',
    width: '80%',
    height: 50,
    margin: 10,
    borderRadius: 15,
    paddingLeft: 10,
    borderWidth: 0.5,
    borderColor: '#c6c6c6',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  showingLink: {
    alignSelf: 'center',
  },
});
