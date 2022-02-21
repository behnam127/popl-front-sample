import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async (strKey, item) => {
  let value = JSON.stringify(item);
  if (value) {
    AsyncStorage.setItem(strKey, value);
  }
};

export const getData = (strKey, callback = (response1) => {}) => {
  AsyncStorage.getItem(strKey).then((value) => {
    callback(value);
  });
};
export const deviceName = "";
export const phone = "";
export const lawfirm_id = 1;
export const fcm = "";
export const authurl = "";
export const password = "";
export const deviceID = "8723621352817361287";
export const deviceOs = "iOS";
export const deviceOsVersion = "14.4";
export const appVersion = "2.0.1";
export const timeZone = "+430";

export const getToken = () => {
  AsyncStorage.getItem("token").then((value) => callback(value));
};
export function isEmailValid(email) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email) == 0;
}
