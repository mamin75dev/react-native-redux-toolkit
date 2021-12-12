import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import {Counter, TodoComponent} from '../components';
import {globalStyles} from '../Global';
import store from '../GlobalStates/store';

export default ({...props}) => {
  return (
    <Provider store={store}>
      <View style={globalStyles.screen}>
        {/* <Counter /> */}
        <TodoComponent />
      </View>
    </Provider>
  );
};
