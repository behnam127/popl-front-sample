import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../Header';
import LinearGradient from 'react-native-linear-gradient';
import InsightsPop from './InsightsPop';
import InsightsLinkTaps from './InsightsLinkTaps';
import InsightsNewConnection from './InsightsNewConnection';
import InsightsTapThroughRate from './InsightsTapThroughRate';
import colors from '../ThemeColor/ThemeColor';

export default class Insights extends Component {
  static options() {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme(),
      offsetY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    colors.setTheme(this.state.currentTheme);
    this.addLinkAnimation();
  }

  addLinkAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.offsetY, {
          toValue: -100,
          duration: 10000,
          delay: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.offsetY, {
          toValue: 0,
          duration: 10000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 99999,
      },
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View
          style={{
            alignItems: 'flex-start',
            width: '100%',
            height: 130,
            marginTop: 10,
            zIndex: 5,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1.5}}>
            <Text style={styles.headerText}>Insights</Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={styles.refreshBtn}>
              <Text style={styles.refreshText}>
                Refresh{'   '}
                <Image
                  style={styles.refreshIcon}
                  source={require('../../assets/images/refresh.png')}></Image>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.profileContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/images/profile.png')}></Image>
            <View
              style={{
                flexDirection: 'column',
                alignSelf: 'flex-start',
              }}>
              <Text style={styles.popStreakHeader}>Pop Streak</Text>
              <Text style={styles.popStreakNumber}>0</Text>
              <Text style={styles.popStreakText}>
                you've poped 0 consecutive days
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.last7days}>
            <Text style={styles.last7daysText}>Last 7 days</Text>
          </View>
          <View style={styles.blocksContainer}>
            <View style={{flexDirection: 'row'}}>
              {/* block1 */}
              <View style={styles.blocks}>
                <TouchableOpacity
                  onPress={() =>
                    Navigation.showModal({
                      stack: {
                        children: [
                          {
                            component: {
                              name: 'InsightsPop',
                              options: {
                                modalPresentationStyle: 'overCurrentContext',
                                layout: {
                                  backgroundColor: 'rgba(0,0,0,0.3)',
                                },

                                topBar: {
                                  title: {
                                    text: 'InsightsPop',
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    })
                  }>
                  <Image
                    style={styles.blocksInfo}
                    source={require('../../assets/images/info.png')}></Image>
                </TouchableOpacity>

                <Text style={styles.blocksNumber}>0</Text>
                <Text style={styles.blocksText}>Pops</Text>

                <View style={styles.charts}>
                  <View style={styles.blueLine}></View>
                </View>
              </View>
              {/* block2 */}
              <View style={styles.blocks}>
                <TouchableOpacity
                  onPress={() =>
                    Navigation.showModal({
                      stack: {
                        children: [
                          {
                            component: {
                              name: 'InsightsLinkTaps',
                              options: {
                                modalPresentationStyle: 'overCurrentContext',
                                layout: {
                                  backgroundColor: 'rgba(0,0,0,0.3)',
                                },

                                topBar: {
                                  title: {
                                    text: 'InsightsLinkTaps',
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    })
                  }>
                  <Image
                    style={styles.blocksInfo}
                    source={require('../../assets/images/info.png')}></Image>
                </TouchableOpacity>

                <Text style={styles.blocksNumber}>0</Text>
                <Text style={styles.blocksText}>Link Taps</Text>

                <View style={styles.charts}>
                  <View style={styles.blueLine}></View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* block3 */}
              <View style={styles.blocks}>
                <TouchableOpacity
                  onPress={() =>
                    Navigation.showModal({
                      stack: {
                        children: [
                          {
                            component: {
                              name: 'InsightsNewConnection',
                              options: {
                                modalPresentationStyle: 'overCurrentContext',
                                layout: {
                                  backgroundColor: 'rgba(0,0,0,0.3)',
                                },

                                topBar: {
                                  title: {
                                    text: 'InsightsNewConnection',
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    })
                  }>
                  <Image
                    style={styles.blocksInfo}
                    source={require('../../assets/images/info.png')}></Image>
                </TouchableOpacity>

                <Text style={styles.blocksNumber}>0</Text>
                <Text style={styles.blocksText}>New Connections</Text>

                <View style={styles.charts}>
                  <View style={styles.blueLine}></View>
                </View>
              </View>
              {/* block4 */}
              <View style={styles.blocks}>
                <TouchableOpacity
                  onPress={() =>
                    Navigation.showModal({
                      stack: {
                        children: [
                          {
                            component: {
                              name: 'InsightsTapThroughRate',
                              options: {
                                modalPresentationStyle: 'overCurrentContext',
                                layout: {
                                  backgroundColor: 'rgba(0,0,0,0.3)',
                                },

                                topBar: {
                                  title: {
                                    text: 'InsightsTapThroughRate',
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    })
                  }>
                  <Image
                    style={styles.blocksInfo}
                    source={require('../../assets/images/info.png')}></Image>
                </TouchableOpacity>

                <Text style={styles.blocksNumber}>0%</Text>
                <Text style={styles.blocksText}>Tap Through Rate</Text>

                <View style={styles.charts}>
                  <View style={styles.blueLine}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.EngagementContainer}>
            <Text style={styles.EngagementContainerText}>Link Engagement</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'AddLinks',
                  options: {
                    topBar: {
                      title: {
                        text: 'AddLinks',
                      },
                    },
                  },
                },
              })
            }
            style={styles.addLinks}>
            <Text style={styles.addLinksText}>
              Add links to see insights on them
            </Text>
          </TouchableOpacity>
          <View style={styles.socialsImgContainer}>
            <LinearGradient
              style={{
                width: '100%',
                height: 100,
                zIndex: 10,
                position: 'absolute',
              }}
              colors={[
                colors.primaryGradiantShadow,
                colors.secondaryGradiantShadow,
              ]}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}></LinearGradient>
            <Animated.View
              style={{transform: [{translateY: this.state.offsetY}]}}>
              <Image
                style={styles.socialsImg}
                source={require('../../assets/images/socialsImg.png')}></Image>
            </Animated.View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Navigation.registerComponent('InsightsPop', () => InsightsPop);
Navigation.registerComponent('InsightsLinkTaps', () => InsightsLinkTaps);
Navigation.registerComponent(
  'InsightsNewConnection',
  () => InsightsNewConnection,
);
Navigation.registerComponent(
  'InsightsTapThroughRate',
  () => InsightsTapThroughRate,
);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: colors.backgroundColor,
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  headerText: {
    fontSize: 30,
    top: 50,
    fontWeight: '800',
    color: colors.textColor,
    margin: 20,
    marginLeft: 35,
  },
  refreshBtn: {
    width: 120,
    height: 40,
    top: 70,
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshText: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.textColor,
    bottom: 2,
  },
  refreshIcon: {
    width: 20,
    height: 20,
    tintColor: colors.textColor,
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
  profileContainer: {
    width: '85%',
    height: 170,
    backgroundColor: colors.tripleBtnBackground,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    backgroundColor: colors.addLinksBackgroundColor,
    width: 120,
    height: 120,
    borderRadius: 60,
    margin: 10,
    padding: 10,
    resizeMode: 'cover',
  },
  popStreakHeader: {
    fontSize: 14,
    color: colors.textColor,
    top: 20,
  },
  popStreakNumber: {
    fontSize: 40,
    fontWeight: '400',
    color: colors.textColor,
    top: 20,
  },
  popStreakText: {
    width: 120,
    fontSize: 14,
    color: colors.textColor,
    top: 20,
  },
  last7days: {
    width: '40%',
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.backgroundColor,
    borderWidth: 0.5,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
    top: 25,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  last7daysText: {
    fontSize: 16,
    color: colors.textColor,
    fontWeight: '500',
  },
  blocksContainer: {
    backgroundColor: colors.tripleBtnBackground,
    width: '100%',
    height: 480,
    padding: 10,
    paddingTop: 30,
    alignItems: 'center',
    flexDirection: 'column',
  },
  blocks: {
    width: '40%',
    height: 180,
    borderRadius: 20,
    backgroundColor: colors.backgroundColor,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  blocksInfo: {
    width: 25,
    height: 25,
    margin: 5,
    position: 'relative',
    tintColor: colors.addLinkTextColor,
  },
  blocksNumber: {
    flex: 2,
    fontSize: 30,
    fontWeight: '700',
    color: colors.textColor,
    alignSelf: 'center',
  },
  blocksText: {
    flex: 1,
    color: colors.textColor,
    alignSelf: 'center',
  },
  blocksChild2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blocksChild2Text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  charts: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  blueLine: {
    height: 2,
    width: '50%',
    backgroundColor: '#66ffff',
  },
  EngagementContainer: {
    height: 130,
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  EngagementContainerText: {
    fontWeight: '800',
    fontSize: 25,
    color: colors.textColor,
    alignSelf: 'baseline',
  },
  addLinks: {
    height: 150,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: colors.backgroundColor,
  },
  addLinksText: {
    fontSize: 20,
    color: '#909090',
  },
  socialsImgContainer: {
    width: '100%',
    height: 100,
  },
  socialsImg: {
    width: '100%',
    height: 300,
    zIndex: 0,
  },
});
