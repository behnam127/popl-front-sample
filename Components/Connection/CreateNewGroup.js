import React, {Component} from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Connections from './Connections';
import colors from '../ThemeColor/ThemeColor';

export default class CreateNewGroup extends Component {
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
        <TouchableOpacity
          onPress={() =>
            Navigation.pop(this.props.componentId, {
              component: {
                name: 'Connections',
                options: {
                  bottomTabs: {
                    visible: false,
                  },
                  topBar: {
                    title: {
                      text: 'Connections',
                    },
                  },
                },
              },
            })
          }
          style={styles.cansel}>
          <Image
            style={styles.cansel}
            source={require('../../assets/images/cansel.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create a New Group</Text>
        <Text style={styles.headerText}>
          Organize your connections with groups
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'Group Name'}
            placeholderTextColor={colors.textColor}
            style={styles.input}></TextInput>
        </View>
        <View style={styles.createConnectionContainer}>
          <TouchableOpacity style={styles.createConnectionBtn}>
            <Text style={styles.createConnectionBtnText}>
              Create Connection{'    '}
              <Image
                style={styles.proImage}
                source={require('../../assets/images/proWhite.png')}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Navigation.registerComponent('Connections', () => Connections);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: colors.backgroundColor,
  },
  topBar: {
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
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
    backgroundColor: '#909090',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: colors.backgroundColor,
    padding: 30,
  },
  cansel: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 13,
    marginTop: Platform.OS === 'ios' ? 35 : 10,
    zIndex: 5,
    tintColor: colors.textColor,
  },
  headerTitle: {
    marginTop: Platform.OS === 'ios' ? 75 : 30,
    fontWeight: 'bold',
    fontSize: 26,
    color: colors.textColor,
  },
  headerText: {
    fontSize: 16,
    color: colors.textColor,
  },
  inputContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  input: {
    backgroundColor: colors.addingLinksTopContainer,
    width: '100%',
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
    width: '100%',
    height: 70,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 20,
  },
  createConnectionBtnText: {
    color: colors.backgroundColor,
    fontSize: 18,
  },
  proImage: {
    width: 20,
    height: 20,
    tintColor: colors.textColor,
    resizeMode: 'contain',
  },
});
