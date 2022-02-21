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
    btnimage: require('../../../assets/images/addLinks/youtube.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Embedded Video',
    btntext:
      'embedded a video right into your Popl digital business card. Allow others to view with just a tap',
  },
  {
    id: '2',
    btnimage: require('../../../assets/images/addLinks/openSea.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'OpenSea',
    btntext: `OpenSea is the world's largest NFT marketplace. Link your Popl digital business card`,
  },
  {
    id: '3',
    btnimage: require('../../../assets/images/addLinks/taraGreen.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'MediaKits',
    btntext:
      'MediaKits makes it eeasy for influencers, photogrphers, and more to create a media kit. Share your media kit eith Popl',
  },
];

const TRIPLEBTNDATA = [
  {
    id: '1',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/customlink.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/file.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/linktree.png'),
    tripleBtnTitle1: 'Custom Link',
    tripleBtnTitle2: 'File',
    tripleBtnTitle3: 'Linktree',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'flex',
    tripleDisplay3: 'flex',
  },
  {
    id: '2',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/onlyfans.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/hoobe.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/embeddedvideo.png'),
    tripleBtnTitle1: 'OnlyFans',
    tripleBtnTitle2: 'hoo.be',
    tripleBtnTitle3: 'Embedded Video',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'flex',
    tripleDisplay3: 'flex',
  },
  {
    id: '3',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/opensea.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/mediakits.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/podcasts.png'),
    tripleBtnTitle1: 'OpenSea',
    tripleBtnTitle2: 'MediaKits',
    tripleBtnTitle3: 'Podcasts',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'flex',
    tripleDisplay3: 'flex',
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

export default class More extends Component {
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
        <Text style={styles.bigTitle}>More</Text>
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
