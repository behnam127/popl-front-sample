import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  Share,
  Linking,
  Platform,
  SafeAreaView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../../Header';
import AddingLinkPage from './AddingLinkPage';
import FirstRow from './FirstRow';
import ContactInfo from './ContactInfo';
import ForBusiness from './ForBusiness';
import More from './More';
import Music from './Music';
import Payments from './Payments';
import SocialMedia from './SocialMedia';
import styles from './Styles';
import colors from '../../ThemeColor/ThemeColor';

const options = {
  subject: 'My Popl Digital Business Card',
  body: 'Here is my digital business card: https://',
};

const operator = Platform.select({ios: '&', android: '?'});

export default class AddLink extends Component {
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
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: colors.addLinksBackgroundColor,
        }}>
        <SafeAreaView
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: colors.addLinksBackgroundColor,
            marginLeft: 20,
          }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() =>
                Navigation.pop(this.props.componentId, {
                  component: {
                    name: 'PersonalProfile',
                    options: {
                      bottomTabs: {
                        visible: false,
                      },
                      topBar: {
                        title: {
                          text: 'PersonalProfile',
                        },
                      },
                    },
                  },
                })
              }
              style={styles.backBtn}>
              <Image
                style={styles.backBtn}
                source={require('../../../assets/images/back.png')}></Image>
            </TouchableOpacity>
            <View style={styles.LinksNumberContainer}>
              <View style={styles.profileImageContainer}>
                <Image
                  style={styles.profileImage}
                  source={require('../../../assets/images/person.png')}></Image>
              </View>
              <Text style={styles.LinksNumberText}>0 Links</Text>
            </View>
          </View>

          <Text style={styles.headerTitle}>Link Store</Text>
          <Text style={styles.headerText}>
            Add links to your personal profile
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Search All Links'}
              style={styles.input}></TextInput>
          </View>
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}>
            {/* -------------------------------------------------------------------Contact Info------------------------------------------------------------------- */}
            <ContactInfo componentId={this.props.componentId} />
            {/* -------------------------------------------------------------------Social Media------------------------------------------------------------------- */}
            <SocialMedia componentId={this.props.componentId} />
            {/* -------------------------------------------------------------------For Business------------------------------------------------------------------- */}
            <ForBusiness componentId={this.props.componentId} />
            {/* -------------------------------------------------------------------Payments------------------------------------------------------------------- */}
            <Payments componentId={this.props.componentId} />
            {/* -------------------------------------------------------------------Music------------------------------------------------------------------- */}
            <Music componentId={this.props.componentId} />
            {/* -------------------------------------------------------------------More------------------------------------------------------------------- */}
            <More componentId={this.props.componentId} />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

Navigation.registerComponent('AddingLinkPage', () => AddingLinkPage);
