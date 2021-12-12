import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';

// import {RootState} from '../GlobalStates/store';
import {useAppDispatch, useAppSelector} from '../GlobalStates/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  selectCount,
} from '../GlobalStates/reducers/counterSlice';
import {Button} from '.';

interface CounterStyles {
  count: ViewStyle;
}

const styles: CounterStyles = StyleSheet.create({
  count: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const Counter = ({...props}) => {
  const count = useAppSelector(selectCount);
  /**
   * you can use it instead of above line
   * const count = useAppSelector((state: RootState) => state.counter.value);
   */
  const dispatch = useAppDispatch();

  const counterInc = () => {
    dispatch(increment());
  };
  const counterIncByAmount = () => {
    dispatch(incrementByAmount(5));
  };
  const counterDec = () => {
    dispatch(decrement());
  };
  const counterDecByAmount = () => {
    dispatch(decrementByAmount(5));
  };

  return (
    <View>
      <Button onPress={counterInc} title="increment" />
      <Button onPress={counterIncByAmount} title="increment by 5 amount" />
      <Text style={styles.count}>{count}</Text>
      <Button onPress={counterDecByAmount} title="decrement by 5 amount" />
      <Button onPress={counterDec} title="decrement" />
    </View>
  );
};

export {Counter};
