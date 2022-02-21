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
    btnimage: require('../../../assets/images/addLinks/easySchedulingAhead.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Calendly',
    btntext:
      'When handing someone a business card, the goal is toset up a meeting... Now you can jump straight to that step',
  },
  {
    id: '2',
    btnimage: require('../../../assets/images/addLinks/icons.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'App Link',
    btntext:
      'There are about 2 million apps on the App Store, making this link extremely versatile. Link your favorite, and share it with others',
  },
  {
    id: '3',
    btnimage: require('../../../assets/images/addLinks/square.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Square',
    btntext:
      'The all-in-one scheduling software for small business. Book appointments for small business. Book appointments right from your digital business card',
  },
];

const TRIPLEBTNDATA = [
  {
    id: '1',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/Safari.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/calendly.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/etsy.png'),
    tripleBtnTitle1: 'Website',
    tripleBtnTitle2: 'Calendly',
    tripleBtnTitle3: 'Etsy',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'flex',
    tripleDisplay3: 'flex',
  },
  {
    id: '2',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/appstore.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/googleReviews.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/square.png'),
    tripleBtnTitle1: 'App Link',
    tripleBtnTitle2: 'Reviews',
    tripleBtnTitle3: 'Square',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'flex',
    tripleDisplay3: 'flex',
  },
  {
    id: '3',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/yelp.png'),
    tripleBtnImage2: '',
    tripleBtnImage3: '',
    tripleBtnTitle1: 'Yelp',
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

export default class ForBusiness extends Component {
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
        <Text style={styles.bigTitle}>For Business</Text>
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
