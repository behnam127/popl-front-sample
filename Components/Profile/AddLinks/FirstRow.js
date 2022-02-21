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
    btnimage: require('../../../assets/images/addLinks/googleReviews.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Reviews',
    btntext:
      'whether you own a small business or are part of a larger one , reviews help build credibility and trust. Get more reviews with Popl',
  },
  {
    id: '2',
    btnimage: require('../../../assets/images/addLinks/instagram.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Reviews',
    btntext:
      'whether you own a small business or are part of a larger one , reviews help build credibility and trust. Get more reviews with Popl',
  },
  {
    id: '3',
    btnimage: require('../../../assets/images/addLinks/customContactCards.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Reviews',
    btntext:
      'whether you own a small business or are part of a larger one , reviews help build credibility and trust. Get more reviews with Popl',
  },
  {
    id: '4',
    btnimage: require('../../../assets/images/addLinks/square.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Reviews',
    btntext:
      'whether you own a small business or are part of a larger one , reviews help build credibility and trust. Get more reviews with Popl',
  },
  {
    id: '5',
    btnimage: require('../../../assets/images/addLinks/hoobe.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Reviews',
    btntext:
      'whether you own a small business or are part of a larger one , reviews help build credibility and trust. Get more reviews with Popl',
  },
  {
    id: '6',
    btnimage: require('../../../assets/images/addLinks/featurePopl.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Reviews',
    btntext:
      'whether you own a small business or are part of a larger one , reviews help build credibility and trust. Get more reviews with Popl',
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

const FirstRow = () => {
  const renderBigBtn = ({item}) => (
    <BigBtn
      BigBtnImage={item.btnimage}
      BigBtnFetured={item.btnfetured}
      BigBtnTitle={item.btntitle}
      BigBtnText={item.btntext}
    />
  );

  return (
    <SafeAreaView
      style={{
        height: 450,
        width: '100%',
        backgroundColor: colors.addLinksBackgroundColor,
      }}>
      <FlatList
        style={styles.flatListContainer}
        data={BIGBTNDATA}
        inverted={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderBigBtn}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

Navigation.registerComponent('AddingLinkPage', () => AddingLinkPage);

export default FirstRow;
