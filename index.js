/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import {Profiler} from 'react';
import Home from './Components/Login/Home';
import SignUp from './Components/Login/Register/SignUp';
import PersonalProfile from './Components/Profile/PersonalProfile';
import Connections from './Components/Connection/Connections';
import SignInModal from './Components/Login/SignInModal';
import QrCode from './Components/QR/QrCode';
import Insights from './Components/Insights/Insights';
import SettingPage from './Components/SettingPage/SettingPage';
import LoginWithEmail from './Components/Login/LoginWithEmail';
import UpgradePopup from './Components/UpgradeToPro/UpgradePopup';
import Preview from './Components/Profile/Preview';
import CreateNewConnection from './Components/Connection/CreateNewConnection';
import CreateNewGroup from './Components/Connection/CreateNewGroup';
import EditProfile from './Components/Profile/EditProfile';
import {LogBox} from 'react-native';
import MyAccounts from './Components/SettingPage/MyAccounts';
import AddingLinkPage from './Components/Profile/AddLinks/AddingLinkPage';
import Map from './Components/Map/Map';
import ProfileOfConnections from './Components/Connection/ProfileOfConnections';
import AddBtn from './Components/Connection/AddBtn';
import NFC from './Components/NFC/NFC';
import ImagePickerScreen from './Components/CardScaning/ImagePickerScreen';
import InsightsPop from './Components/Insights/InsightsPop';
import InsightsLinkTaps from './Components/Insights/InsightsLinkTaps';
import InsightsNewConnection from './Components/Insights/InsightsNewConnection';
import InsightsTapThroughRate from './Components/Insights/InsightsTapThroughRate';
import ConnectWithMe from './Components/SettingPage/CompleteYourProfile/ConnectWithMe';
import RegisterCode from './Components/Login/Register/RegisterCode';
import SetPassword from './Components/Login/Register/SetPassword';
import LoginOTP from './Components/Login/Register/LoginOTP';
import HadAccLogin from './Components/Login/Register/HadAccLogin';
import Splash from './Components/Splash';

LogBox.ignoreAllLogs();

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('PersonalProfile', () => PersonalProfile);
Navigation.registerComponent('Connections', () => Connections);
Navigation.registerComponent('SignInModal', () => SignInModal);
Navigation.registerComponent('QrCode', () => QrCode);
Navigation.registerComponent('Insights', () => Insights);
Navigation.registerComponent('SettingPage', () => SettingPage);
Navigation.registerComponent('LoginWithEmail', () => LoginWithEmail);
Navigation.registerComponent('LoginWithEmail', () => LoginWithEmail);
Navigation.registerComponent('Preview', () => Preview);
Navigation.registerComponent('UpgradePopup', () => UpgradePopup);
Navigation.registerComponent('CreateNewConnection', () => CreateNewConnection);
Navigation.registerComponent('CreateNewGroup', () => CreateNewGroup);
Navigation.registerComponent('EditProfile', () => EditProfile);
Navigation.registerComponent('Map', () => Map);
Navigation.registerComponent('MyAccounts', () => MyAccounts);
Navigation.registerComponent('AddBtn', () => AddBtn);
Navigation.registerComponent('NFC', () => NFC);
Navigation.registerComponent('ConnectWithMe', () => ConnectWithMe);
Navigation.registerComponent('ImagePickerScreen', () => ImagePickerScreen);
Navigation.registerComponent('AddingLinkPage', () => AddingLinkPage);
Navigation.registerComponent('RegisterCode', () => RegisterCode);
Navigation.registerComponent('SetPassword', () => SetPassword);
Navigation.registerComponent('LoginOTP', () => LoginOTP);
Navigation.registerComponent('HadAccLogin', () => HadAccLogin);
Navigation.registerComponent('Splash', () => Splash);

Navigation.registerComponent(
  'ProfileOfConnections',
  () => ProfileOfConnections,
);
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

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          stack: {
            children: [
              {
                component: {
                  id: 'STACK_ROOT',
                  name: 'Splash',
                  options: {
                    statusBar: {
                      visible: false,
                    },
                    topBar: {
                      visible: false,
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
});
