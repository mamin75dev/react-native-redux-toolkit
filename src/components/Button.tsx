import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';

import {globalStyles} from '../Global';

interface Props {
  onPress: ((event: GestureResponderEvent) => void);
  title: string;
  containerStyle?: ViewStyle;
}

const Button = ({onPress, containerStyle, title, ...props}: Props) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={{...globalStyles.button, ...containerStyle}}>
        <Text>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export {Button};
