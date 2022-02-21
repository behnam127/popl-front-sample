import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Navigation} from 'react-native-navigation';
import ProgressCircle from 'react-native-progress';
import Spinner from 'react-native-spinkit';
import ml from '@react-native-firebase/ml';

// import TesseractOcr, {
//   LANG_ENGLISH,
//   useEventListener,
// } from 'react-native-tesseract-ocr';
import MlkitOcr, {MlkitOcrResult} from 'react-native-mlkit-ocr';

import colors from '../ThemeColor/ThemeColor';

const DEFAULT_HEIGHT = 500;
const DEFAULT_WITH = 600;
const defaultPickerOptions = {
  cropping: true,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WITH,
};

// const resultFromUri = await MlkitOcr.detectFromUri(uri);
// const resultFromFile = await MlkitOcr.detectFromFile(path);

function ImagePickerScreen(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);
  const [text, setText] = useState('');
  // useEventListener('onProgressChange', p => {
  //   setProgress(p.percent / 100);
  // });

  const recognizeFromCamera = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openCamera(options);
      setImgSrc({uri: image.path});
      console.log('1111111111111111111111111111111');
      await recognizeTextFromImage(image.path);
    } catch (err) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };

  const recognizeFromPicker = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openPicker(options);
      setImgSrc({uri: image.path});
      await recognizeTextFromImage(image.path);
    } catch (err) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };

  const recognizeTextFromImage = async path => {
    setIsLoading(true);

    console.log(path);
    try {
      // const tesseractOptions = {
      //   whitelist: null,
      //   blacklist: null,
      // };
      // const recognizedText = await TesseractOcr.recognize(
      //   path,
      //   LANG_ENGLISH,
      //   tesseractOptions,
      // );

      // const recognizedText = await MlkitOcr.detectFromUri(path);

      const processingResult =
        await ml().cloudDocumentTextRecognizerProcessImage(image.path);

      setText(recognizedText);
      console.log('33333333333333333333');
      console.log(recognizedText);
    } catch (err) {
      console.error(err);
      setText('Nothing to get!');
    }

    setIsLoading(false);
    setProgress(0);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => alert('ok')} style={styles.backBtn}>
          <Image
            style={styles.backBtn}
            source={require('../../assets/images/back.png')}></Image>
        </TouchableOpacity>
      </View> */}
      {imgSrc ? (
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() =>
              recognizeTextFromImage(
                'file:///storage/emulated/0/Android/data/com.myaccidentassist.popl/files/Pictures/9329a775-636b-4caf-a6c3-fe0fba042cac.jpg',
              )
            }>
            <Text>ashnksaas</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Scanned Contact</Text>

          <ScrollView
            style={styles.scroll}
            contentContainerStyle={{alignItems: 'center'}}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={imgSrc} />
            </View>
            <Spinner
              isVisible={isLoading}
              color="#ccc"
              size={25}
              type="Circle"
            />
            <Text style={{width: '80%', textAlign: 'center'}}>{text}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={'Name'}
                style={styles.input}
                placeholderTextColor={'#909090'}></TextInput>
              <TextInput
                placeholder={'Email'}
                style={styles.input}
                placeholderTextColor={'#909090'}></TextInput>
              <TextInput
                placeholder={'Number'}
                style={styles.input}
                placeholderTextColor={'#909090'}></TextInput>
              <TextInput
                placeholder={'Job Title'}
                style={styles.input}
                placeholderTextColor={'#909090'}></TextInput>
              <TextInput
                placeholder={'Company'}
                placeholderTextColor={'#909090'}
                style={styles.input}></TextInput>
              <TextInput
                placeholder={'Website'}
                placeholderTextColor={'#909090'}
                style={styles.input}></TextInput>
              <TextInput
                placeholder={'Adress'}
                placeholderTextColor={'#909090'}
                style={styles.input}></TextInput>
              <TextInput
                placeholder={'Instagram'}
                placeholderTextColor={'#909090'}
                style={styles.input}></TextInput>
              <TextInput
                multiline={true}
                numberOfLines={5}
                textAlignVertical={'top'}
                placeholder={'Notes'}
                placeholderTextColor={'#909090'}
                collapsable={true}
                style={{
                  ...styles.input,
                  alignItems: 'flex-start',
                }}></TextInput>
            </View>
          </ScrollView>
          <View style={styles.addAccountContainer}>
            <TouchableOpacity style={styles.addAnotherBtn}>
              <Text style={styles.addAnotherBtnText}>Save Connection </Text>
              <Image
                style={styles.proImage}
                source={require('../../assets/images/proBlack.png')}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
            onPress={() => Navigation.pop(this.props.componentId)}
            style={styles.canselBtn}>
            <Text style={styles.canselBtnText}>Cansel</Text>
          </TouchableOpacity> */}
          </View>
        </View>
      ) : (
        <>
          <Text style={styles.title}>
            You can scan the Business Card from Camera :
          </Text>
          <View style={styles.options}>
            <View>
              <TouchableOpacity
                style={{backgroundColor: '#000', ...styles.btn1}}
                disabled={isLoading}
                title="Camera"
                onPress={() => {
                  recognizeFromCamera();
                }}>
                <Text style={{color: '#fff', ...styles.btnText}}>
                  Open Camera
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View>
              <TouchableOpacity
                style={{backgroundColor: '#fff', ...styles.btn2}}
                disabled={isLoading}
                title="Picker"
                onPress={() => {
                  recognizeFromPicker();
                }}>
                <Text style={{color: '#000', ...styles.btnText}}>Gallery</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 80,
  },
  backBtn: {
    width: 30,
    height: 30,
    top: Platform.OS === 'ios' ? 25 : 10,
    marginLeft: 10,
    flex: 1,
    alignItems: 'flex-start',
    zIndex: 5,
    tintColor: colors.textColor,
  },
  container2: {
    width: '98%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,

    width: '98%',
  },
  btn1: {
    margin: 20,
    borderRadius: 150,
    marginHorizontal: 10,
    width: 150,
    height: 40,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    margin: 20,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: 10,
    width: 150,
    height: 40,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontWeight: '800',
    fontSize: 22,
    color: '#000',
    alignSelf: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  image: {
    marginVertical: 15,
    height: DEFAULT_HEIGHT / 2.5,
    width: DEFAULT_WITH / 2,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000',
    marginTop: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  },
  scroll: {
    width: '100%',
    height: '85%',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#f2f2f2',
    width: '85%',
    height: 50,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
    color: colors.textColor,
  },
  addAccountContainer: {
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },

  addAnotherBtn: {
    paddingVertical: 10,
    width: '80%',
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5,
    backgroundColor: '#000',
    marginBottom: 10,
    flexDirection: 'row',
  },
  addAnotherBtnText: {
    color: '#fff',
    fontSize: 18,
  },
  proImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    tintColor: '#fff',
    resizeMode: 'contain',
  },
});

export default ImagePickerScreen;
