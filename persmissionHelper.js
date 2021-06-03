import {Platform} from 'react-native';

export function checkPermission() {
  return new Promise(function (resolve, reject) {
    const {
      PERMISSIONS: {ANDROID, IOS},
      check,
      RESULTS,
    } = require('react-native-permissions');
    check(
      Platform.select({
        android: ANDROID.WRITE_EXTERNAL_STORAGE,
        // ios: IOS.LOCATION_WHEN_IN_USE,
      }),
    )
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            reject(result);
            break;
          case RESULTS.DENIED:
            reject(result);
            break;
          case RESULTS.GRANTED:
            resolve(result);
            break;
          case RESULTS.BLOCKED:
            reject(result);
            break;
        }
      })
      .catch(e => {
        reject(e);
      });
  });
}

export function requestPermission() {
  return new Promise(function (resolve, reject) {
    const {
      PERMISSIONS: {ANDROID, IOS},
      RESULTS,
      request,
    } = require('react-native-permissions');
    request(
      Platform.select({
        android: ANDROID.WRITE_EXTERNAL_STORAGE,
        // ios: IOS.LOCATION_WHEN_IN_USE,
      }),
    ).then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          reject(result);
          break;
        case RESULTS.DENIED:
          reject(result);
          break;
        case RESULTS.GRANTED:
          resolve(result);
          break;
        case RESULTS.BLOCKED:
          reject(result);
          break;
      }
    });
  });
}
