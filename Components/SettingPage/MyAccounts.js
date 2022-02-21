import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TextInputBase,
  Switch,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import colors from '../ThemeColor/ThemeColor';

export default class MyAccounts extends Component {
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
        <View>
          <Text style={styles.headerTitle}>My Accounts</Text>
        </View>
        <ScrollView
          contentContainerStyle={{alignItems: 'center'}}
          style={styles.scroll}>
          <TouchableOpacity style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.profileImage}
                source={require('../../assets/images/person.png')}></Image>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.profileName}>Behnam</Text>
              </View>
              <Text style={styles.profileDesc}>bnm.poshtiban@gmail.com</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.colors}>
                <Image
                  style={styles.tick}
                  source={require('../../assets/images/tick.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.addAccountContainer}>
          <TouchableOpacity style={styles.addAnotherBtn}>
            <Text style={styles.addAnotherBtnText}>Add Another Account </Text>
            <Image
              style={styles.proImage}
              source={require('../../assets/images/proBlack.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Navigation.pop(this.props.componentId)}
            style={styles.canselBtn}>
            <Text style={styles.canselBtnText}>Cansel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  headerTitle: {
    fontWeight: '800',
    fontSize: 22,
    color: colors.textColor,
    marginVertical: 30,
  },
  scroll: {
    width: '100%',
    height: '85%',
    backgroundColor: colors.backgroundColor,
    marginTop: 20,
  },
  accountsBtnContainer: {
    height: 150,
    width: '90%',
  },
  profileContainer: {
    width: '80%',
    height: 100,
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
    bottom: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  profileImageContainer: {
    backgroundColor: '#ebebeb',
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 10,
    padding: 10,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  profileName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.textColor,
    top: 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileDesc: {
    fontSize: 12,
    color: colors.textColor,
    top: 20,
  },
  colors: {
    height: 20,
    width: 20,
    backgroundColor: colors.textColor,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  tick: {
    height: 10,
    width: 10,
    tintColor: colors.backgroundColor,
  },
  addAccountContainer: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    flexDirection: 'column',
  },
  canselBtn: {
    backgroundColor: colors.grayBtn,
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
  canselBtnText: {
    color: colors.textColor,
    fontSize: 18,
  },
  addAnotherBtn: {
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
    backgroundColor: colors.grayBtnText,
    marginBottom: 10,
    flexDirection: 'row',
  },
  addAnotherBtnText: {
    color: colors.backgroundColor,
    fontSize: 18,
  },
  proImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    tintColor: colors.backgroundColor,
    resizeMode: 'contain',
  },
});
