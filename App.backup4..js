import React from 'react';
import {
  View,
  NativeModules,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
// import CameraRoll from '@react-native-community/cameraroll';
// import RNFS from 'react-native-fs';
import {WebView} from 'react-native-webview';

const {ReactToast} = NativeModules;

const App = () => {
  // let svg = React.createRef();
  //
  // const saveQrToDisk = () => {
  //   svg.toDataURL(data => {
  //     RNFS.writeFile(
  //       RNFS.CachesDirectoryPath + '/some-name.png',
  //       data,
  //       'base64',
  //     )
  //       .then(success => {
  //         return CameraRoll.save(
  //           RNFS.CachesDirectoryPath + '/some-name.png',
  //           'photo',
  //         );
  //       })
  //       .then(() => {
  //         // this.setState({busy: false, imageSaved: true});
  //         ReactToast.showToast('Saved to gallery !!');
  //       });
  //   });
  // };

  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: 'lightblue',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}>
  //       <QRCode
  //         value={
  //           '?payment_code=34004732&amount=10000transaction_id=4223kjjnl;kkmdk22'
  //         }
  //         size={200}
  //         getRef={c => (svg = c)}
  //       />
  //       <TouchableNativeFeedback onPress={saveQrToDisk}>
  //         <View styl={{backgroundColor: 'red', padding: 10}}>
  //           <Text>Save To Gallery</Text>
  //         </View>
  //       </TouchableNativeFeedback>
  //     </View>
  //   );
  // };
  const raw = require('./index.html');
  return (
    <WebView
      source={{uri: 'https://web-customer-dev.daapapp.com'}}
      androidHardwareAccelerationDisabled={true} // for prevent crash
      startInLoadingState={true}
      javaScriptEnabled={true}
      renderLoading={() => <ActivityIndicator size={'large'} color={'red'} />}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
