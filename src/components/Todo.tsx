import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  FlatList,
  Text,
  ListRenderItem,
  TextInput,
} from 'react-native';

import {Button} from '.';
import {useAppDispatch, useAppSelector} from '../GlobalStates/hooks';
import {
  addTodosAsync,
  getTodosAsync,
  showTodo,
  Todo,
} from '../GlobalStates/reducers/todoSlice';

interface TodoStyles {
  buttonsContainer: ViewStyle;
  button: ViewStyle;
  item: ViewStyle;
}

const styles: TodoStyles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 15,
  },
  item: {
    backgroundColor: 'lightgreen',
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5
  }
});

const TodoComponent = ({...props}) => {
  const [todo, setTodo] = React.useState<Todo>({
    id: 1000,
    userId: 1000,
    title: '',
    completed: false,
  });

  const todos = useAppSelector(showTodo);
  const dispatch = useAppDispatch();

  const changeTodo = (title: string) => {
    setTodo({...todo, title});
  };
  const addTodoFunc = () => {
    dispatch(addTodosAsync(todo));
  };
  const getTodosFunc = () => {
    dispatch(getTodosAsync());
  };
  const renderTodo: ListRenderItem<Todo> = ({item}) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  React.useEffect(getTodosFunc, []);

  return (
    <View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={addTodoFunc}
          title="add"
          containerStyle={styles.button}
        />
        <Button
          onPress={getTodosFunc}
          title="get"
          containerStyle={styles.button}
        />
      </View>
      <TextInput />
      <FlatList<Todo> data={todos} renderItem={renderTodo} />
    </View>
  );
};

export {TodoComponent};
