import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  TextInput,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../../Header';
import Preview from '../Preview';
import AddLinks from './AddLinks';
import UpgradePopup from '../../UpgradeToPro/UpgradePopup';
import EditProfile from '../EditProfile';
import PoplDirect from '../PoplDirect';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../ThemeColor/ThemeColor';
import ContactInfo from './ContactInfo';

export default class AddingLinkPage extends Component {
  static options(props) {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      PassedTitle: this.props.PassingTitle,
      PassedImageUrl: this.props.PassingImageUrl,
      PassedPlaceholder: this.props.passingPlaceholder,
      currentTheme: colors.getTheme(),
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              Navigation.pop(this.props.componentId);
            }}
            style={styles.canselImg}>
            <Image
              style={styles.canselImg}
              source={require('../../../assets/images/cansel.png')}></Image>
          </TouchableOpacity>
          <View style={styles.appHeaderLogo}>
            <Text style={styles.logoText}>{this.state.PassedTitle}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.headerPreview}>
          <Text style={styles.previewText}>Preview</Text>
        </TouchableOpacity>
        <View style={styles.topContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.topOfContainer}>
              <Switch trackColor={{true: 'gray', false: 'darkgray'}} />
              <Text style={styles.text}>Highlight</Text>
            </View>
            <View style={styles.topOfContainer}>
              <TouchableOpacity style={styles.customizeBtn}>
                <Image
                  style={styles.editImage}
                  source={require('../../../assets/images/edit.png')}
                />
                <Text style={styles.text}> Customize icon</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.iconImageContainer}>
            <Image
              style={styles.iconImage}
              source={this.state.PassedImageUrl}
            />
            <Text style={styles.text}>{this.state.PassedTitle}</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{height: 150, alignItems: 'center'}}
          style={styles.scroll}>
          <TextInput
            style={styles.txtInput}
            placeholder={this.state.PassedPlaceholder}
            placeholderTextColor={colors.textColor}></TextInput>
        </ScrollView>
        <View style={styles.saveProfileContainer}>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'Preview',
                  options: {
                    bottomTabs: {
                      visible: false,
                    },
                    topBar: {
                      PassedTitle: {
                        text: 'Preview',
                      },
                    },
                  },
                },
              })
            }
            style={{
              ...styles.saveProfileBtn,
              backgroundColor: colors.grayBtn,
              marginBottom: 10,
            }}>
            <Text
              style={{...styles.saveProfileBtnText, color: colors.grayBtnText}}>
              Add Another {this.state.PassedTitle}{' '}
              <Image
                style={styles.proImage}
                source={require('../../../assets/images/proBlack.png')}
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Navigation.pop(this.props.componentId)}
            style={styles.saveProfileBtn}>
            <Text style={styles.saveProfileBtnText}>Save Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
Navigation.registerComponent('Preview', () => Preview);
Navigation.registerComponent('AddLinks', () => AddLinks);
Navigation.registerComponent('UpgradePopup', () => UpgradePopup);
Navigation.registerComponent('EditProfile', () => EditProfile);
Navigation.registerComponent('PoplDirect', () => PoplDirect);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#000',
    visible: true,
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
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  headerContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    flex: 1,
  },
  canselImg: {
    margin: 6,
    marginTop: 10,
    height: 40,
    width: 30,
    alignSelf: 'flex-start',
    flex: 1,
    tintColor: colors.textColor,
  },
  appHeaderLogo: {
    alignSelf: 'center',
    position: 'absolute',
    marginLeft: '35%',
    marginRight: '30%',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textColor,
    marginLeft: 10,
  },

  headerPreview: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 20 : 0,
    right: 0,
    marginTop: 20,
    marginRight: 10,
  },
  previewText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.textColor,
  },
  topContainer: {
    width: '100%',
    height: 250,
    backgroundColor: colors.addingLinksTopContainer,
    marginTop: 90,
    padding: 10,
  },
  editImage: {
    width: 20,
    height: 20,
    tintColor: colors.addingLinkscsutomizeIcon,
  },
  topOfContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customizeBtn: {
    flexDirection: 'row',
    backgroundColor: colors.addingLinkscsutomizeBtn,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 30,
    width: '90%',
  },
  text: {
    color: colors.textColor,
  },
  iconImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  iconImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  scroll: {
    width: '100%',
  },
  txtInput: {
    borderRadius: 10,
    backgroundColor: colors.addingLinksTopContainer,
    width: '90%',
    height: 50,
    margin: 5,
    marginVertical: 15,
    paddingHorizontal: 15,
    color: colors.textColor,
  },
  saveProfileContainer: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 10,
    flexDirection: 'column',
  },
  saveProfileBtn: {
    backgroundColor: colors.secondarySwitchBtnBackground,
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
  saveProfileBtnText: {
    color: colors.secondarySwitchBtnText,
    fontSize: 18,
  },
  saveProfileImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  proImage: {
    width: 20,
    height: 20,
    tintColor: colors.textColor,
    resizeMode: 'contain',
  },
});
