import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import colors from '../ThemeColor/ThemeColor';

export default class CreateNewConnection extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>
              <Image
                style={styles.proImage}
                source={require('../../assets/images/camera.png')}></Image>{' '}
              Scan a Business Card{'    '}
              <Image
                style={styles.proImage}
                source={require('../../assets/images/proBlack.png')}></Image>
            </Text>
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <TouchableOpacity style={styles.editImageBtn}>
              <Text style={styles.editImageBtnText}>Edit Images</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profile.png')}></Image>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Name'}
              style={styles.input}
              placeholderTextColor={colors.textColor}></TextInput>
            <TextInput
              placeholder={'Email'}
              style={styles.input}
              placeholderTextColor={colors.textColor}></TextInput>
            <TextInput
              placeholder={'Company'}
              style={styles.input}
              placeholderTextColor={colors.textColor}></TextInput>
            <TextInput
              placeholder={'Website'}
              style={styles.input}
              placeholderTextColor={colors.textColor}></TextInput>
            <TextInput
              placeholder={'Location'}
              placeholderTextColor={colors.textColor}
              style={styles.input}></TextInput>
            <TextInput
              placeholder={'Instagram'}
              placeholderTextColor={colors.textColor}
              style={styles.input}></TextInput>
            <TextInput
              placeholder={'Phone Number'}
              placeholderTextColor={colors.textColor}
              style={styles.input}></TextInput>
            <TextInput
              placeholder={'Job Title'}
              placeholderTextColor={colors.textColor}
              style={styles.input}></TextInput>
            <TextInput
              placeholder={'Notes'}
              style={styles.input}
              placeholderTextColor={colors.textColor}></TextInput>
          </View>
        </ScrollView>
        <View style={styles.createConnectionContainer}>
          <TouchableOpacity style={styles.createConnectionBtn}>
            <Text style={styles.createConnectionBtnText}>
              Create Connection
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

CreateNewConnection.options = {
  topBar: {
    visible: true,

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },

  scroll: {
    width: '100%',
    height: '85%',
    backgroundColor: colors.backgroundColor,
  },
  proImage: {
    width: 20,
    height: 20,
    tintColor: colors.textColor,
    resizeMode: 'contain',
  },

  link: {
    top: 50,
    backgroundColor: colors.grayBtn,
    width: '85%',
    height: 60,
    margin: 10,
    borderRadius: 15,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginBottom: 80,
  },
  linkText: {
    color: colors.textColor,
    fontSize: 16,
  },
  profileContainer: {
    width: '85%',
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editImageBtn: {
    position: 'absolute',
    top: 10,
    right: 20,
    borderRadius: 15,
    height: 30,
    backgroundColor: colors.backgroundColor,
    padding: 5,
    paddingHorizontal: 20,
  },
  editImageBtnText: {
    color: colors.textColor,
  },
  profileImage: {
    backgroundColor: '#f7f7f7',
    width: 170,
    height: 170,
    borderWidth: 5,
    borderColor: colors.backgroundColor,
    borderRadius: 85,
    margin: 10,
    padding: 10,
    resizeMode: 'cover',
    position: 'relative',
    top: -100,
    marginBottom: -80,
  },
  inputContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: colors.addingLinksTopContainer,
    width: '85%',
    height: 50,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
    color: colors.textColor,
  },

  createConnectionContainer: {
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
  createConnectionBtn: {
    backgroundColor: colors.textColor,
    paddingVertical: 10,
    width: '80%',
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
  },
  createConnectionBtnText: {
    color: colors.backgroundColor,
    fontSize: 18,
  },
});
