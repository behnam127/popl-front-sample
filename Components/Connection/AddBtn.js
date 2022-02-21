import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import CreateNewConnection from './CreateNewConnection';
import CreateNewGroup from './CreateNewGroup';
import colors from '../ThemeColor/ThemeColor';

export default class AddBtn extends Component {
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
        <View style={styles.appHeaderLogo}>
          <Text style={styles.logoText}>_____</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'CreateNewConnection',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'CreateNewConnection',
                      },
                    },
                  },
                },
              })
            }
            style={styles.createNewBtn}>
            <Text style={styles.btntext}>
              <Image
                style={styles.icon}
                source={require('../../assets/images/addContact.png')}></Image>
              {'   '}
              Create New Connection
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'ImagePickerScreen',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'ImagePickerScreen',
                      },
                    },
                  },
                },
              })
            }
            style={styles.createNewBtn}>
            <Text style={styles.btntext}>
              <Image
                style={styles.icon}
                source={require('../../assets/images/camera.png')}></Image>
              {'   '}
              Scan Business Card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'CreateNewGroup',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      title: {
                        text: 'CreateNewGroup',
                      },
                    },
                  },
                },
              })
            }
            style={styles.createNewBtn}>
            <Text style={styles.btntext}>
              <Image
                style={styles.icon}
                source={require('../../assets/images/add.png')}></Image>
              {'   '}
              Create New Group
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => Navigation.dismissModal(this.props.componentId)}
          style={styles.btn2}>
          <Text style={styles.btnText2}>Cansel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Navigation.registerComponent('CreateNewConnection', () => CreateNewConnection);
Navigation.registerComponent('CreateNewGroup', () => CreateNewGroup);

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '55%',
    backgroundColor: colors.backgroundColor,
    borderTopLeftRadius: 20,
    borderTopRighttRadius: 20,
    bottom: 0,
    position: 'absolute',
    paddingTop: 50,
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
  },
  appHeaderLogo: {
    alignSelf: 'center',
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: '40%',
    marginRight: '40%',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textColor,
    marginLeft: 10,
  },
  createNewBtn: {
    paddingVertical: 10,
    width: '75%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 5,
    marginTop: 0,
    alignSelf: 'center',
    backgroundColor: colors.connectionAddBtnBackground,
  },
  btn: {
    paddingVertical: 10,
    width: '85%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 5,
    shadowColor: '#fff',
    elevation: 10,
    shadowOpacity: 0.1,
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  btntext: {
    fontSize: 16,
    color: colors.textColor,
    margin: 3,
  },

  icon: {
    width: 30,
    height: 30,
    marginRight: 3,
    zIndex: 3,
    resizeMode: 'cover',
    tintColor: colors.textColor,
  },

  btn2: {
    padding: 10,
    backgroundColor: colors.grayBtnText,
    width: '70%',
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  btnText2: {
    fontSize: 20,
    color: colors.grayBtn,
  },
});
