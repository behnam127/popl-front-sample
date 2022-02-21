import React, {Component, useState} from 'react';
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
import Payments from './Payments';
import colors from '../../ThemeColor/ThemeColor';

const BIGBTNDATA = [
  {
    id: '1',
    btnimage: require('../../../assets/images/addLinks/chat.jpg'),
    btnfetured: 'FETURED',
    btntitle: 'Text',
    btntext:
      'Add your phone number as a text  link so others can instantly shoot you a text and save your number',
    placeholder: 'Numeber',
  },
  {
    id: '2',
    btnimage: require('../../../assets/images/addLinks/customContactCards.jpeg'),
    btnfetured: 'FETURED',
    btntitle: 'Contact Card',
    btntext:
      'All your link, instantly saved to their phone as a contact. This link is powerful',
    placeholder: 'Numeber',
  },
];

const TRIPLEBTNDATA = [
  {
    id: '1',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/Chat.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/email.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/watsapp.png'),
    tripleBtnTitle1: 'Text',
    tripleBtnTitle2: 'Email',
    tripleBtnTitle3: 'WhatsApp',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'flex',
    tripleDisplay3: 'flex',
    placeholder1: 'Numeber',
    placeholder2: 'Link',
    placeholder3: 'Numeber',
  },
  {
    id: '2',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/googlepin.png'),
    tripleBtnImage2: require('../../../assets/images/addLinks/icons/FaceTime.png'),
    tripleBtnImage3: require('../../../assets/images/addLinks/icons/call.png'),
    tripleBtnTitle1: 'Address',
    tripleBtnTitle2: 'FaceTime',
    tripleBtnTitle3: 'Call',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'flex',
    tripleDisplay3: 'flex',
    placeholder1: 'Link',
    placeholder2: 'Id ',
    placeholder3: 'Numeber',
  },
  {
    id: '3',
    tripleBtnImage1: require('../../../assets/images/addLinks/icons/contactcard.png'),
    tripleBtnImage2: '',
    tripleBtnImage3: '',
    tripleBtnTitle1: 'Contact Card',
    tripleBtnTitle2: '',
    tripleBtnTitle3: '',
    tripleDisplay1: 'flex',
    tripleDisplay2: 'none',
    tripleDisplay3: 'none',
    placeholder1: 'Numeber',
    placeholder2: '',
    placeholder3: '',
  },
];

const BigBtn = ({
  BigBtnImage,
  BigBtnFetured,
  BigBtnTitle,
  BigBtnText,
  BigBtnPlaceHolder,
  componentId,
}) => (
  <TouchableOpacity
    onPress={() => {
      Navigation.push(componentId, {
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
          passProps: {
            PassingTitle: BigBtnTitle,
            PassingImageUrl: BigBtnImage,
            passingPlaceholder: BigBtnPlaceHolder,
          },
        },
      });
    }}
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
  TripleBtnPlaceholder1,
  TripleBtnPlaceholder2,
  TripleBtnPlaceholder3,
  componentId,
}) => (
  <View style={styles.tripleBtnsContainer}>
    <TouchableOpacity
      onPress={() => {
        Navigation.push(componentId, {
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
            passProps: {
              PassingTitle: TripleBtnTitle1,
              PassingImageUrl: TripleBtnImage1,
              passingPlaceholder: TripleBtnPlaceholder1,
            },
          },
        });
      }}
      style={{...styles.tripleBtns, display: TripleDisplay1}}>
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
    <TouchableOpacity
      onPress={() => {
        Navigation.push(componentId, {
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
            passProps: {
              PassingTitle: TripleBtnTitle2,
              PassingImageUrl: TripleBtnImage2,
              passingPlaceholder: TripleBtnPlaceholder2,
            },
          },
        });
      }}
      style={{...styles.tripleBtns, display: TripleDisplay2}}>
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
    <TouchableOpacity
      onPress={() => {
        Navigation.push(componentId, {
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
            passProps: {
              PassingTitle: TripleBtnTitle3,
              PassingImageUrl: TripleBtnImage3,
              passingPlaceholder: TripleBtnPlaceholder3,
            },
          },
        });
      }}
      style={{...styles.tripleBtns, display: TripleDisplay3}}>
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

export default class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderBigBtn = ({item}) => (
    <BigBtn
      componentId={this.props.componentId}
      BigBtnImage={item.btnimage}
      BigBtnFetured={item.btnfetured}
      BigBtnTitle={item.btntitle}
      BigBtnText={item.btntext}
      BigBtnPlaceHolder={item.placeholder}
    />
  );

  renderTripleBtn = ({item}) => {
    return (
      <TripleBtn
        componentId={this.props.componentId}
        TripleBtnImage1={item.tripleBtnImage1}
        TripleBtnImage2={item.tripleBtnImage2}
        TripleBtnImage3={item.tripleBtnImage3}
        TripleBtnTitle1={item.tripleBtnTitle1}
        TripleBtnTitle2={item.tripleBtnTitle2}
        TripleBtnTitle3={item.tripleBtnTitle3}
        TripleDisplay1={item.tripleDisplay1}
        TripleDisplay2={item.tripleDisplay2}
        TripleDisplay3={item.tripleDisplay3}
        TripleBtnPlaceholder1={item.placeholder1}
        TripleBtnPlaceholder2={item.placeholder2}
        TripleBtnPlaceholder3={item.placeholder3}
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
        <Text style={styles.bigTitle}>Contact Info</Text>
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
