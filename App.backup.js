import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Button,
  NativeModules,
} from 'react-native';
import {PERMISSIONS} from 'react-native-permissions';
import {checkPermission, requestPermission} from './persmissionHelper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const {InAppUpdate, ReactToast, VersionData} = NativeModules;
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPressUpdate = () => {
    ReactToast.showToast(
      'مبلغ اعتبار این تراکنش قبلا به وجه نقد تبدیل شده است.',
    );
    // checkPermission(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
    //   .then(res => {
    //     InAppUpdate.updateApp('https://ver.daapapp.com/android/v3.apk');
    //   })
    //   .catch(
    //     requestPermission(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
    //       .then(res => {
    //         InAppUpdate.updateApp('https://ver.daapapp.com/android/v3.apk');
    //       })
    //       .catch(res => {
    //         ReactToast.showToast('ridi dadash');
    //       }),
    //   );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button
        style={styles.button}
        onPress={onPressUpdate}
        title="Learn More"
        color="#841584"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
});

export default App;
