import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './Styles';
import AddingLinkPage from './AddingLinkPage';
import colors from '../../ThemeColor/ThemeColor';

const BIGBTNDATA = [
  {
    id: '1',
    btnimage: require('../../../assets/images/addLinks/instagram.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Instagram',
    btntext:
      'Instagram is the most popular link on Popl. From small businesses to content creators, everyone is here Join the wave',
  },
  {
    id: '2',
    btnimage: require('../../../assets/images/addLinks/linkedIn.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Linked In',
    btntext:
      'A LinkedIn presence is essential in the world of business. Build your LinkedIn network with Popl',
  },
];

const TRIPLEBTNDATA = [
  {
    id: '1',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/instagram.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/linkedin.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/snapchat.png'),
    tripleBtnTitle1: 'Instagram',
    tripleBtnTitle2: 'LinkedIn',
    tripleBtnTitle3: 'Snapchat',
    tripleDisplay: 'flex',
    tripleDisplay: 'flex',
    tripleDisplay: 'flex',
  },
  {
    id: '2',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/tiktok.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/facebook.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/twitter.png'),
    tripleBtnTitle1: 'Tik Tok',
    tripleBtnTitle2: 'Facebook',
    tripleBtnTitle3: 'Twitter',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'flex',
    tripleDisplay3: 'flex',
  },
  {
    id: '3',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/youtube.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/clubhouse.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/twitch.png'),
    tripleBtnTitle1: 'YouTube',
    tripleBtnTitle2: 'Clubhouse',
    tripleBtnTitle3: 'Twitch',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'flex',
    tripleDisplay3: 'flex',
  },
  {
    id: '4',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/pintrest.png'),
    tripleBtnImage2: '',
    tripleBtnImage3: '',
    tripleBtnTitle1: 'Pintrest',
    tripleBtnTitle2: '',
    tripleBtnTitle3: '',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'none',
    tripleDisplay3: 'none',
  },
];

const BigBtn = ({BigBtnImage, BigBtnFetured, BigBtnTitle, BigBtnText}) => (
  <TouchableOpacity
    onPress={() =>
      Navigation.push(this.props.componentId, {
        component: {
          name: 'AddingLinkPage',
          options: {
            bottomTabs: {
              visible: false,
            },
            topBar: {
              title: {
                text: 'AddingLinkPage',
              },
            },
          },
        },
      })
    }
    style={styles.bigBtn}>
    <Image style={styles.bigBtnImage} source={BigBtnImage}></Image>
    <Text style={styles.bigBtnFeatured}>{BigBtnFetured}</Text>
    <Text style={styles.bigBtnTitle}>{BigBtnTitle}</Text>
    <Text style={styles.bigBtnDescription}>{BigBtnText}</Text>
  </TouchableOpacity>
);

const TripleBtn = ({
  TripleBtnImage1,
  TripleBtnImage2,
  TripleBtnImage3,
  TripleBtnTitle1,
  TripleBtnTitle2,
  TripleBtnTitle3,
  TripleDisplay1,
  TripleDisplay2,
  TripleDisplay3,
}) => (
  <View style={styles.tripleBtnsContainer}>
    <TouchableOpacity style={{...styles.tripleBtns, display: TripleDisplay1}}>
      <View style={{flex: 4, flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.tripleBtnsImage} source={TripleBtnImage1} />
        <Text style={styles.tripleBtnsText}>{TripleBtnTitle1}</Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <TouchableOpacity style={styles.tripleBtnsAddBtn}>
          <Text style={styles.tripleBtnsAddBtnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{...styles.tripleBtns, display: TripleDisplay2}}>
      <View style={{flex: 4, flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.tripleBtnsImage} source={TripleBtnImage2} />
        <Text style={styles.tripleBtnsText}>{TripleBtnTitle2}</Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <TouchableOpacity style={styles.tripleBtnsAddBtn}>
          <Text style={styles.tripleBtnsAddBtnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{...styles.tripleBtns, display: TripleDisplay3}}>
      <View style={{flex: 4, flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.tripleBtnsImage} source={TripleBtnImage3} />
        <Text style={styles.tripleBtnsText}>{TripleBtnTitle3}</Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <TouchableOpacity style={styles.tripleBtnsAddBtn}>
          <Text style={styles.tripleBtnsAddBtnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </View>
);

export default class SocialMedia extends Component {
  renderBigBtn = ({item}) => (
    <BigBtn
      BigBtnImage={item.btnimage}
      BigBtnFetured={item.btnfetured}
      BigBtnTitle={item.btntitle}
      BigBtnText={item.btntext}
    />
  );

  renderTripleBtn = ({item}) => {
    return (
      <TripleBtn
        TripleBtnImage1={item.tripleBtnImage1}
        TripleBtnImage2={item.tripleBtnImage2}
        TripleBtnImage3={item.tripleBtnImage3}
        TripleBtnTitle1={item.tripleBtnTitle1}
        TripleBtnTitle2={item.tripleBtnTitle2}
        TripleBtnTitle3={item.tripleBtnTitle3}
        TripleDisplay1={item.tripleDisplay1}
        TripleDisplay2={item.tripleDisplay2}
        TripleDisplay3={item.tripleDisplay3}
      />
    );
  };
  render() {
    return (
      <SafeAreaView
        style={{
          height: 900,
          width: '100%',
          backgroundColor: colors.addLinksBackgroundColor,
        }}>
        <Text style={styles.bigTitle}>Social Media</Text>
        <FlatList
          style={styles.flatListContainer}
          data={BIGBTNDATA}
          inverted={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderBigBtn}
          keyExtractor={item => item.id}
        />
        <FlatList
          style={styles.flatListContainer}
          data={TRIPLEBTNDATA}
          inverted={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderTripleBtn}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

Navigation.registerComponent('AddingLinkPage', () => AddingLinkPage);
